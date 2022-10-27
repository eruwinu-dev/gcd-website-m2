import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import { motion } from "framer-motion"

import type { ArticleItemType } from "../../../types/article"

import { formatDateFromISO } from "../../../lib/dates"
import { urlFor } from "../../../lib/urlFor"

type Props = {
	article: ArticleItemType
}

const NewsGalleryItem = ({ article }: Props) => {
	const { pathname } = useRouter()

	const redirectPath = pathname === "/news" ? `./news/${article.slug.current}` : `../news/${article.slug.current}`

	return (
		<motion.div
			className="w-full h-full flex flex-col items-center justify-start"
			variants={containerVariants}
			initial="rest"
			whileHover="hover"
		>
			<Link href={redirectPath}>
				<div
					className={[
						"w-full h-auto aspect-square relative bg-gray-200 overflow-hidden cursor-pointer",
						article?.mainImage ? "animate-none" : "animate-pulse",
					].join(" ")}
				>
					{article.mainImage && (
						<Image
							src={urlFor(article.mainImage).url()}
							alt={article.title}
							layout="fill"
							objectFit="cover"
							objectPosition="center"
							className="generic-transition hover:scale-105"
						/>
					)}
				</div>
			</Link>
			<motion.div className="w-full space-y-4 pt-4 flex flex-col bg-white" variants={textVariants}>
				{pathname == "/news" ? (
					<div className="text-sm mb-2">{Math.round((article?.wordCount || 0) / 180)} minute read</div>
				) : (
					<></>
				)}
				<Link href={redirectPath}>
					<a>
						<motion.h3 variants={headerVariants}>{article.title}</motion.h3>
					</a>
				</Link>
				<div className="w-full grid grid-cols-2">
					<div>{article?.name}</div>
					<div className="w-full text-right text-gray-500">{formatDateFromISO(article?.publishedAt)}</div>
				</div>

				<p className="lg:line-clamp-4 md:line-clamp-3 line-clamp-3 lg:text-base md:text-base text-sm">
					{article?.description}
				</p>
				{article.categories && pathname === "/news" && (
					<ul className="flex flex-row space-x-2">
						{article.categories.map((category: any) => (
							<li key={category} className="text-sm">
								#{category}
							</li>
						))}
					</ul>
				)}
			</motion.div>
		</motion.div>
	)
}

const containerVariants = {
	rest: {},
	hover: {},
}

const headerVariants = {
	rest: {
		textDecoration: "none",
		color: "#000",
		transition: {
			duration: 0.2,
		},
	},
	hover: {
		textDecoration: "underline",
		color: "#b91c1c",
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

