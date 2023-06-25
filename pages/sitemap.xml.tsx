import { GetServerSideProps } from "next"

import { getSlugs } from "../lib/slug/getSlugs"

const generateSiteMap = (
    members: string[],
    projects: string[],
    posts: string[]
) => {
    return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
    <loc>https://www.gcharlesdesign.com/about</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    </url>
    ${members
            .map(
                (member) => `<url>
      <loc>https://www.gcharlesdesign.com/about/${member}</loc>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
      </url>`
            )
            .join("")}
    <url>
    <loc>https://www.gcharlesdesign.com/process</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    </url>
    <url>
    <loc>https://www.gcharlesdesign.com/</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    </url>
    <url>
    <loc>https://www.gcharlesdesign.com/contact</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    </url>
    <url>
    <loc>https://www.gcharlesdesign.com/blogs</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    </url>
    ${posts
            .map(
                (post) => `<url>
        <loc>https://www.gcharlesdesign.com/blogs/${post}</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
        </url>`
            )
            .join("")}
    <url>
    <loc>https://www.gcharlesdesign.com/portfolio</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    </url>
    ${projects
            .map(
                (projects) => `<url>
        <loc>https://www.gcharlesdesign.com/portfolio/${projects}</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
        </url>`
            )
            .join("")}
  </urlset>
    `
}

const SiteMap = () => { }

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const members = await getSlugs("author")
    const posts = await getSlugs("post")
    const projects = await getSlugs("project")

    const sitemap = generateSiteMap(members, projects, posts)

    res.setHeader("Content-Type", "text/xml")
    res.write(sitemap)
    res.end()

    return {
        props: {},
    }
}

export default SiteMap
