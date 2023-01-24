import React from "react"
import dynamic from "next/dynamic"

import type { GetStaticPaths, GetStaticProps } from "next"

import { useNextSanityImage } from "next-sanity-image"

import type { ParsedUrlQuery } from "querystring"
import type { ArticleItemType, ArticleType } from "../../types/article"

import NewsArticleText from "../../components/NewsArticleText"
import NewsArticleHeader from "../../components/NewsArticleHeader"
import SocialMediaShare from "../../components/SocialMediaShare"
import MetaHead from "../../components/MetaHead"

import client from "../../lib/client"
import { headerTitle } from "../../lib/title"
import { getArticleBySlug, getArticleSlugs } from "../../lib/grocQueries"

interface StaticParams extends ParsedUrlQuery {
	slug: string
}

const DynamicRecosGallery = dynamic(() => import("../../components/NewsGallery"), {
	loading: () => <div>Loading ...</div>,
})

const NewsGalleryCaller = ({ recos }: { recos: ArticleItemType[] }) => <DynamicRecosGallery recos={recos} />

const Article = ({ post, recos }: { post: ArticleType; recos: ArticleItemType[] }) => {
	const imageProps = useNextSanityImage(client, post.mainImage)

	return (
		<>
			<MetaHead
				title={`${post.title} - Blog | ${headerTitle}`}
				description={post.description || "A blog post by G. Charles Design"}
				url={process.env.NEXT_PUBLIC_SITE_URL + "/news/" + post.slug.current}
				siteName={`${post.title} - Blog | ${headerTitle}`}
				image={imageProps.src}
			/>
			<NewsArticleHeader post={post} />
			<div className="w-10/12 min-h-screen max-h-fit flex lg:flex-row flex-col items-start justify-center mx-auto">
				<NewsArticleText body={post.body} />
				<SocialMediaShare post={post} />
			</div>
			<div className="w-10/12 mx-auto lg:pt-16 pt-8 space-y-4 flex flex-col items-center border-t-2">
				<h2>You May Also Like</h2>
				<NewsGalleryCaller recos={recos} />
			</div>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await client.fetch(getArticleSlugs)
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug = "" } = context.params as StaticParams
	const post = (await client.fetch(getArticleBySlug, { slug })) as ArticleType
	const recos = post.recos.sort(() => 0.5 - Math.random()).slice(0, 3)

	return {
		props: {
			post,
			recos,
		},
	}
}

export default Article

