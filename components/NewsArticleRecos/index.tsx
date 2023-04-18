import React from "react"
import NewsGalleryItem from "../NewsGallery/NewsGalleryItem"
import { BasePost } from "../../types/post"

type Props = {
    recos: BasePost[]
}

const NewsArticleRecos = ({ recos }: Props) => {
    return (
        <div className="news-recos">
            {recos.map((post) => (
                <NewsGalleryItem
                    key={post._id}
                    post={post}
                    redirect="../news/"
                />
            ))}
        </div>
    )
}

export default NewsArticleRecos
