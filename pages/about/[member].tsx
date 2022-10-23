import type { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import React, { MouseEvent, useEffect, useState } from "react"
import { getMemberText } from "../../lib/api"
import { team } from "../../lib/team"
import mdToHtml from "../../lib/mdToHtml"

import { wrap } from "popmotion"
import { motion } from "framer-motion"

import { MemberType } from "../../types"
import { headerTitle } from "../../lib/title"

type Props = {}

const variants = {
	show: {
		opacity: 1,
		transition: {
			ease: "easeInOut",
			duration: 0.5,
		},
	},
	hide: {
		opacity: 0,
	},
}

const Member = ({ member, html }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [photo, setPhoto] = useState<number>(0)

	const photoIndex = wrap(0, member.pictures.length, photo)

	useEffect(() => {
		const interval = setInterval(() => {
			setPhoto((photo) => photo + 1)
		}, 10e3)
		return () => {
			clearInterval(interval)
		}
	}, [])

	const changePhoto = (event: MouseEvent<HTMLDivElement>) => {
		if (member.pictures.length === 1) return
		setPhoto((photo: number) => photo + 1)
	}

	return (
		<>
			<Head>
				<title>{`${member.name} | ${headerTitle}`}</title>
			</Head>
			<section className="member-section">
				<div className="member-image-layout">
					<motion.div
						className="member-image-container"
						key={photoIndex}
						variants={variants}
						animate={"show"}
						initial="hide"
					>
						<Image
							src={member.pictures[photoIndex]}
							alt={member.name}
							layout="fill"
							priority
							onClick={changePhoto}
						/>
					</motion.div>
					<h3>{member.name}</h3>
					<div className="italic">{member.role}</div>
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
		paths: team.map((member: MemberType) => ({ params: { member: member.url } })),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const member: MemberType | undefined = team.find((member: MemberType) => member.url === params?.member)
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

