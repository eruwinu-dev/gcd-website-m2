import Head from "next/head"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import { headerTitle } from "../../lib/title"

type Props = {}

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.5,
		},
	},
	exit: {
		transition: {
			duration: 0.3,
		},
	},
}

const imageVariants = {
	hidden: {
		opacity: 1,
	},
	show: {
		opacity: 0,
	},
	exit: {
		opacity: 0,
	},
}

const News = (props: Props) => {
	return (
		<>
			<Head>
				<title>{`News | ${headerTitle}`}</title>
			</Head>
			<section className="lg:min-h-screen md:min-h-screen min-h-fit border-2">
				<motion.div className="relative" layout variants={containerVariants} initial="hidden" animate="show">
					<motion.div
						className="absolute m-auto left-0 right-0 w-1/4 h-auto aspect-video border-2"
						variants={imageVariants}
					>
						<div className="w-full h-full relative aspect-video">
							<Image src="https://i.ibb.co/2qSNwNm/Shower-208.jpg" alt="" layout="fill" />
						</div>
					</motion.div>
					<motion.div
						className="absolute m-auto left-0 right-0 w-1/4 h-auto aspect-video border-2 z-[2]"
						variants={imageVariants}
					>
						<div className="w-full h-full relative aspect-video">
							<Image src="https://i.ibb.co/j4mXHwP/Michigan-Exterior-1.jpg" alt="" layout="fill" />
						</div>
					</motion.div>
				</motion.div>
			</section>
		</>
	)
}

export default News

