import React from "react"

import Head from "next/head"
import Image from "next/image"
import type { GetStaticPaths, GetStaticProps } from "next"
import type { ParsedUrlQuery } from "querystring"

import { PortableText } from "@portabletext/react"

import type { MemberType } from "../../types/member"

import { CustomArticleComponents } from "../../components/CustomPTComponents"

import { getMemberBySlug, getMembers } from "../../lib/grocQueries"
import { headerTitle } from "../../lib/title"
import client from "../../lib/client"
import { useNextSanityImage } from "next-sanity-image"

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
			<Head>
				<title>{`${member.name} | ${headerTitle}`}</title>
			</Head>
			<section className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-flow-row translate-y-0 lg:gap-x-16 md:gap-x-8 gap-x-0 lg:gap-y-0 md:gap-y-0 gap-y-8 lg:pt-8 md:pt-6 pt-0 pb-8">
				<div className="member-image-layout">
					<div className="member-image-container">
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

