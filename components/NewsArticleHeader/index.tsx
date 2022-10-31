import Image from "next/image"
import React from "react"
import { formatDateFromISO } from "../../lib/dates"
import { urlFor } from "../../lib/urlFor"
import { ArticleType } from "../../types/article"
import NewsArticleCategories from "../NewsArticleCategories"

type Props = {
	post: ArticleType
}

const NewsArticleHeader = ({ post }: Props) => {
	return (
		<>
			<div className="lg:w-10/12 md:w-10/12 w-full min-h-[50vh] max-h-fit flex flex-col lg:items-start md:items-start items-center justify-center space-y-6 mx-auto lg:px-0 md:px-0 px-4 py-8">
				<span className="text-lg text-gray-500 uppercase lg:text-left md:text-left text-center">
					{formatDateFromISO(post?.publishedAt)}
				</span>
				<h1 className="lg:text-6xl text-5xl lg:w-9/12 md:w-10/12 w-full lg:text-left md:text-left text-center">
					{post.title}
				</h1>
				<p className="lg:text-xl md:text-xl sm:text-lg text-base lg:w-9/12 md:w-10/12 w-full lg:text-left md:text-left text-justify">
					{post.description}
				</p>
				<div className="lg:w-9/12 md:w-10/12 w-full flex flex-row items-center lg:justify-start md:justify-start justify-center space-x-4">
					<div className="relative w-10 h-10">
						<Image
							src={post?.author?.image ? urlFor(post?.author?.image).url() : ""}
							alt={post.author.name}
							layout="fill"
							objectFit="cover"
							objectPosition="bottom"
							className="rounded-full"
						/>
					</div>
					<div className="text-lg text-center font-semibold">{post.author.name}</div>
				</div>
				{post.categories && <NewsArticleCategories categories={post.categories} />}
			</div>
			<div className="w-full flex flex-col items-center mx-auto">
				<div className="relative w-full h-auto lg:aspect-video md:aspect-video aspect-square bg-gray-100">
					{post.mainImage && (
						<Image
							src={urlFor(post.mainImage).url()}
							alt={`Main image from ${post.title}`}
							layout="fill"
							objectFit="cover"
							objectPosition="center"
						/>
					)}
				</div>
			</div>
		</>
	)
}

export default NewsArticleHeader

