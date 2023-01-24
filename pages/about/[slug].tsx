import React from "react"
import Image from "next/image"
import type { GetStaticPaths, GetStaticProps } from "next"
import type { ParsedUrlQuery } from "querystring"

import { PortableText } from "@portabletext/react"
import { useNextSanityImage } from "next-sanity-image"

import type { MemberType } from "../../types/member"

import { CustomArticleComponents } from "../../components/CustomPTComponents"
import MetaHead from "../../components/MetaHead"

import { getMemberBySlug, getMemberSlugs } from "../../lib/grocQueries"
import client from "../../lib/client"
import Link from "next/link"

type Props = {
	member: MemberType
}

interface StaticParams extends ParsedUrlQuery {
	slug: string
}

const Member = ({ member }: Props) => {
	const imageProps = useNextSanityImage(client, member.image)

	return (
		<>
			<MetaHead
				title={`${member.name} | G.Charles Design`}
				description={member.blogBio}
				url={process.env.NEXT_PUBLIC_SITE_URL + "/about/" + member.slug}
				siteName={`${member.name} | "G Charles" Design`}
				image={imageProps.src}
			/>
			<section className="team-member-section">
				<div className="team-member-image-layout">
					<div className="team-member-image-container">
						{imageProps ? (
							<Image
								src={imageProps.src}
								loader={imageProps.loader}
								alt={member.blogBio}
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
						<PortableText value={member.bio} components={CustomArticleComponents} />
						<Link href="/about">
							<h3 className="team-member-go-back">Go Back</h3>
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await client.fetch(getMemberSlugs)
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug = "" } = params as StaticParams
	const member = (await client.fetch(getMemberBySlug, { slug })) as MemberType

	return {
		props: {
			member,
		},
	}
}

export default Member

