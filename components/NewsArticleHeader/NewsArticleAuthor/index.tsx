import React from "react"
import Image from "next/image"

import { useNextSanityImage } from "next-sanity-image"

import type { ArticleType } from "../../../types/article"

import client from "../../../lib/client"

type Props = {
	post: ArticleType
}

const NewsArticleAuthor = ({ post }: Props) => {
	const imageProps = useNextSanityImage(client, post.author.image)

	return (
		<div className="lg:w-9/12 md:w-10/12 w-full flex flex-row items-center lg:justify-start md:justify-start justify-center space-x-4">
			<div className="relative w-10 h-10">
				{imageProps ? (
					<Image
						src={imageProps.src}
						loader={imageProps.loader}
						alt={post.author.name}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						className="rounded-full"
					/>
				) : null}
			</div>
			<div className="text-lg text-center font-semibold">{post.author.name}</div>
		</div>
	)
}

export default NewsArticleAuthor

