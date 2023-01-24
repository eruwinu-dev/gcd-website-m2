import React, { memo } from "react"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"
import { useNextSanityImage } from "next-sanity-image"

import type { ArticleItemType } from "../../../types/article"

import { formatDateFromISO } from "../../../lib/dates"
import client from "../../../lib/client"

type Props = {
	article: ArticleItemType
}

const NewsGalleryItem = ({ article }: Props) => {
	const imageProps = useNextSanityImage(client, article.mainImage)

	const redirectPath = `./news/${article.slug}`

	return (
		<motion.div
			className="news-gallery-item"
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
						/>
					) : null}
				</div>
			</Link>
			<div className="w-full pt-4 flex flex-col bg-white space-y-4">
				{/* <div className="w-full flex-row items-center justify-start space-x-4">
					<span className="text-sm">{Math.round((article?.wordCount || 0) / 180)} minute read</span>
					<span>/</span>
					<span className="text-sm uppercase text-gray-500">
						{article.publishedAt ? formatDateFromISO(article.publishedAt) : "NaN"}
					</span>
				</div>
				<Link href={redirectPath}>
					<a>
						<h3 className="text-2xl">{article.title}</h3>
					</a>
				</Link>
				<p className="w-full lg:line-clamp-3 md:line-clamp-3 line-clamp-2 lg:text-base md:text-base text-sm">
					{article.description ? article.description : ""}
				</p>
				<ul className="flex flex-row space-x-4">
					{article.categories.map((category) => (
						<li
							key={category}
							className="text-base cursor-pointer text-gray-500 hover:text-red-700 generic-transition"
						>
							<Link href={`?category=${category}`}>
								<a>#{category}</a>
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

