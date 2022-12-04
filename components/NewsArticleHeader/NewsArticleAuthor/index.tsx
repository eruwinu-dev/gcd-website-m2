import Image from "next/image"
import React from "react"
import { getSanityImageProps } from "../../../lib/sanityImageLoader"
import { ArticleType } from "../../../types/article"

type Props = {
	post: ArticleType
}

const NewsArticleAuthor = ({ post }: Props) => {
	const imageProps = post.author.image ? getSanityImageProps(post.author.image) : null

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

