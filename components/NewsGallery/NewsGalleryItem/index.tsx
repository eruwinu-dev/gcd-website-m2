import React, { memo } from "react"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"
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
        <motion.div
            className="news-gallery-item group"
            variants={galleryItemVariants}
            initial="start"
            whileInView="go"
            viewport={{ once: true }}
        >
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
        </motion.div>
    )
}

const galleryItemVariants = {
    start: { opacity: 0 },
    go: { opacity: 1, transition: { duration: 0.3 } },
}

export default memo(NewsGalleryItem)
