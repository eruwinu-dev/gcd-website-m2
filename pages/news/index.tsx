import React from "react"
import Head from "next/head"
import type { GetStaticProps, InferGetStaticPropsType } from "next"

import type { ArticleCategoryType, ArticleItemType } from "../../types/article"

import client from "../../lib/client"

import { getArticlesQuery, getCategoriesQuery } from "../../lib/grocQueries"

import NewsGallery from "../../components/NewsGallery"

import { headerTitle } from "../../lib/title"
import NewsPageHeader from "../../components/NewsPageHeader"
import NewsCategoriesList from "../../components/NewsCategoriesList"

type Props = {}

const News = ({ articles, categories }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>{`News | ${headerTitle}`}</title>
			</Head>
			<NewsPageHeader />
			<NewsCategoriesList categories={categories} />
			<NewsGallery articles={articles} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const articles = (await client.fetch(getArticlesQuery)) as ArticleItemType[]
	const categories = (await client.fetch(getCategoriesQuery)) as ArticleCategoryType[]

	return {
		props: {
			articles,
			categories,
		},
	}
}

export default News

