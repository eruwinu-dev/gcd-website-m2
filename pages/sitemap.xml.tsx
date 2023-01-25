import { GetServerSideProps } from "next"

import client from "../lib/client"
import { getArticleSlugs, getMemberSlugs, getProjectSlugs } from "../lib/grocQueries"

interface ParamType {
	params: {
		slug: string
	}
}

const generateSiteMap = (members: string[], projects: string[], articles: string[]) => {
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
    <loc>https://www.gcharlesdesign.com/news</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    </url>
    ${articles
		.map(
			(article) => `<url>
        <loc>https://www.gcharlesdesign.com/news/${article}</loc>
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

const SiteMap = () => {}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const memberPaths = (await client.fetch(getMemberSlugs)) as ParamType[]
	const articlePaths = (await client.fetch(getArticleSlugs)) as ParamType[]
	const projectPaths = (await client.fetch(getProjectSlugs)) as ParamType[]

	const members = memberPaths.map((member) => member.params.slug)
	const projects = projectPaths.map((project) => project.params.slug)
	const articles = articlePaths.map((article) => article.params.slug)

	const sitemap = generateSiteMap(members, projects, articles)

	res.setHeader("Content-Type", "text/xml")
	res.write(sitemap)
	res.end()

	return {
		props: {},
	}
}

export default SiteMap

