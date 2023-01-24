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
import { formatDateFromISO } from "../../lib/dates"
import NewsArticleRecos from "../../components/NewsArticleRecos"

type Props = { article: ArticleType; recos: ArticleItemType[] }

interface StaticParams extends ParsedUrlQuery {
	slug: string
}

const Article = ({ article, recos }: Props) => {
	const imageProps = useNextSanityImage(client, article.mainImage)

	return (
		<>
			<MetaHead
				title={`${article.title} - Blog | ${headerTitle}`}
				description={article.description || "A blog post by G. Charles Design"}
				url={process.env.NEXT_PUBLIC_SITE_URL + "/news/" + article.slug}
				siteName={`${article.title} - Blog | ${headerTitle}`}
				image={imageProps.src}
			/>
			<NewsArticleHeader article={article} />
			<div className="news-article-text-container">
				<NewsArticleText body={article.body} />
				<SocialMediaShare article={article} />
			</div>
			<div className="news-recos-container">
				<h2>You May Also Like</h2>
				<NewsArticleRecos recos={recos} />
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
	const { article, recos } = (await client.fetch(getArticleBySlug, { slug })) as {
		article: ArticleType
		recos: ArticleItemType[]
	}

	return {
		props: {
			article: { ...article, publishedAt: article.publishedAt ? formatDateFromISO(article.publishedAt) : "NaN" },
			recos: recos
				.sort(() => 0.5 - Math.random())
				.slice(0, 3)
				.map((reco) => ({
					...reco,
					publishedAt: reco.publishedAt ? formatDateFromISO(reco.publishedAt) : "NaN",
				})),
		},
	}
}

export default Article

