import React from "react"

import type { GetServerSideProps } from "next"

import { useNextSanityImage } from "next-sanity-image"

import type { ParsedUrlQuery } from "querystring"

import NewsArticleText from "../../components/NewsArticleText"
import NewsArticleHeader from "../../components/NewsArticleHeader"
import SocialMediaShare from "../../components/SocialMediaShare"
import MetaHead from "../../components/MetaHead"

import { headerTitle } from "../../lib/title"
import NewsArticleRecos from "../../components/NewsArticleRecos"
import { getPost } from "../../lib/post/getPost"
import { QueryClient, dehydrate } from "@tanstack/react-query"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import sanityClient from "../../lib/sanityClient"
import { Post } from "../../types/post"
import { useGetPost } from "../../hooks/post/useGetPost"

type Props = { slug: string; image: SanityImageSource }

interface StaticParams extends ParsedUrlQuery {
    slug: string
}

const Article = ({ slug, image }: Props) => {
    const imageProps = useNextSanityImage(sanityClient, image)

    const { data } = useGetPost(slug)

    if (!data) return <></>

    return (
        <>
            <MetaHead
                title={`${data.post.title} - Blog | ${headerTitle}`}
                description={
                    data.post.description || "A blog post by G. Charles Design"
                }
                url={
                    process.env.NEXT_PUBLIC_SITE_URL + "/news/" + data.post.slug
                }
                siteName={`${data.post.title} - Blog | ${headerTitle}`}
                image={imageProps.src}
            />
            <NewsArticleHeader post={data.post} />
            <div className="news-article-text-container">
                <NewsArticleText body={data.post.body} />
                <SocialMediaShare post={data.post} />
            </div>
            <div className="news-recos-container">
                <h2>You May Also Like</h2>
                <NewsArticleRecos recos={data.recos} />
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug = "" } = params as StaticParams

    const { post, recos } = await getPost(slug)

    if (!post) {
        return {
            notFound: true,
        }
    }

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ["posts", slug],
        queryFn: async () => ({ post, recos }),
    })

    return {
        props: {
            slug: post.slug,
            image: post.mainImage,
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export default Article
