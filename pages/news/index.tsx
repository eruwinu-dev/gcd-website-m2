import React from "react"

import type { GetStaticProps } from "next"

import type { ArticleCategoryType, ArticleItemType } from "../../types/article"

import { getArticlesCategoriesQuery } from "../../lib/grocQueries"

import MetaHead from "../../components/MetaHead"
import NewsGallery from "../../components/NewsGallery"
import NewsPageHeader from "../../components/NewsPageHeader"
import NewsCategoriesList from "../../components/NewsCategoriesList"

import client from "../../lib/client"
import { headerTitle } from "../../lib/title"

type Props = {
	articles: ArticleItemType[]
	categories: ArticleCategoryType[]
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
			<NewsCategoriesList categories={categories} />
			<NewsGallery categories={categories} articles={articles} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const { articles, categories, total } = (await client.fetch(getArticlesCategoriesQuery)) as {
		articles: ArticleItemType[]
		categories: ArticleCategoryType[]
		total: number
	}

	return {
		props: {
			articles,
			categories: [
				{
					title: "all",
					description: "All blogs",
					count: total,
				},
				...categories,
			],
		},
	}
}

export default News

