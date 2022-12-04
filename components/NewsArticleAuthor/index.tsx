import React from "react"
import Image from "next/image"

import { useNextSanityImage } from "next-sanity-image"

import type { AuthorType } from "../../types/article"

import client from "../../lib/client"

type Props = {
	author: AuthorType
}

const NewsArticleAuthor = ({ author }: Props) => {
	const imageProps = useNextSanityImage(client, author.image)
	return (
		<div className="w-8/12 mx-auto flex flex-row items-start justify-start lg:py-8 py-4 space-x-4">
			<div className="relative w-24 h-auto aspect-square">
				{imageProps ? (
					<Image
						src={imageProps.src}
						loader={imageProps.loader}
						layout="fill"
						objectFit="cover"
						objectPosition="bottom"
						className="rounded-full"
					/>
				) : null}
			</div>
			<p className="w-1/3 flex flex-col items-start space-y-2">
				<span className="text-xl font-semibold">{author.name}</span>
				<p>{author.blogBio}</p>
			</p>
		</div>
	)
}

export default NewsArticleAuthor

