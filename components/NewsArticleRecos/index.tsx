import React from "react"
import { ArticleItemType } from "../../types/article"
import NewsGalleryItem from "../NewsGallery/NewsGalleryItem"

type Props = {
	recos: ArticleItemType[]
}

const NewsArticleRecos = ({ recos }: Props) => {
	return (
		<div className="news-recos">
			{recos.map((article) => (
				<NewsGalleryItem key={article._id} article={article} redirect="../news/" />
			))}
		</div>
	)
}

export default NewsArticleRecos

