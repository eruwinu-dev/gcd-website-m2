import React from "react"
import Image from "next/image"

import { useNextSanityImage } from "next-sanity-image"

import { PostMember } from "../../../types/member"
import sanityClient from "../../../lib/sanityClient"

type Props = {
    author: PostMember
}

const NewsArticleHeaderAuthor = ({ author }: Props) => {
    const imageProps = useNextSanityImage(sanityClient, author.image)

    return (
        <div className="news-article-header-author">
            <div className="news-article-header-author-icon">
                {imageProps ? (
                    <Image
                        src={imageProps.src}
                        loader={imageProps.loader}
                        alt={`A picture for ${author.name}, a blog writer for G. Charles Design`}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-full"
                        sizes="(max-width: 800px) 40px, 40px"
                        placeholder="blur"
                        blurDataURL={author.image.asset.metadata.lqip}
                    />
                ) : null}
            </div>
            <div className="news-article-header-author-text">{author.name}</div>
        </div>
    )
}

export default NewsArticleHeaderAuthor
