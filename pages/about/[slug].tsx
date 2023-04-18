import React from "react"
import Image from "next/image"
import type { GetServerSideProps } from "next"
import type { ParsedUrlQuery } from "querystring"

import { PortableText } from "@portabletext/react"
import { useNextSanityImage } from "next-sanity-image"

import { CustomArticleComponents } from "../../components/CustomPTComponents"
import MetaHead from "../../components/MetaHead"

import sanityClient from "../../lib/sanityClient"
import Link from "next/link"
import { getMember } from "../../lib/member/getMember"
import { QueryClient, dehydrate } from "@tanstack/react-query"
import { useGetMember } from "../../hooks/member/useGetMember"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

type Props = {
    slug: string
    image: SanityImageSource
}

interface StaticParams extends ParsedUrlQuery {
    slug: string
}

const Member = ({ slug, image }: Props) => {
    const { data: member } = useGetMember(slug)
    const imageProps = useNextSanityImage(sanityClient, image)

    if (!member) return <></>

    return (
        <>
            <MetaHead
                title={`${member.name} | G.Charles Design`}
                description={member.name}
                url={process.env.NEXT_PUBLIC_SITE_URL + "/about/" + member.slug}
                siteName={`${member.name} | "G Charles" Design`}
            />
            <section className="team-member-section">
                <div className="team-member-image-layout">
                    <div className="team-member-image-container">
                        {imageProps ? (
                            <Image
                                src={imageProps.src}
                                loader={imageProps.loader}
                                alt={member.name}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="bottom"
                            />
                        ) : null}
                    </div>
                </div>
                <div className="team-member-text">
                    <div className="team-member-text-layout">
                        <div className="team-member-text-container">
                            <h1>{member.name}</h1>
                            <h2>{member.role}</h2>
                        </div>
                        {member.bio ? (
                            <PortableText
                                value={member.bio}
                                components={CustomArticleComponents}
                            />
                        ) : null}
                        <Link href="/about">
                            <h3 className="team-member-go-back">Go Back</h3>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug = "" } = params as StaticParams
    const member = await getMember(slug)

    if (!member) {
        return {
            notFound: true,
        }
    }

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ["members", slug],
        queryFn: async () => member,
    })

    return {
        props: {
            slug: member.slug,
            image: member.image,
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export default Member
