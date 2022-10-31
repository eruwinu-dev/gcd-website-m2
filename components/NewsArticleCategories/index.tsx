import React from "react"
import { ArticleCategoryType } from "../../types/article"

type Props = {
	categories: ArticleCategoryType[]
}

const NewsArticleCategories = ({ categories }: Props) => {
	return (
		<ul className="flex flex-row space-x-4">
			{categories.map((category: ArticleCategoryType) => (
				<li
					key={category.title}
					className="text-base cursor-pointer text-gray-500 hover:text-red-700 generic-transition"
				>
					<a>#{category.title}</a>
				</li>
			))}
		</ul>
	)
}

export default NewsArticleCategories

