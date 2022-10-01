import type { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from "next"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import { getMemberText } from "../../lib/api"
import { TeamType, team } from "../../lib/team"

type Props = {}

const Member = ({ member, html }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>{`${member.name} | G Charles Design - Licensed Architecture Services`}</title>
			</Head>
			<section>
				<div className="relative">
					<Image src={member.pictures[0]} alt={member.name} layout="fill" objectFit="cover" />
				</div>
				<div>
					<MDXRemote {...html} className="markdown" />
				</div>
			</section>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: team.map((member: TeamType) => ({ params: { member: member.url } })),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const member: TeamType | undefined = team.find((member: TeamType) => member.url === params?.member)
	const text: string = typeof member === "undefined" ? "" : getMemberText(member)
	const html = await serialize(text)
	return {
		props: {
			member,
			html,
		},
	}
}

export default Member

