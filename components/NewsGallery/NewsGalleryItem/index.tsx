import React, { memo } from "react"

import Image from "next/image"
import Link from "next/link"

import { useNextSanityImage } from "next-sanity-image"

import { BasePost } from "../../../types/post"
import sanityClient from "../../../lib/sanityClient"

type Props = {
    post: BasePost
    redirect: string
}

const NewsGalleryItem = ({ post, redirect }: Props) => {
    const imageProps = useNextSanityImage(sanityClient, post.mainImage)

    const redirectPath = `${redirect}${post.slug}`
    const readTime = post.wordCount ? Math.round(post.wordCount / 180) : 10

    return (
        <div className="news-gallery-item group">
            <Link href={redirectPath}>
                <div className="news-gallery-item-image">
                    {imageProps ? (
                        <Image
                            src={imageProps.src}
                            loader={imageProps.loader}
                            alt={`The main image for ${post.title}, a blog article from G. Charles Design`}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="generic-transition hover:scale-105"
                            sizes="(max-width: 800px) 100vw, 800px"
                            placeholder="blur"
                            blurDataURL={post.mainImage.asset.metadata.lqip}
                        />
                    ) : null}
                </div>
            </Link>
            <div className="news-gallery-item-text">
                <div className="news-gallery-item-intro">
                    <span>{readTime} minute read</span>
                    <span>/</span>
                    <span>{post.publishedAt}</span>
                </div>
                <Link href={redirectPath}>
                    <h3>{post.title}</h3>
                </Link>
                <p>{post.description || ""}</p>
                <ul className="news-article-hashtags">
                    {post.categories.map((category) => (
                        <li key={category}>
                            <Link href={`${redirect}?category=${category}`}>
                                <span>#{category}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default memo(NewsGalleryItem)
