import React from "react"
import Image from "next/image"

import { useNextSanityImage } from "next-sanity-image"

import type { AuthorType } from "../../../types/article"

import client from "../../../lib/client"

type Props = {
	author: AuthorType
}

const NewsArticleHeaderAuthor = ({ author }: Props) => {
	const imageProps = useNextSanityImage(client, author.image)

	return (
		<div className="news-article-header-author">
			<div className="news-article-header-author-icon">
				{imageProps ? (
					<Image
						src={imageProps.src}
						loader={imageProps.loader}
						alt={`A picture for ${author.name}, a blog writer for G. Charles Design`}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						className="rounded-full"
					/>
				) : null}
			</div>
			<div className="news-article-header-author-text">{author.name}</div>
		</div>
	)
}

export default NewsArticleHeaderAuthor

