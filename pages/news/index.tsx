import React from "react"
import Head from "next/head"
import type { GetStaticProps, InferGetStaticPropsType } from "next"

import type { ArticleItemType } from "../../types/article"

import client from "../../lib/client"

import { getArticlesQuery } from "../../lib/grocQueries"

import MainNewsArticle from "../../components/NewsGallery/MainNewsArticle"
import NewsGallery from "../../components/NewsGallery"

import { headerTitle } from "../../lib/title"
import NewsPageHeader from "../../components/NewsPageHeader"

type Props = {}

const News = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>{`News | ${headerTitle}`}</title>
			</Head>
			<NewsPageHeader />
			<MainNewsArticle article={articles[0]} side="left" />
			<MainNewsArticle article={articles[1]} side="right" />
			<NewsGallery articles={articles.slice(2, articles.length)} />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const articles = (await client.fetch(getArticlesQuery)) as ArticleItemType[]

	return {
		props: {
			articles,
		},
	}
}

export default News

