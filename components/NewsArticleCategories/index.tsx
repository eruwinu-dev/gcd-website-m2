import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { ArticleCategoryType } from "../../types/article"

type Props = {
	categories: ArticleCategoryType[]
}

const NewsArticleCategories = ({ categories }: Props) => {
	const { pathname } = useRouter()
	return (
		<ul className="flex flex-row space-x-4">
			{categories.map((category: ArticleCategoryType) => (
				<li
					key={category.title}
					className="text-base cursor-pointer text-gray-500 hover:text-red-700 generic-transition"
				>
					<Link href={pathname === "/news" ? `?category=${category.title}` : `./?category=${category.title}`}>
						<a>#{category.title}</a>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default NewsArticleCategories

