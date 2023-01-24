import React, { memo } from "react"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"
import { useNextSanityImage } from "next-sanity-image"

import type { ArticleItemType } from "../../../types/article"

import client from "../../../lib/client"

type Props = {
	article: ArticleItemType
	redirect: string
}

const NewsGalleryItem = ({ article, redirect }: Props) => {
	const imageProps = useNextSanityImage(client, article.mainImage)

	const redirectPath = `${redirect}${article.slug}`
	const readTime = article.wordCount ? Math.round(article.wordCount / 180) : 10

	return (
		<motion.div
			className="news-gallery-item group"
			variants={galleryItemVariants}
			initial="start"
			whileInView="go"
			viewport={{ once: true }}
		>
			<Link href={redirectPath}>
				<div className="news-gallery-item-image">
					{imageProps ? (
						<Image
							src={imageProps.src}
							loader={imageProps.loader}
							alt={`The main image for ${article.title}, a blog article from G. Charles Design`}
							layout="fill"
							objectFit="cover"
							objectPosition="center"
							className="generic-transition hover:scale-105"
						/>
					) : null}
				</div>
			</Link>
			<div className="news-gallery-item-text">
				<div className="news-gallery-item-intro">
					<span>{readTime} minute read</span>
					<span>/</span>
					<span>{article.publishedAt}</span>
				</div>
				<Link href={redirectPath}>
					<h3>{article.title}</h3>
				</Link>
				<p>{article.description ? article.description : ""}</p>
				<ul className="news-article-hashtags">
					{article.categories.map((category) => (
						<li key={category}>
							<Link href={`${redirect}?category=${category}`}>
								<span>#{category}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	)
}

const galleryItemVariants = {
	start: { opacity: 0 },
	go: { opacity: 1, transition: { duration: 0.3 } },
}

export default memo(NewsGalleryItem)

