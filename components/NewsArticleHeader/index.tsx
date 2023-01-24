import React from "react"

import Image from "next/image"

import type { ArticleType } from "../../types/article"

import NewsArticleHeaderAuthor from "./NewsArticleHeaderAuthor"
import { useNextSanityImage } from "next-sanity-image"
import client from "../../lib/client"

type Props = {
	article: ArticleType
}

const NewsArticleHeader = ({ article }: Props) => {
	const imageProps = useNextSanityImage(client, article.mainImage)

	return (
		<>
			<div className="news-article-header">
				<span>{article.publishedAt}</span>
				<h1>{article.title}</h1>
				<p>{article.description}</p>
				<NewsArticleHeaderAuthor author={article.author} />
			</div>
			<div className="news-article-header-image">
				<div>
					{imageProps ? (
						<Image
							src={imageProps.src}
							loader={imageProps.loader}
							alt={`The main image for the article ${article.title} by ${article.author.name}, writer for G. Charles Design`}
							layout="fill"
							objectFit="cover"
							objectPosition="center"
							priority
						/>
					) : null}
				</div>
			</div>
		</>
	)
}

export default NewsArticleHeader

