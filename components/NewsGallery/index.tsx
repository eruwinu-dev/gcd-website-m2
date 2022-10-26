import { useRouter } from "next/router"
import React from "react"
import { ArticleItemType } from "../../types/article"
import NewsGalleryItem from "./NewsGalleryItem"

type Props = {
	articles: ArticleItemType[]
}

const NewsGallery = ({ articles }: Props) => {
	const { pathname } = useRouter()

	return (
		<div
			className={[
				"w-11/12 min-h-fit max-h-fit mx-auto grid grid-cols-3 grid-flow-row gap-8 pb-16",
				pathname === "/news" ? "pt-16" : "pt-8",
			].join(" ")}
		>
			{articles.map((article: ArticleItemType) => (
				<NewsGalleryItem article={article} key={article.slug.current} />
			))}
		</div>
	)
}

export default NewsGallery

