import type { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import { getMemberText } from "../../lib/api"
import { TeamType, team } from "../../lib/team"
import mdToHtml from "../../lib/mdToHtml"

type Props = {}

const Member = ({ member, html }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>{`${member.name} | G Charles Design - Licensed Architecture Services`}</title>
			</Head>
			<section className="member-section">
				<div className="member-image">
					<div className="image-container">
						<Image src={member.pictures[0]} alt={member.name} layout="fill" objectFit="cover" />
					</div>
				</div>
				<div className="member-beside">
					<article dangerouslySetInnerHTML={{ __html: html }} className="member-markdown" />
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
	const content = typeof member === "undefined" ? "" : getMemberText(member)
	const html = await mdToHtml(content || "")

	return {
		props: {
			member,
			html,
		},
	}
}

export default Member

