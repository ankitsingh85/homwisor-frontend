import { useMemo, useRef, useState } from 'react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import { uploadImage } from './ImageUpload'
import './rich-editor.css'

// Rich-text editor for blog articles (Quill). Headings, lists, links, quotes,
// images (uploaded to our server) and YouTube/Vimeo videos.
// The backend cleans the HTML again on save, so nothing unsafe reaches the site.

const TOOLBAR = [
  [{ header: [2, 3, 4, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ color: [] }, { background: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
  [{ align: [] }],
  ['blockquote', 'link', 'image', 'video'],
  ['clean'],
]

const FORMATS = [
  'header', 'bold', 'italic', 'underline', 'strike', 'color', 'background',
  'list', 'indent', 'align', 'blockquote', 'link', 'image', 'video',
]

export default function RichEditor({ value, onChange, placeholder = 'Write the article…' }) {
  const quillRef = useRef(null)
  const [busy, setBusy] = useState('')
  const [error, setError] = useState('')

  const modules = useMemo(() => ({
    toolbar: {
      container: TOOLBAR,
      handlers: {
        // upload the picked photo, then insert it where the cursor is
        image() {
          const input = document.createElement('input')
          input.type = 'file'
          input.accept = 'image/*'
          input.onchange = async () => {
            const file = input.files?.[0]
            if (!file) return
            const editor = quillRef.current?.getEditor()
            const range = editor?.getSelection(true)
            setError(''); setBusy('Uploading photo… 0%')
            try {
              const url = await uploadImage(file, { purpose: 'inline', maxSide: 1600, onProgress: (p) => setBusy(`Uploading photo… ${Math.round(p * 100)}%`) })
              const at = range ? range.index : editor.getLength()
              editor.insertEmbed(at, 'image', url, 'user')
              editor.setSelection(at + 1, 0)
            } catch (e) {
              setError(e?.response?.data?.error || e?.message || 'Upload failed')
            } finally {
              setBusy('')
            }
          }
          input.click()
        },
      },
    },
    clipboard: { matchVisual: false },
  }), [])

  return (
    <div className="hwq">
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value || ''}
        onChange={(html, delta, source, editor) => onChange(editor.getText().trim() || /<(img|iframe)/.test(html) ? html : '')}
        modules={modules}
        formats={FORMATS}
        placeholder={placeholder}
      />
      {busy && <div className="hwq-status">{busy}</div>}
      {error && <div className="hwu-err" style={{ marginTop: 8 }}>{error}</div>}
    </div>
  )
}
