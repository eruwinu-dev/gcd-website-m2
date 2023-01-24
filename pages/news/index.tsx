import React from "react"

import type { GetStaticProps } from "next"

import type { ArticleItemType } from "../../types/article"

import { getArticles } from "../../lib/grocQueries"

import MetaHead from "../../components/MetaHead"
import NewsPageHeader from "../../components/NewsPageHeader"
import NewsGallery from "../../components/NewsGallery"

import client from "../../lib/client"
import { headerTitle } from "../../lib/title"
import { formatDateFromISO } from "../../lib/dates"

type Props = {
	articles: ArticleItemType[]
	categories: string[]
}

const News = ({ articles, categories }: Props) => {
	return (
		<>
			<MetaHead
				title={`News | ${headerTitle}`}
				description="Our knowledge of architecture is informed through years of education and experience. GCD Blog shares our process and things you want to know."
				url={process.env.NEXT_PUBLIC_SITE_URL + "/news"}
				siteName={`News | ${headerTitle}`}
			/>
			<NewsPageHeader />
			<NewsGallery categories={categories} articles={articles} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const { articles, categories } = (await client.fetch(getArticles)) as {
		articles: ArticleItemType[]
		categories: string[]
	}

	return {
		props: {
			articles: articles.map((article) => ({
				...article,
				publishedAt: article.publishedAt ? formatDateFromISO(article.publishedAt) : "NaN",
			})),
			categories: ["all", ...categories],
		},
	}
}

export default News

