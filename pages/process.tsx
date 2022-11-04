import Head from "next/head"
import React from "react"
import ProcessTimeline from "../components/ProcessTimeline"
import Image from "next/image"
import { headerTitle } from "../lib/title"
import { motion } from "framer-motion"

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

			<motion.section
				className="relative w-full lg:h-screen h-[100vh] -lg:translate-y-[3.5rem] -translate-y-[3.5rem]"
				variants={sectionVariants}
				initial="start"
				animate="end"
			>
				<Image
					src="https://i.ibb.co/8PNkG2s/Balcony-1.jpg"
					alt="Glen Charles Design Process Image"
					layout="fill"
					objectFit="cover"
					objectPosition="left"
					quality="95"
					priority
				/>
				<div className="absolute w-full h-full top-0 left-0 bg-black/60 z-[2] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-flow-row px-8 py-16">
					<div className="lg:flex md:flex hidden" />
					<div className="flex flex-col items-end justify-center w-full h-full relative border-2 px-8 lg:text-end md:text-end text-center">
						<h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-white mb-4 leading-normal">
							Excellence in client satisfaction.
						</h1>
						<p className="text-white lg:w-3/5 md:w-11/12 w-11/12 lg:text-xl md:text-lg text-base">
							GCD strives to create architecture that stands as a unique and enduring representation of
							who our clients are.
						</p>
					</div>
				</div>
			</motion.section>
			<section className="w-full h-full flex flex-row items-center justify-center bg-black lg:py-16 md:py-8 py-4 -translate-y-[3.5rem]">
				<div className="lg:w-1/2 md:w-10/12  w-full h-auto flex flex-col items-center justify-center lg:p-16 p-8">
					<p className="text-white indent-4 text-justify leading-loose tracking-wider text-lg w-full italic">
						By hiring a licensed architect, you gain creative expertise through the design process coupled
						with years of experience getting plans approved by various jurisdictions.
					</p>
				</div>
			</section>
			<ProcessTimeline />
		</>
	)
}

export default Process

