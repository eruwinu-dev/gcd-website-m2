import { GetServerSideProps } from "next"
import React from "react"
import MetaHead from "../../components/MetaHead"
import PortfolioGallery from "../../components/PortfolioGallery"
import { getProjects } from "../../lib/project/getProjects"
import { headerTitle } from "../../lib/title"
import { QueryClient, dehydrate } from "@tanstack/react-query"

type Props = {}

const Portfolio = ({}: Props) => {
    return (
        <>
            <MetaHead
                title={`Portfolio | ${headerTitle}`}
                description="G. Charles Design has completed many projects shown in this portfolio gallery."
                url={process.env.NEXT_PUBLIC_SITE_URL + "/portfolio"}
                siteName={`Portfolio | ${headerTitle}`}
            />
            <div className="portfolio-section">
                <PortfolioGallery />
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ["projects"],
        queryFn: async () => getProjects(),
    })

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export default Portfolio
