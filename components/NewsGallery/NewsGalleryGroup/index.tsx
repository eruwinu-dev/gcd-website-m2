import React from "react"
import { useRouter } from "next/router"

import { ArticleItemType } from "../../../types/article"
import NewsGalleryItem from "../NewsGalleryItem"

type Props = {
	selectedArticles: ArticleItemType[]
}

const NewsGalleryGroup = ({ selectedArticles }: Props) => {
	const {
		query: { category },
	} = useRouter()
	return (
		<div key={(category || "all") as string} className="news-gallery-group">
			{selectedArticles.length ? (
				selectedArticles.map((article) => (
					<NewsGalleryItem key={article._id} article={article} redirect="./news/" />
				))
			) : (
				<div className="news-gallery-no-articles">
					<h3>No articles under this category.</h3>
				</div>
			)}
		</div>
	)
}

export default NewsGalleryGroup

