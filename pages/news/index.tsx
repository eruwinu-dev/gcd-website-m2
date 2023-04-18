import React from "react"

import type { GetServerSideProps } from "next"

import MetaHead from "../../components/MetaHead"
import NewsPageHeader from "../../components/NewsPageHeader"
import NewsGallery from "../../components/NewsGallery"

import { headerTitle } from "../../lib/title"
import { QueryClient, dehydrate } from "@tanstack/react-query"
import { getPosts } from "../../lib/post/getPosts"

type Props = {}

const News = ({}: Props) => {
    return (
        <>
            <MetaHead
                title={`News | ${headerTitle}`}
                description="Our knowledge of architecture is informed through years of education and experience. GCD Blog shares our process and things you want to know."
                url={process.env.NEXT_PUBLIC_SITE_URL + "/news"}
                siteName={`News | ${headerTitle}`}
            />
            <NewsPageHeader />
            <NewsGallery />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ["posts"],
        queryFn: async () => getPosts(),
    })

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export default News
