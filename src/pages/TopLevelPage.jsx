import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Search from './Search'
import BlogDetail from './BlogDetail'
import { getSeoPage } from '../utils/seoPages'

// homwisor.com/<slug> — an SEO page (Admin → SEO Pages) if one uses this address,
// otherwise a blog article. The backend keeps the two sets of addresses apart.
export default function TopLevelPage() {
  const { slug } = useParams()
  const [found, setFound] = useState({ slug: null, page: null })

  useEffect(() => {
    let alive = true
    getSeoPage(slug).then((page) => alive && setFound({ slug, page }))
    return () => { alive = false }
  }, [slug])

  if (found.slug !== slug) return <div style={{ minHeight: '100vh' }} />
  return found.page ? <Search key={slug} seoPage={found.page} /> : <BlogDetail />
}
