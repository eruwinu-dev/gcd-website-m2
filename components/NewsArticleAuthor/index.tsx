import Image from "next/image"
import React from "react"
import { urlFor } from "../../lib/urlFor"
import type { AuthorType } from "../../types/article"

type Props = {
	author: AuthorType
}

const NewsArticleAuthor = ({ author }: Props) => {
	return (
		<div className="w-8/12 mx-auto flex flex-row items-start justify-start lg:py-8 py-4 space-x-4">
			<div className="relative w-24 h-auto aspect-square">
				<Image
					src={author?.image ? urlFor(author?.image).url() : ""}
					alt={author.name}
					layout="fill"
					objectFit="cover"
					objectPosition="bottom"
					className="rounded-full"
					unoptimized
				/>
			</div>
			<p className="w-1/3 flex flex-col items-start space-y-2">
				<span className="text-xl font-semibold">{author.name}</span>
				<p>{author.blogBio}</p>
			</p>
		</div>
	)
}

export default NewsArticleAuthor

