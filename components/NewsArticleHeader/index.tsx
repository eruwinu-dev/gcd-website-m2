import React from "react"

import Image from "next/image"

import type { ArticleType } from "../../types/article"

import NewsArticleCategories from "../NewsArticleCategories"

import { formatDateFromISO } from "../../lib/dates"
import NewsArticleAuthor from "./NewsArticleAuthor"
import { useNextSanityImage } from "next-sanity-image"
import client from "../../lib/client"

type Props = {
	post: ArticleType
}

const NewsArticleHeader = ({ post }: Props) => {
	const imageProps = useNextSanityImage(client, post.mainImage)

	return (
		<>
			<div className="lg:w-10/12 md:w-10/12 w-full min-h-[50vh] max-h-fit flex flex-col lg:items-start md:items-start items-center justify-center space-y-6 mx-auto lg:px-0 md:px-0 px-4 py-8">
				<span className="text-lg text-gray-500 uppercase lg:text-left md:text-left text-center">
					{formatDateFromISO(post?.publishedAt)}
				</span>
				<h1 className="lg:text-6xl md:text-5xl lg:w-9/12 md:w-10/12 w-full lg:text-left md:text-left text-center">
					{post.title}
				</h1>
				<p className="lg:text-xl md:text-xl sm:text-lg text-base lg:w-9/12 md:w-10/12 w-full lg:text-left md:text-left text-justify">
					{post.description}
				</p>
				<NewsArticleAuthor post={post} />
				{post.categories && <NewsArticleCategories categories={post.categories} />}
			</div>
			<div className="w-full flex flex-col items-center mx-auto">
				<div className="relative w-full h-auto lg:aspect-video md:aspect-video aspect-square bg-gray-100">
					{imageProps ? (
						<Image
							src={imageProps.src}
							loader={imageProps.loader}
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

