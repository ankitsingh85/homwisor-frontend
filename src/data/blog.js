// Shared by the blog pages, the header menu and the admin editor

export const BLOG_CATEGORIES = ['Real Estate News', 'Gurgaon', 'Delhi NCR', 'Investment', 'Property Guide']

export const blogDate = (d) => {
  const t = new Date(d)
  return isNaN(t) ? '' : t.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()
}

// "text\n\nmore text" → ["text", "more text"]
export const paragraphs = (text = '') => String(text).split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)

// Words in an article: the rich-text body, or the older section-based content
export const htmlToText = (html = '') => String(html).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ')
export const wordCount = (post = {}) =>
  [post.excerpt, post.body ? htmlToText(post.body) : '', ...(post.body ? [] : (post.content || []).flatMap((s) => [s.heading, s.text]))]
    .join(' ').split(/\s+/).filter(Boolean).length

// ~200 words a minute
export const readTime = (post) => Math.max(1, Math.round(wordCount(post) / 200))
