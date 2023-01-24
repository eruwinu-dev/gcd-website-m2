import React, { MouseEvent, useMemo } from "react"

import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"

import type { ArticleItemType } from "../../types/article"

import NewsGalleryItem from "./NewsGalleryItem"
import NewsGalleryGroup from "./NewsGalleryGroup"

type Props = {
	articles: ArticleItemType[]
	categories: string[]
}

const NewsGallery = ({ articles, categories }: Props) => {
	const {
		query: { category },
		push,
	} = useRouter()

	const categoriesList = useMemo(() => categories, [])

	const selectedArticles = useMemo(
		() =>
			category && typeof !category.length
				? articles.filter((article) => article.categories.includes(category as string))
				: articles,
		[category]
	)

	const isSelectedCategory = (slug: string) => {
		if (slug === "all" && !category) return true
		else if (slug === category) return true
		else return false
	}

	const changeCategory = (slug: string) => (event: MouseEvent<HTMLLIElement>) => {
		push(
			{
				pathname: "/news",
				query: slug !== "all" ? { category: slug } : {},
			},
			undefined,
			{ shallow: true }
		)
	}

	return (
		<div className="news-gallery-container">
			<nav className="news-category-nav">
				<ul>
					{categoriesList.map((category) => (
						<li key={category} onClick={changeCategory(category)}>
							<h2
								className={[
									"text-lg font-normal capitalize cursor-pointer",
									isSelectedCategory(category) ? "text-black" : "hover:text-red-800",
								].join(" ")}
							>
								{category.replaceAll("-", " ")}
							</h2>
							{isSelectedCategory(category) ? (
								<motion.div className="news-category-tab" layoutId="news-category-tab" />
							) : null}
						</li>
					))}
				</ul>
			</nav>
			<AnimatePresence mode="wait">
				<NewsGalleryGroup selectedArticles={selectedArticles} />
			</AnimatePresence>
		</div>
	)
}

// const galleryVariants = {
// 	start: {
// 		y: 10,
// 		opacity: 0,
// 	},
// 	go: {
// 		y: 0,
// 		opacity: 1,
// 		transition: {
// 			delay: 0.0001,
// 			when: "beforeChildren",
// 			staggerChildren: 0.1,
// 		},
// 	},
// }

export default NewsGallery

