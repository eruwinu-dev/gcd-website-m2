import React from "react"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"

import type { ArticleItemType } from "../../../types/article"

import { formatDateFromISO } from "../../../lib/dates"
import { useNextSanityImage } from "next-sanity-image"
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
			{/* <motion.div
				className="w-full h-full flex flex-col items-center justify-start pb-16"
				initial="rest"
				whileHover="hover"
			>
				<Link href={redirectPath}>
					<div
						className={[
							"w-full h-auto relative bg-gray-200 overflow-hidden cursor-pointer aspect-video",
							article?.mainImage ? "animate-none" : "animate-pulse",
						].join(" ")}
					>
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
				<motion.div className="w-full pt-4 flex flex-col bg-white space-y-4" variants={textVariants}>
					<div className="w-full flex-row items-center justify-start space-x-4">
						<span className="text-sm">{Math.round((article?.wordCount || 0) / 180)} minute read</span>
						<span>/</span>
						<span className="text-sm uppercase text-gray-500">
							{formatDateFromISO(article?.publishedAt)}
						</span>
					</div>
					<Link href={redirectPath}>
						<a>
							<motion.h3 variants={headerVariants} className="text-2xl">
								{article.title}
							</motion.h3>
						</a>
					</Link>
					<p className="w-full lg:line-clamp-3 md:line-clamp-3 line-clamp-2 lg:text-base md:text-base text-sm">
						{article?.description}
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
				</motion.div>
			</motion.div> */}
			{article.title}
		</motion.div>
	)
}

const galleryItemVariants = {
	start: { opacity: 0 },
	go: { opacity: 1, transition: { duration: 0.3 } },
}

export default NewsGalleryItem

