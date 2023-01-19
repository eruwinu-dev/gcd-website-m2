import React from "react"

import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"

import type { ArticleCategoryType, ArticleItemType } from "../../types/article"

import NewsGalleryItem from "./NewsGalleryItem"
import LoadMoreArticles from "./LoadMoreArticles"
import useStateContext from "../../context/State"

type Props = {
	articles: ArticleItemType[]
	categories: ArticleCategoryType[]
	recos?: ArticleItemType[]
}

const NewsGallery = ({ categories, articles, recos }: Props) => {
	const {
		pathname,
		query: { category },
	} = useRouter()

	const selectedArticles: ArticleItemType[] =
		typeof recos === "undefined"
			? articles.filter((article: ArticleItemType) =>
					category
						? article.categories
							? article.categories
									.map((category: ArticleCategoryType) => category.title)
									.includes(category as string)
							: article
						: article
			  )
			: recos

	const realCategory = category || "all"
	const articlesInCategoryCount =
		categories.find((categoryItem: ArticleCategoryType) => categoryItem.title === realCategory)?.count || 0

	return (
		<AnimatePresence mode="wait">
			<>
				<motion.div
					variants={galleryVariants}
					initial="start"
					animate="go"
					key={(category as string) || "all"}
					className={[
						"min-h-fit max-h-fit mx-auto grid grid-flow-row pb-16 md:grid-cols-2 grid-cols-1",
						pathname === "/news"
							? "w-10/12 lg:grid-cols-2 pt-8 px-2 gap-4"
							: "w-full lg:grid-cols-3 pt-8 gap-8",
					].join(" ")}
				>
					{selectedArticles.map((article: ArticleItemType) => (
						<NewsGalleryItem article={article} key={article.slug.current} />
					))}
				</motion.div>
				{pathname === "/news" ? (
					selectedArticles.length < articlesInCategoryCount ? (
						<LoadMoreArticles />
					) : null
				) : null}
			</>
		</AnimatePresence>
	)
}

const galleryVariants = {
	start: {
		y: 10,
		opacity: 0,
	},
	go: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.0001,
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
}

export default NewsGallery

