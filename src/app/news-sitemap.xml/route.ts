import { NextResponse } from "next/server"

export async function GET() {
  const articles = await fetchAllArticles()
  const xml = generateNewsSitemapXml(articles)
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
async function fetchAllArticles() {
  return []
}

function generateNewsSitemapXml(articles: any[]) {
  const baseUrl = "https://sarabelanews24.com"

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n'

  articles.forEach((article) => {
    const pubDate = new Date(article.publishedAt)
    const formattedPubDate = pubDate.toISOString()

    xml += "  <url>\n"
    xml += `    <loc>${baseUrl}/${article.category}/${article.slug}</loc>\n`
    xml += "    <news:news>\n"
    xml += "      <news:publication>\n"
    xml += "        <news:name>সারাবেলা নিউজ ২৪</news:name>\n"
    xml += "        <news:language>bn</news:language>\n"
    xml += "      </news:publication>\n"
    xml += `      <news:publication_date>${formattedPubDate}</news:publication_date>\n`
    xml += `      <news:title>${escapeXml(article.title)}</news:title>\n`
    xml += "    </news:news>\n"
    xml += "  </url>\n"
  })

  xml += "</urlset>"

  return xml
}
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;"
      case ">":
        return "&gt;"
      case "&":
        return "&amp;"
      case "'":
        return "&apos;"
      case '"':
        return "&quot;"
      default:
        return c
    }
  })
}

