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
                <NewsArticleHeaderAuthor author={post.author} />
                <p>{post.description}</p>
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
                            sizes="(max-width: 800px) 100vw, 800px"
                            placeholder="blur"
                            blurDataURL={post.mainImage.asset.metadata.lqip}
                        />
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default NewsArticleHeader
