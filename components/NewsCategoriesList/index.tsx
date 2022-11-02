import { useRouter } from "next/router"
import React, { MouseEvent } from "react"
import { ArticleCategoryType } from "../../types/article"

import { motion } from "framer-motion"

type Props = {
	categories: ArticleCategoryType[]
}

const NewsCategoriesList = ({ categories }: Props) => {
	const router = useRouter()
	const { query } = router

	const isSelectedCategory = (category: ArticleCategoryType) => {
		if (category.title === "all" && !query.category) return true
		else if (category.title === query.category) return true
		else return false
	}

	const changeCategory = (category: ArticleCategoryType) => (event: MouseEvent<HTMLLIElement>) => {
		router.push(
			{
				pathname: "/news",
				query: category.title !== "all" ? { category: category.title } : {},
			},
			undefined,
			{ shallow: true }
		)
	}

	return (
		<nav className="w-full mx-auto lg:pt-16 md:pt-8 sm:pt-4 pt-4 pb-8">
			<ul className="w-full flex lg:flex-row md:flex-row flex-col items-center justify-center lg:space-x-16 md:space-x-8 space-x-0">
				{categories.map((category: ArticleCategoryType) => (
					<li
						key={category.title}
						className="flex flex-col items-center justify-center relative"
						onClick={changeCategory(category)}
					>
						<span
							className={[
								"text-lg capitalize cursor-pointer",
								isSelectedCategory(category) ? "opacity-100" : "opacity-50 hover:opacity-100",
							].join(" ")}
						>
							{category.title}
						</span>
						{isSelectedCategory(category) ? (
							<motion.div className="news-category-tab" layoutId="news-category-tab" />
						) : null}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default NewsCategoriesList

