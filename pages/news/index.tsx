import React, { useEffect, useRef } from "react"
import type { GetServerSideProps } from "next"

import type { ArticleCategoryType, ArticleItemType } from "../../types/article"

import client from "../../lib/client"

import { getArticlesCategoriesQuery } from "../../lib/grocQueries"

import NewsGallery from "../../components/NewsGallery"

import { headerTitle } from "../../lib/title"
import NewsPageHeader from "../../components/NewsPageHeader"
import NewsCategoriesList from "../../components/NewsCategoriesList"
import useStateContext from "../../context/State"
import MetaHead from "../../components/MetaHead"

type Props = {
	articlesFromSanity: ArticleItemType[]
	categoriesFromSanity: ArticleCategoryType[]
}

const News = ({ articlesFromSanity, categoriesFromSanity }: Props) => {
	const { setArticles, setCategories } = useStateContext()

	const calledOnce = useRef(false)

	useEffect(() => {
		if (calledOnce.current) return
		else {
			setArticles(articlesFromSanity)
			setCategories(categoriesFromSanity)
			calledOnce.current = true
		}

		return () => {}
	}, [])

	return (
		<>
			<MetaHead
				title={`News | ${headerTitle}`}
				description="Our knowledge of architecture is informed through years of education and experience. GCD Blog shares our process and things you want to know."
				url={process.env.NEXT_PUBLIC_SITE_URL + "/news"}
				siteName={`News | ${headerTitle}`}
			/>
			<NewsPageHeader />
			<NewsCategoriesList />
			<NewsGallery />
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
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

