import React from "react"

import type { GetServerSideProps } from "next"

import type { ParsedUrlQuery } from "querystring"

import NewsArticleText from "../../components/NewsArticleText"
import NewsArticleHeader from "../../components/NewsArticleHeader"
import SocialMediaShare from "../../components/SocialMediaShare"
import MetaHead from "../../components/MetaHead"

import { headerTitle } from "../../lib/title"
import NewsArticleRecos from "../../components/NewsArticleRecos"
import { getPost } from "../../lib/post/getPost"
import { QueryClient, dehydrate } from "@tanstack/react-query"
import { BasePost, Post } from "../../types/post"

type Props = { post: Post; recos: BasePost[] }

interface StaticParams extends ParsedUrlQuery {
    slug: string
}

const Article = ({ post, recos }: Props) => {
    return (
        <>
            <MetaHead
                title={ `${post.title} - Blog | ${headerTitle}` }
                description={
                    post.description || "A blog post by G. Charles Design"
                }
                url={ process.env.NEXT_PUBLIC_SITE_URL + "/blogs/" + post.slug }
                siteName={ `${post.title} - Blog | ${headerTitle}` }
                image={ post.mainImage.asset.url }
            />
            <NewsArticleHeader post={ post } />
            <div className="news-article-text-container">
                <NewsArticleText body={ post.body } />
                <SocialMediaShare post={ post } />
            </div>
            <div className="news-recos-container">
                <h2>You May Also Like</h2>
                <NewsArticleRecos recos={ recos } />
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
            post,
            recos,
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export default Article
