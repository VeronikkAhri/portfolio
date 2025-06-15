// Generate sitemap dynamically
const siteUrl = "https://veronikadev.netlify.app/";

interface Page {
  url: string;
  changefreq: string;
  priority: string;
  lastmod?: string;
}

// Static pages
const staticPages: Page[] = [
  { url: "", changefreq: "weekly", priority: "1.0" },
  { url: "/blog", changefreq: "weekly", priority: "0.9" },
];

// Blog posts (in a real app, this would come from a CMS or file system)
const blogPosts = [
  { slug: "the-art-of-minimal-ux-design", date: "2024-12-15" },
  { slug: "building-scalable-angular-applications", date: "2024-12-10" },
  { slug: "my-journey-from-mexico-to-google", date: "2024-12-05" },
  { slug: "devops-culture-in-modern-teams", date: "2024-11-28" },
  { slug: "design-systems-with-figma", date: "2024-11-20" },
  { slug: "the-kawaii-aesthetic-in-professional-work", date: "2024-11-15" },
];

// Combine all pages
const allPages: Page[] = [
  ...staticPages,
  ...blogPosts.map((post) => ({
    url: `/blog/${post.slug}`,
    changefreq: "monthly",
    priority: "0.8",
    lastmod: post.date,
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>`;

export function GET() {
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
