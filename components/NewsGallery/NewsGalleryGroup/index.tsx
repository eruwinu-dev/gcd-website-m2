import React from "react"
import { useRouter } from "next/router"

import NewsGalleryItem from "../NewsGalleryItem"
import { BasePost } from "../../../types/post"

type Props = {
    posts: BasePost[]
}

const NewsGalleryGroup = ({ posts }: Props) => {
    const {
        query: { category },
    } = useRouter()
    return (
        <div key={(category || "all") as string} className="news-gallery-group">
            {posts.length ? (
                posts.map((post) => (
                    <NewsGalleryItem
                        key={post._id}
                        post={post}
                        redirect="./news/"
                    />
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
