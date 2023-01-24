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
			{selectedArticles.map((article) => (
				<NewsGalleryItem key={article._id} article={article} />
			))}
		</div>
	)
}

export default NewsGalleryGroup

