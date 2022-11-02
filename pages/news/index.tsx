import React, { useEffect } from "react"
import Head from "next/head"
import type { GetStaticProps, InferGetStaticPropsType } from "next"

import type { ArticleCategoryType, ArticleItemType } from "../../types/article"

import client from "../../lib/client"

import { getArticlesCategoriesQuery } from "../../lib/grocQueries"

import NewsGallery from "../../components/NewsGallery"

import { headerTitle } from "../../lib/title"
import NewsPageHeader from "../../components/NewsPageHeader"
import NewsCategoriesList from "../../components/NewsCategoriesList"
import useStateContext from "../../context/State"

type Props = {}

const News = ({ articlesFromSanity, categoriesFromSanity }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { setArticles, setCategories } = useStateContext()

	useEffect(() => {
		setArticles(articlesFromSanity)
		setCategories(categoriesFromSanity)
		return () => {}
	}, [])

	return (
		<>
			<Head>
				<title>{`News | ${headerTitle}`}</title>
			</Head>
			<NewsPageHeader />
			<NewsCategoriesList />
			<NewsGallery />
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
			articlesFromSanity: articles,
			categoriesFromSanity: [
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

