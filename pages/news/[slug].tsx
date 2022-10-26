import React from "react"
import Head from "next/head"
import groq from "groq"

import { headerTitle } from "../../lib/title"
import NewsArticleText from "../../components/NewsArticleText"
import NewsArticleHeader from "../../components/NewsArticleHeader"

import client from "../../lib/client"

import type { ArticleItemType, ArticleType } from "../../types/article"
import type { GetStaticPaths, GetStaticProps } from "next"
import type { ParsedUrlQuery } from "querystring"
import SocialMediaShare from "../../components/SocialMediaShare"
import { getArticleBySlug } from "../../lib/grocQueries"
import NewsGallery from "../../components/NewsGallery"

interface StaticParams extends ParsedUrlQuery {
	slug: string
}

const Article = ({ post, recos }: { post: ArticleType; recos: ArticleItemType[] }) => {
	if (!post) return <></>

	return (
		<>
			<Head>
				<title>{`${post.title} - Blog | ${headerTitle}`}</title>
			</Head>
			<NewsArticleHeader post={post} />
			<div className="w-11/12 min-h-screen max-h-fit translate-y-0 flex flex-row items-start justify-center mx-auto">
				<NewsArticleText body={post.body} />
				<div className="sticky top-16 py-8 w-2/12 flex flex-col items-center justify-center space-y-8">
					<SocialMediaShare post={post} />
				</div>
			</div>
			<div className="w-11/12 mx-auto space-y-4 flex flex-col items-center">
				<h2>You May Also Like</h2>
				<NewsGallery articles={recos} />
			</div>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await client.fetch(groq`*[_type == "post" && defined(slug.current)][].slug.current`)
	return {
		paths: paths.map((slug: string) => ({ params: { slug } })),
		fallback: true,
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

