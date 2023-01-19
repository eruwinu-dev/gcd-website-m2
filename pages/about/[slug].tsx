import React from "react"
import Image from "next/image"
import type { GetStaticPaths, GetStaticProps } from "next"
import type { ParsedUrlQuery } from "querystring"

import { PortableText } from "@portabletext/react"
import { useNextSanityImage } from "next-sanity-image"

import type { MemberType } from "../../types/member"

import { CustomArticleComponents } from "../../components/CustomPTComponents"
import MetaHead from "../../components/MetaHead"

import { getMemberBySlug, getMembers } from "../../lib/grocQueries"
import { headerTitle } from "../../lib/title"
import client from "../../lib/client"

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
				title={`${member.name} | ${headerTitle}`}
				description={member.blogBio}
				url={process.env.NEXT_PUBLIC_SITE_URL + "/about/" + member.slug.current}
				siteName={`${member.name} | ${headerTitle}`}
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
							<h2>{member.name}</h2>
							<h3>{member.role}</h3>
						</div>
						<PortableText value={member.bio} components={CustomArticleComponents} />
					</div>
				</div>
			</section>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const members = (await client.fetch(getMembers)) as MemberType[]

	return {
		paths: members.map((member: MemberType) => ({ params: { slug: member.slug.current } })),
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

