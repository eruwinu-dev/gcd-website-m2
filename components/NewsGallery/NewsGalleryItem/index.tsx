import React from "react"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import { motion } from "framer-motion"

import type { ArticleItemType } from "../../../types/article"

import { formatDateFromISO } from "../../../lib/dates"
import NewsArticleCategories from "../../NewsArticleCategories"
import { useSanityImageProps } from "../../../lib/sanityImageLoader"

type Props = {
	article: ArticleItemType
}

const NewsGalleryItem = ({ article }: Props) => {
	const { pathname } = useRouter()

	const imageProps = article.mainImage ? useSanityImageProps(article.mainImage) : null

	const redirectPath = pathname === "/news" ? `./news/${article.slug.current}` : `../news/${article.slug.current}`

	return (
		<motion.div variants={articleVariants} className="w-10/12 h-full flex flex-col mx-auto" key={article.title}>
			<motion.div
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
								alt={article.title}
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								className="generic-transition hover:scale-105"
							/>
						) : null}
					</div>
				</Link>
				<motion.div className="w-full pt-4 flex flex-col bg-white space-y-4" variants={textVariants}>
					{pathname == "/news" ? (
						<div className="w-full flex-row items-center justify-start space-x-4">
							<span className="text-sm">{Math.round((article?.wordCount || 0) / 180)} minute read</span>
							<span>/</span>
							<span className="text-sm uppercase text-gray-500">
								{formatDateFromISO(article?.publishedAt)}
							</span>
						</div>
					) : (
						<></>
					)}
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
					{article.categories && pathname === "/news" && (
						<NewsArticleCategories categories={article.categories} />
					)}
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

const articleVariants = {
	start: {
		y: -20,
		opacity: 0,
	},
	go: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.2,
			ease: "easeInOut",
		},
	},
}

const containerVariants = {
	rest: {},
	hover: {},
}

const headerVariants = {
	rest: {
		textDecoration: "none",
		transition: {
			duration: 0.2,
		},
	},
	hover: {
		textDecoration: "underline",
		transition: {
			duration: 0.2,
		},
	},
}

const textVariants = {
	rest: {
		transition: {
			duration: 0.2,
			ease: "easeInOut",
		},
	},
	hover: {
		transition: {
			duration: 0.2,
			type: "spring",
			ease: "easeInOut",
		},
	},
}

export default NewsGalleryItem

