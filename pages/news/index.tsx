import Head from "next/head"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import { headerTitle } from "../../lib/title"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import groq from "groq"
import client from "../../lib/client"
import { ArticleItemType } from "../../types/article"
import { getArticlesQuery } from "../../lib/grocQueries"
import MainNewsArticle from "../../components/NewsGallery/MainNewsArticle"
import NewsGallery from "../../components/NewsGallery"

type Props = {}

const News = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>{`News | ${headerTitle}`}</title>
			</Head>
			<div className="w-11/12 min-h-screen max-h-fit py-16 mx-auto grid grid-cols-3 grid-flow-row gap-8">
				<MainNewsArticle article={articles[0]} side="left" />
				<MainNewsArticle article={articles[1]} side="right" />
			</div>
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

