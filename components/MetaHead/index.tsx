import Head from "next/head"
import React from "react"

type Props = {
	defaultSeo?: boolean
	title: string
	description: string
	url: string
	siteName: string
	image?: string
}

const MetaHead = ({ defaultSeo = false, title, description, url, siteName, image }: Props) => {
	return (
		<Head>
			{!defaultSeo ? <title>{title}</title> : null}
			<link rel="canonical" href={url} />
			<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
			<meta name="description" content={description} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta name="og:url" content={url} />
			<meta name="og:site_name" content={siteName} />
			{image ? <meta name="og:image" content={image} /> : null}
		</Head>
	)
}

export default MetaHead

