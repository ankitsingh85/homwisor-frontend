import { useEffect, useState } from 'react'
import API from '../utils/api'
import { setSession, passwordProblem, EMAIL_RE } from '../utils/auth'
import { Icon, PasswordInput, StrengthBar, Spinner, Alert } from './ui'
import './admin.css'

const errorOf = (e, fallback) => e.response?.data?.error || fallback

const formatDate = (d) => d ? new Date(d).toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Never'

// ---------------------------------------------------------------
// Change own password — used in the Admins tab and as the forced
// first-login step. Calls onChanged(admin) with the updated admin.
// ---------------------------------------------------------------
export function ChangePasswordForm({ admin, onChanged, submitLabel = 'Update Password' }) {
  const [f, setF] = useState({ current: '', next: '', confirm: '' })
  const [err, setErr] = useState('')
  const [ok, setOk] = useState('')
  const [saving, setSaving] = useState(false)

  const problem = f.next ? passwordProblem(f.next, admin?.email) : null
  const mismatch = f.confirm && f.confirm !== f.next

  const submit = async (e) => {
    e.preventDefault()
    setErr(''); setOk('')
    if (problem) return setErr(problem)
    if (f.next !== f.confirm) return setErr('New passwords do not match')
    setSaving(true)
    try {
      const r = await API.put('/admin/me/password', { currentPassword: f.current, newPassword: f.next })
      setSession(r.data.token, r.data.admin)
      setF({ current: '', next: '', confirm: '' })
      setOk('Password updated. Other sessions have been signed out.')
      onChanged?.(r.data.admin)
    } catch (e) {
      setErr(errorOf(e, 'Could not update password'))
    } finally { setSaving(false) }
  }

  return (
    <form onSubmit={submit} noValidate>
      {err && <Alert>{err}</Alert>}
      {ok && <Alert type="success">{ok}</Alert>}
      <div className="hwa-field">
        <label>Current password</label>
        <PasswordInput value={f.current} onChange={v => setF({ ...f, current: v })} autoComplete="current-password" placeholder="Your current password" />
      </div>
      <div className="hwa-field">
        <label>New password</label>
        <PasswordInput value={f.next} onChange={v => setF({ ...f, next: v })} autoComplete="new-password" placeholder="8+ characters, letters & numbers" invalid={!!problem} />
        {problem ? <span className="hwa-hint bad">{problem}</span> : <StrengthBar value={f.next} />}
      </div>
      <div className="hwa-field">
        <label>Confirm new password</label>
        <PasswordInput value={f.confirm} onChange={v => setF({ ...f, confirm: v })} autoComplete="new-password" placeholder="Repeat new password" invalid={mismatch} />
        {mismatch && <span className="hwa-hint bad">Passwords do not match</span>}
      </div>
      <button className="hwa-btn hwa-btn-gold" disabled={saving || !f.current || !f.next || !f.confirm}>
        {saving ? <><Spinner /> Saving…</> : submitLabel}
      </button>
    </form>
  )
}

// ---------------------------------------------------------------
// Admins tab
// ---------------------------------------------------------------
const emptyAdmin = { name: '', email: '', password: '', confirm: '', role: 'admin' }

export default function AdminUsers({ me, onMeChange }) {
  const isSuper = me?.role === 'superadmin'
  const [admins, setAdmins] = useState([])
  const [loading, setLoading] = useState(isSuper)
  const [listErr, setListErr] = useState('')
  const [form, setForm] = useState(emptyAdmin)
  const [formErr, setFormErr] = useState('')
  const [formOk, setFormOk] = useState('')
  const [saving, setSaving] = useState(false)
  const [busyId, setBusyId] = useState(null)

  const load = async () => {
    if (!isSuper) return
    try {
      const r = await API.get('/admin/users')
      setAdmins(r.data); setListErr('')
    } catch (e) {
      setListErr(errorOf(e, 'Could not load admins'))
    } finally { setLoading(false) }
  }
  useEffect(() => { load() }, [isSuper])

  const email = form.email.trim().toLowerCase()
  const emailBad = email && !EMAIL_RE.test(email)
  const pwProblem = form.password ? passwordProblem(form.password, email) : null
  const mismatch = form.confirm && form.confirm !== form.password

  const create = async (e) => {
    e.preventDefault()
    setFormErr(''); setFormOk('')
    if (form.name.trim().length < 2) return setFormErr('Enter the admin’s full name')
    if (!email || emailBad) return setFormErr('Enter a valid email address')
    if (pwProblem) return setFormErr(pwProblem)
    if (form.password !== form.confirm) return setFormErr('Passwords do not match')
    setSaving(true)
    try {
      const r = await API.post('/admin/users', {
        name: form.name.trim(), email, password: form.password, role: form.role
      })
      setFormOk(`Admin ${r.data.email} created. They can now sign in with this email — share the password securely.`)
      setForm(emptyAdmin)
      load()
    } catch (e) {
      setFormErr(errorOf(e, 'Could not create admin'))
    } finally { setSaving(false) }
  }

  const act = async (a, fn, confirmText) => {
    if (confirmText && !window.confirm(confirmText)) return
    setBusyId(a.id)
    try { await fn(); await load() }
    catch (e) { alert(errorOf(e, 'Action failed')) }
    finally { setBusyId(null) }
  }
  const toggleActive = (a) => act(a, () => API.patch(`/admin/users/${a.id}`, { active: !a.active }),
    a.active ? `Disable ${a.email}? They will be signed out immediately.` : null)
  const toggleRole = (a) => act(a, () => API.patch(`/admin/users/${a.id}`, { role: a.role === 'superadmin' ? 'admin' : 'superadmin' }),
    a.role === 'superadmin' ? `Remove super admin rights from ${a.email}?` : `Make ${a.email} a super admin? They will be able to manage all admins.`)
  const remove = (a) => act(a, () => API.delete(`/admin/users/${a.id}`),
    `Permanently delete admin ${a.email}? This cannot be undone.`)

  return (
    <div className="hwa hwa-section hwa-light">
      <div className="hwa-section-head">
        <div>
          <h2>{isSuper ? 'Admins & Security' : 'My Account'}</h2>
          <p>{isSuper ? 'Create admin accounts, control access and keep your own password up to date.' : 'Update your password. Sessions expire automatically after 24 hours.'}</p>
        </div>
      </div>

      <div className="hwa-grid-2">
        {isSuper ? (
          <div style={{ display: 'grid', gap: 16 }}>
            {/* CREATE */}
            <div className="hwa-card">
              <div className="hwa-card-title"><span className="dot"><Icon.plus /></span> Create new admin</div>
              {formErr && <Alert>{formErr}</Alert>}
              {formOk && <Alert type="success">{formOk}</Alert>}
              <form onSubmit={create} noValidate>
                <div className="hwa-row-2">
                  <div className="hwa-field">
                    <label>Full name</label>
                    <div className="hwa-input-wrap"><Icon.user />
                      <input className="hwa-input" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="e.g. Vishal Dixit" autoComplete="off" />
                    </div>
                  </div>
                  <div className="hwa-field">
                    <label>Email (used to sign in)</label>
                    <div className="hwa-input-wrap"><Icon.mail />
                      <input className={`hwa-input${emailBad ? ' invalid' : ''}`} type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="name@homwisor.com" autoComplete="off" autoCapitalize="none" spellCheck={false} />
                    </div>
                    {emailBad && <span className="hwa-hint bad">Enter a valid email address</span>}
                  </div>
                </div>
                <div className="hwa-row-2">
                  <div className="hwa-field">
                    <label>Password</label>
                    <PasswordInput value={form.password} onChange={v => setForm({ ...form, password: v })} autoComplete="new-password" placeholder="8+ chars, letters & numbers" invalid={!!pwProblem} />
                    {pwProblem ? <span className="hwa-hint bad">{pwProblem}</span> : <StrengthBar value={form.password} />}
                  </div>
                  <div className="hwa-field">
                    <label>Confirm password</label>
                    <PasswordInput value={form.confirm} onChange={v => setForm({ ...form, confirm: v })} autoComplete="new-password" placeholder="Repeat password" invalid={mismatch} />
                    {mismatch && <span className="hwa-hint bad">Passwords do not match</span>}
                  </div>
                </div>
                <div className="hwa-field">
                  <label>Role</label>
                  <div className="hwa-role-toggle">
                    <button type="button" className={form.role === 'admin' ? 'active' : ''} onClick={() => setForm({ ...form, role: 'admin' })}>
                      <strong>Admin</strong><span>Manage website content</span>
                    </button>
                    <button type="button" className={form.role === 'superadmin' ? 'active' : ''} onClick={() => setForm({ ...form, role: 'superadmin' })}>
                      <strong>Super Admin</strong><span>Content + manage admins</span>
                    </button>
                  </div>
                </div>
                <button className="hwa-btn hwa-btn-gold" disabled={saving}>
                  {saving ? <><Spinner /> Creating…</> : 'Create Admin'}
                </button>
              </form>
            </div>

            {/* LIST */}
            <div className="hwa-card">
              <div className="hwa-card-title"><span className="dot"><Icon.users /></span> All admins <span style={{ fontWeight: 500, color: '#9ca3af', fontSize: 13 }}>({admins.length})</span></div>
              {listErr && <Alert>{listErr}</Alert>}
              {loading ? <div className="hwa-hint">Loading…</div> : (
                <div className="hwa-admin-list">
                  {admins.map(a => {
                    const self = a.id === me?.id
                    return (
                      <div key={a.id} className={`hwa-admin-row${a.active ? '' : ' inactive'}`}>
                        <div className="hwa-avatar">{(a.name || a.email).slice(0, 1).toUpperCase()}</div>
                        <div className="hwa-admin-meta">
                          <div className="name">
                            {a.name}
                            <span className={`hwa-badge ${a.role === 'superadmin' ? 'super' : 'admin'}`}>{a.role === 'superadmin' ? 'Super Admin' : 'Admin'}</span>
                            {self && <span className="hwa-badge you">You</span>}
                            {!a.active && <span className="hwa-badge off">Disabled</span>}
                          </div>
                          <div className="sub">{a.email} · Last login: {formatDate(a.lastLoginAt)}</div>
                        </div>
                        {!self && (
                          <div className="hwa-row-actions">
                            <button className="hwa-mini" disabled={busyId === a.id} onClick={() => toggleRole(a)}>{a.role === 'superadmin' ? 'Make Admin' : 'Make Super'}</button>
                            <button className="hwa-mini" disabled={busyId === a.id} onClick={() => toggleActive(a)}>{a.active ? 'Disable' : 'Enable'}</button>
                            <button className="hwa-mini danger" disabled={busyId === a.id} onClick={() => remove(a)}>Delete</button>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="hwa-card">
            <div className="hwa-card-title"><span className="dot"><Icon.user /></span> Profile</div>
            <div className="hwa-admin-row">
              <div className="hwa-avatar">{(me?.name || me?.email || '?').slice(0, 1).toUpperCase()}</div>
              <div className="hwa-admin-meta">
                <div className="name">{me?.name} <span className="hwa-badge admin">Admin</span></div>
                <div className="sub">{me?.email}</div>
              </div>
            </div>
            <p className="hwa-hint" style={{ marginTop: 12 }}>Only a super admin can create or manage admin accounts.</p>
          </div>
        )}

        {/* OWN PASSWORD */}
        <div className="hwa-card">
          <div className="hwa-card-title"><span className="dot"><Icon.key /></span> Change my password</div>
          <ChangePasswordForm admin={me} onChanged={onMeChange} />
          <p className="hwa-hint" style={{ marginTop: 12, display: 'flex', gap: 6, alignItems: 'center' }}>
            <Icon.clock style={{ width: 14, height: 14 }} /> Sessions expire automatically 24 hours after sign-in.
          </p>
        </div>
      </div>
    </div>
  )
}
