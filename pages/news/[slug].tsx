import React from "react"

import Head from "next/head"
import groq from "groq"

import type { ParsedUrlQuery } from "querystring"
import type { ArticleItemType, ArticleType } from "../../types/article"
import type { GetStaticPaths, GetStaticProps } from "next"

import NewsGallery from "../../components/NewsGallery"
import NewsArticleText from "../../components/NewsArticleText"
import NewsArticleHeader from "../../components/NewsArticleHeader"
import SocialMediaShare from "../../components/SocialMediaShare"

import client from "../../lib/client"
import { headerTitle } from "../../lib/title"
import { getArticleBySlug } from "../../lib/grocQueries"

interface StaticParams extends ParsedUrlQuery {
	slug: string
}

const Article = ({ post, recos }: { post: ArticleType; recos: ArticleItemType[] }) => {
	return (
		<>
			<Head>
				<title>{`${post.title} - Blog | ${headerTitle}`}</title>
			</Head>
			<NewsArticleHeader post={post} />
			<div className="w-10/12 min-h-screen max-h-fit flex lg:flex-row flex-col items-start justify-center mx-auto">
				<NewsArticleText body={post.body} author={post.author} />
				<SocialMediaShare post={post} />
			</div>
			<div className="w-10/12 mx-auto lg:pt-16 pt-8 space-y-4 flex flex-col items-center border-t-2">
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

