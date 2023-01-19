import React from "react"
import Image from "next/image"
import type { GetServerSideProps } from "next"
import type { ParsedUrlQuery } from "querystring"

import { PortableText } from "@portabletext/react"
import { useNextSanityImage } from "next-sanity-image"

import type { MemberType } from "../../types/member"

import { CustomArticleComponents } from "../../components/CustomPTComponents"
import MetaHead from "../../components/MetaHead"

import { getMemberBySlug } from "../../lib/grocQueries"
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
				<div className="flex flex-col lg:items-start md:items-start items-center justify-start h-full">
					<div className="lg:w-8/12 md:w-9/12 w-11/12 space-y-6">
						<div className="space-y-2 flex flex-col lg:items-start md:items-start items-center">
							<h2>{member.name}</h2>
							<div className="italic">{member.role}</div>
						</div>
						<PortableText value={member.bio} components={CustomArticleComponents} />
					</div>
				</div>
			</section>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { slug = "" } = params as StaticParams
	const member = (await client.fetch(getMemberBySlug, { slug })) as MemberType

	if (!member)
		return {
			notFound: true,
		}

	return {
		props: {
			member,
		},
	}
}

export default Member

