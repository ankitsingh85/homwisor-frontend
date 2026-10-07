import { useRef, useState } from 'react'
import API from '../utils/api'
import { IMAGE_RULES, imageProblem } from './imageRules'
import './upload.css'

const MAX_INPUT_MB = 20
const ACCEPT = 'image/jpeg,image/png,image/webp,image/avif,image/gif'

// Resize + re-encode in the browser so uploads stay small (usually 100–400 KB)
export async function compressImage(file, { maxSide = 1920, keepPng = false, quality = 0.82 } = {}) {
  if (file.type === 'image/gif') return file // keep animation
  try {
    const bmp = await createImageBitmap(file)
    const scale = Math.min(1, maxSide / Math.max(bmp.width, bmp.height))
    const w = Math.round(bmp.width * scale), h = Math.round(bmp.height * scale)
    const canvas = document.createElement('canvas')
    canvas.width = w; canvas.height = h
    canvas.getContext('2d').drawImage(bmp, 0, 0, w, h)
    const type = keepPng ? 'image/png' : 'image/webp'
    const blob = await new Promise(r => canvas.toBlob(r, type, quality))
    if (!blob || (scale === 1 && blob.size >= file.size)) return file
    const name = file.name.replace(/\.[^.]+$/, '') + (keepPng ? '.png' : '.webp')
    return new File([blob], name, { type })
  } catch {
    return file
  }
}

// Pixel size of a local file or an image URL
const sizeOfFile = async (file) => { const b = await createImageBitmap(file); return { width: b.width, height: b.height } }
const sizeOfUrl = (url) => new Promise((resolve, reject) => {
  const img = new Image()
  img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight })
  img.onerror = () => reject(new Error('This link does not open as an image'))
  img.src = url
})

export async function uploadImage(file, { purpose, maxSide, keepPng, onProgress } = {}) {
  if (!file.type.startsWith('image/')) throw new Error('Please choose an image file (JPG, PNG or WebP)')
  if (file.size > MAX_INPUT_MB * 1024 * 1024) throw new Error(`Image is larger than ${MAX_INPUT_MB} MB`)
  // instant size / shape check (the server checks again after upload)
  let dims = null
  try { dims = await sizeOfFile(file) } catch { /* GIF/unsupported here — the server will check */ }
  if (dims) { const problem = imageProblem(purpose, dims.width, dims.height); if (problem) throw new Error(problem) }
  const ready = await compressImage(file, { maxSide, keepPng })
  const fd = new FormData()
  fd.append('purpose', purpose || '') // must come before the file so the server can read it
  fd.append('file', ready)
  const r = await API.post('/images', fd, {
    onUploadProgress: (e) => onProgress?.(e.total ? e.loaded / e.total : 0),
  })
  return r.data.url
}

const errorOf = (e) => e?.response?.data?.error || e?.message || 'Upload failed'

function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="3" /><circle cx="9" cy="10" r="2" /><path d="m21 16-5-5-9 9" />
      <path d="M17 3v6M14 6l3-3 3 3" />
    </svg>
  )
}

// ---------------------------------------------------------------
// Single image (main photo, logo, banner, thumbnail …)
// ---------------------------------------------------------------
export function ImageUpload({ value, onChange, purpose, aspect = '3 / 2', hint, kind = 'photo', fit = 'cover', maxSide }) {
  const input = useRef(null)
  const [busy, setBusy] = useState(false)
  const [progress, setProgress] = useState(0)
  const [local, setLocal] = useState('')
  const [err, setErr] = useState('')
  const [drag, setDrag] = useState(false)
  const [linkMode, setLinkMode] = useState(false)
  const [link, setLink] = useState('')
  const [broken, setBroken] = useState(false)
  const isLogo = kind === 'logo'

  const pick = () => input.current?.click()

  const handle = async (file) => {
    if (!file) return
    setErr(''); setBusy(true); setProgress(0); setBroken(false)
    const preview = URL.createObjectURL(file)
    setLocal(preview)
    try {
      const url = await uploadImage(file, { purpose, maxSide: maxSide || (isLogo ? 600 : 1920), keepPng: isLogo && file.type === 'image/png', onProgress: setProgress })
      onChange(url)
    } catch (e) {
      setErr(errorOf(e))
    } finally {
      setBusy(false); setLocal(''); URL.revokeObjectURL(preview)
    }
  }

  const onDrop = (e) => { e.preventDefault(); setDrag(false); handle(e.dataTransfer.files?.[0]) }
  const useLink = async () => {
    const url = link.trim()
    if (!url) return
    setErr('')
    try {
      const d = await sizeOfUrl(url)
      const problem = imageProblem(purpose, d.width, d.height)
      if (problem) return setErr(problem)
      onChange(url); setBroken(false); setLinkMode(false); setLink('')
    } catch (e) { setErr(errorOf(e)) }
  }
  const rule = IMAGE_RULES[purpose]

  const shown = local || value
  return (
    <div className={`hwu${isLogo ? ' logo' : ''}`}>
      <input ref={input} type="file" accept={ACCEPT} hidden onChange={e => { handle(e.target.files?.[0]); e.target.value = '' }} />

      {shown ? (
        <div className={`hwu-frame${broken ? ' broken' : ''}`} style={{ aspectRatio: aspect }}>
          <img src={shown} alt="" style={{ objectFit: fit }} onError={() => !local && setBroken(true)} onLoad={() => setBroken(false)} />
          {broken && <div className="hwu-broken">⚠️ This image can’t be shown. Upload it again.</div>}
          {busy && (
            <div className="hwu-busy">
              <span className="hwu-spin" />
              <span>Uploading… {Math.round(progress * 100)}%</span>
              <i style={{ width: `${Math.max(6, progress * 100)}%` }} />
            </div>
          )}
          {!busy && (
            <div className="hwu-actions">
              <button type="button" onClick={pick}>Replace</button>
              <button type="button" onClick={() => onChange('')}>Remove</button>
            </div>
          )}
        </div>
      ) : (
        <button
          type="button"
          className={`hwu-drop${drag ? ' drag' : ''}`}
          style={{ aspectRatio: aspect }}
          onClick={pick}
          onDragOver={e => { e.preventDefault(); setDrag(true) }}
          onDragLeave={() => setDrag(false)}
          onDrop={onDrop}
        >
          <UploadIcon />
          <strong>{drag ? 'Drop to upload' : 'Click to upload or drag & drop'}</strong>
          <span>JPG, PNG or WebP · up to {MAX_INPUT_MB} MB</span>
        </button>
      )}

      {err && <div className="hwu-err">{err}</div>}

      <div className="hwu-foot">
        {(hint || rule) && <span>{hint ? `${hint} · ` : ''}{rule?.shapeName ? <>Must be <b>{rule.shapeName}</b>, e.g. {rule.ideal}</> : !hint && rule && `Use about ${rule.ideal}`}{rule && <> · <b>min {rule.minW} × {rule.minH}</b></>}</span>}
        {!linkMode
          ? <button type="button" className="hwu-linkbtn" onClick={() => setLinkMode(true)}>or paste an image link</button>
          : (
            <span className="hwu-link">
              <input value={link} onChange={e => setLink(e.target.value)} placeholder="https://…" onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), useLink())} autoFocus />
              <button type="button" onClick={useLink}>Use</button>
              <button type="button" onClick={() => { setLinkMode(false); setLink('') }}>✕</button>
            </span>
          )}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------
// Several images (gallery) — upload many at once, remove, set as cover
// ---------------------------------------------------------------
export function GalleryUpload({ value = [], onChange, onMakeCover, max = 20, purpose = 'property', captions, onCaptionsChange }) {
  const input = useRef(null)
  const [queue, setQueue] = useState([]) // [{ id, preview, progress }]
  const [err, setErr] = useState('')
  const [drag, setDrag] = useState(false)
  const [link, setLink] = useState('')

  const images = value.filter(Boolean)
  const room = max - images.length - queue.length

  const handleFiles = async (files) => {
    const list = [...(files || [])].filter(f => f.type.startsWith('image/')).slice(0, Math.max(0, room))
    if (!list.length) return
    setErr('')
    const items = list.map((file, i) => ({ id: `${Date.now()}-${i}`, file, preview: URL.createObjectURL(file), progress: 0 }))
    setQueue(q => [...q, ...items])
    const done = []
    for (const it of items) {
      try {
        const url = await uploadImage(it.file, { purpose, onProgress: p => setQueue(q => q.map(x => x.id === it.id ? { ...x, progress: p } : x)) })
        done.push(url)
      } catch (e) {
        setErr(`${it.file.name}: ${errorOf(e)}`)
      } finally {
        URL.revokeObjectURL(it.preview)
        setQueue(q => q.filter(x => x.id !== it.id))
      }
    }
    if (done.length) {
      onChange([...images, ...done])
      if (onCaptionsChange) onCaptionsChange([...capsOf(images.length), ...done.map(() => '')])
    }
  }

  // captions stay attached to their photo when photos are removed or reordered
  const capsOf = (n) => Array.from({ length: n }, (_, i) => captions?.[i] || '')
  const remove = (i) => {
    onChange(images.filter((_, j) => j !== i))
    if (onCaptionsChange) onCaptionsChange(capsOf(images.length).filter((_, j) => j !== i))
  }
  const move = (i, d) => {
    const j = i + d
    if (j < 0 || j >= images.length) return
    const a = [...images]; [a[i], a[j]] = [a[j], a[i]]; onChange(a)
    if (onCaptionsChange) { const c = capsOf(images.length); [c[i], c[j]] = [c[j], c[i]]; onCaptionsChange(c) }
  }
  const setCaption = (i, v) => { const c = capsOf(images.length); c[i] = v; onCaptionsChange(c) }
  const addLink = async () => {
    const url = link.trim()
    if (!url) return
    setErr('')
    try {
      const d = await sizeOfUrl(url)
      const problem = imageProblem(purpose, d.width, d.height)
      if (problem) return setErr(problem)
      onChange([...images, url]); setLink('')
      if (onCaptionsChange) onCaptionsChange([...capsOf(images.length), ''])
    } catch (e) { setErr(errorOf(e)) }
  }

  return (
    <div className="hwu-gallery">
      <input ref={input} type="file" accept={ACCEPT} multiple hidden onChange={e => { handleFiles(e.target.files); e.target.value = '' }} />
      <div className="hwu-grid">
        {images.map((src, i) => (
          <div key={src + i} className={onCaptionsChange ? 'hwu-tile-wrap' : undefined} style={onCaptionsChange ? undefined : { display: 'contents' }}>
          <div className="hwu-tile">
            <img src={src} alt="" loading="lazy" />
            <span className="hwu-no">{i + 1}</span>
            <div className="hwu-tile-actions">
              {i > 0 && <button type="button" title="Move left" onClick={() => move(i, -1)}>‹</button>}
              {i < images.length - 1 && <button type="button" title="Move right" onClick={() => move(i, 1)}>›</button>}
              {onMakeCover && <button type="button" title="Use as main photo" onClick={() => onMakeCover(src)}>★</button>}
              <button type="button" title="Remove" onClick={() => remove(i)}>✕</button>
            </div>
          </div>
          {onCaptionsChange && (
            <input className="hwu-caption" value={captions?.[i] || ''} onChange={e => setCaption(i, e.target.value)} placeholder="Caption (optional)" maxLength={60} />
          )}
          </div>
        ))}
        {queue.map(it => (
          <div key={it.id} className="hwu-tile uploading">
            <img src={it.preview} alt="" />
            <div className="hwu-busy"><span className="hwu-spin" /><span>{Math.round(it.progress * 100)}%</span><i style={{ width: `${Math.max(6, it.progress * 100)}%` }} /></div>
          </div>
        ))}
        {room > 0 && (
          <button
            type="button"
            className={`hwu-tile hwu-add${drag ? ' drag' : ''}`}
            onClick={() => input.current?.click()}
            onDragOver={e => { e.preventDefault(); setDrag(true) }}
            onDragLeave={() => setDrag(false)}
            onDrop={e => { e.preventDefault(); setDrag(false); handleFiles(e.dataTransfer.files) }}
          >
            <UploadIcon />
            <strong>Add photos</strong>
            <span>Select several at once</span>
          </button>
        )}
      </div>
      {err && <div className="hwu-err">{err}</div>}
      <div className="hwu-foot">
        <span>{images.length} photo{images.length === 1 ? '' : 's'} · use ‹ › to reorder{onMakeCover ? ', ★ to make it the main photo' : ''}</span>
        <span className="hwu-link">
          <input value={link} onChange={e => setLink(e.target.value)} placeholder="or paste an image link" onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addLink())} />
          <button type="button" onClick={addLink}>Add</button>
        </span>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------
// PDF upload (property brochure) → stored link like /api/files/:id
// ---------------------------------------------------------------
const MAX_PDF_MB = 25

export function FileUpload({ value, onChange, label = 'brochure' }) {
  const input = useRef(null)
  const [busy, setBusy] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [drag, setDrag] = useState(false)

  const pick = async (file) => {
    if (!file) return
    setError('')
    if (file.type !== 'application/pdf' && !/\.pdf$/i.test(file.name)) return setError('Please choose a PDF file')
    if (file.size > MAX_PDF_MB * 1024 * 1024) return setError(`PDF is larger than ${MAX_PDF_MB} MB — please compress it first`)
    setBusy(true); setProgress(0)
    try {
      const fd = new FormData()
      fd.append('file', file)
      const r = await API.post('/files', fd, { onUploadProgress: (e) => setProgress(e.total ? e.loaded / e.total : 0) })
      setName(file.name)
      onChange(r.data.url)
    } catch (e) {
      setError(errorOf(e))
    } finally {
      setBusy(false)
      if (input.current) input.current.value = ''
    }
  }

  return (
    <div className="hwu">
      <input ref={input} type="file" accept="application/pdf,.pdf" hidden onChange={e => pick(e.target.files?.[0])} />
      {value ? (
        <div className="hwu-file">
          <span className="hwu-file-ic">PDF</span>
          <span className="hwu-file-name">
            <strong>{name || 'Brochure uploaded'}</strong>
            <a href={value} target="_blank" rel="noreferrer">Open to check ↗</a>
          </span>
          <button type="button" className="hwu-linkbtn" onClick={() => input.current?.click()} disabled={busy}>{busy ? `Uploading ${Math.round(progress * 100)}%` : 'Replace'}</button>
          <button type="button" className="hwu-linkbtn danger" onClick={() => { onChange(''); setName('') }} disabled={busy}>Remove</button>
        </div>
      ) : (
        <button
          type="button"
          className={`hwu-drop${drag ? ' drag' : ''}`}
          style={{ minHeight: 110 }}
          onClick={() => input.current?.click()}
          onDragOver={e => { e.preventDefault(); setDrag(true) }}
          onDragLeave={() => setDrag(false)}
          onDrop={e => { e.preventDefault(); setDrag(false); pick(e.dataTransfer.files?.[0]) }}
          disabled={busy}
        >
          {busy ? <span className="hwu-spin" style={{ borderColor: '#eadfb9', borderTopColor: '#D4AF37' }} /> : <UploadIcon />}
          <strong>{busy ? `Uploading… ${Math.round(progress * 100)}%` : `Upload ${label} PDF`}</strong>
          <span>Click or drop a PDF here · max {MAX_PDF_MB} MB</span>
        </button>
      )}
      {error && <div className="hwu-err">{error}</div>}
    </div>
  )
}
