import Image from "next/image"
import React from "react"
import { formatDateFromISO } from "../../lib/dates"
import { urlFor } from "../../lib/urlFor"
import { ArticleType } from "../../types/article"

type Props = {
	post: ArticleType
}

const NewsArticleHeader = ({ post }: Props) => {
	return (
		<>
			<div className="w-full flex flex-col items-center justify-center space-y-4 my-16 mx-auto">
				{post.categories && (
					<ul className="flex flex-row items-center justify-center space-x-2">
						{post.categories.map((category: any) => (
							<li key={category}>#{category}</li>
						))}
					</ul>
				)}
				<h1 className="text-5xl">{post.title}</h1>
				<div className="w-1/4 grid grid-cols-2 grid-flow-row">
					<div className="w-full text-center">{post.name}</div>
					<div className="w-full text-center text-gray-500">{formatDateFromISO(post?.publishedAt)}</div>
				</div>
			</div>
			<div className="w-11/12 flex flex-col items-center mx-auto">
				<div className="relative w-full h-auto aspect-[20/9] bg-gray-100">
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

