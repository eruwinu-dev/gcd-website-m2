import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import React from "react"
import { headerTitle } from "../../lib/title"
import { articles } from "../../lib/articles"
import { ArticleType } from "../../types"
import { getArticleText } from "../../lib/api"
import mdToHtml from "../../lib/mdToHtml"

type Props = {}

const Article = ({ article, html }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>{`${article.title} | ${headerTitle}`}</title>
			</Head>
			<section className="translate-y-0 min-h-screen flex-col">
				<h1>{article.title}</h1>
				<article dangerouslySetInnerHTML={{ __html: html }} />
			</section>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: articles.map((article: ArticleType) => ({ params: { article: article.url } })),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const article: ArticleType | undefined = articles.find((article: ArticleType) => article.url === params?.article)

	const content = typeof article === "undefined" ? "" : getArticleText(article)
	const html = await mdToHtml(content || "")

	if (!article) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			article,
			html,
		},
	}
}

export default Article

