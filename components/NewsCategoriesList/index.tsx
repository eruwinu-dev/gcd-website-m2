import { useRouter } from "next/router"
import React, { MouseEvent } from "react"
import { ArticleCategoryType } from "../../types/article"

import { motion } from "framer-motion"

type Props = {
	categories: string[]
}

const NewsCategoriesList = ({ categories }: Props) => {
	const {
		query: { category },
		push,
	} = useRouter()

	const isSelectedCategory = (selectedCategory: ArticleCategoryType) => {
		if (selectedCategory.title === "all" && !category) return true
		else if (selectedCategory.title === category) return true
		else return false
	}

	const changeCategory = (category: ArticleCategoryType) => (event: MouseEvent<HTMLLIElement>) => {
		push(
			{
				pathname: "/news",
				query: category.title !== "all" ? { category: category.title } : {},
			},
			undefined,
			{ shallow: true }
		)
	}

	return (
		<nav className="news-category-nav">
			<ul>
				{categories.map((category: ArticleCategoryType) => (
					<li key={category.title} onClick={changeCategory(category)}>
						<h2
							className={[
								"text-lg font-normal capitalize cursor-pointer",
								isSelectedCategory(category) ? "text-black" : "hover:text-red-800",
							].join(" ")}
						>
							{category.title}
						</h2>
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

