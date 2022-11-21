import Head from "next/head"
import React from "react"
import Image from "next/image"

import { motion } from "framer-motion"

import ProcessTimeline from "../components/ProcessTimeline"
import { headerTitle } from "../lib/title"
import { processImage } from "../lib/images"

type Props = {}

const sectionVariants = {
	start: {
		opacity: 0.9,
	},
	end: {
		opacity: 1,
		transition: {
			duration: 0.75,
		},
	},
}

const Process = (props: Props) => {
	return (
		<>
			<Head>
				<title>{`Process | ${headerTitle}`}</title>
			</Head>

			<motion.section className="banner-section" variants={sectionVariants} initial="start" animate="end">
				<Image
					src={processImage}
					alt="Glen Charles Design Process Image"
					layout="fill"
					objectFit="cover"
					objectPosition="left"
					quality="95"
					priority
				/>
				<div className="banner-mask lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
					<div className="banner-spacer" />
					<div className="flex flex-col items-end justify-center w-full h-full relative border-2 px-8 lg:text-end md:text-end text-center">
						<h1 className="banner-title">Excellence in client satisfaction.</h1>
						<p className="banner-subtitle">
							GCD strives to create architecture that stands as a unique and enduring representation of
							who our clients are.
						</p>
					</div>
				</div>
			</motion.section>
			<section className="process-blockquote">
				<p>
					By hiring a licensed architect, you gain creative expertise through the design process coupled with
					years of experience getting plans approved by various jurisdictions.
				</p>
			</section>
			<ProcessTimeline />
		</>
	)
}

export default Process

