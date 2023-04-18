import React from "react"

import Image from "next/image"

import NewsArticleHeaderAuthor from "./NewsArticleHeaderAuthor"
import { useNextSanityImage } from "next-sanity-image"
import { Post } from "../../types/post"
import sanityClient from "../../lib/sanityClient"

type Props = {
    post: Post
}

const NewsArticleHeader = ({ post }: Props) => {
    const imageProps = useNextSanityImage(sanityClient, post.mainImage)

    return (
        <>
            <div className="news-article-header">
                <span>{post.publishedAt}</span>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <NewsArticleHeaderAuthor author={post.author} />
            </div>
            <div className="news-article-header-image">
                <div>
                    {imageProps ? (
                        <Image
                            src={imageProps.src}
                            loader={imageProps.loader}
                            alt={`The main image for the article ${post.title} by ${post.author.name}, writer for G. Charles Design`}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            priority
                        />
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default NewsArticleHeader
