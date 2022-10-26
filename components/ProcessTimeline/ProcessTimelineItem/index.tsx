import Image from "next/image"
import React from "react"
import { ProcessType } from "../../../types/process"
import { motion } from "framer-motion"

type Props = {
	process: ProcessType
}

const ProcessTimelineItem = ({ process }: Props) => {
	return (
		<motion.div
			className="w-full h-fit grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-flow-row gap-x-8"
			key={process ? process.phase : "0"}
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.4 }}
		>
			<div className="flex lg:flex-col md:flex-col flex-col-reverse lg:items-end md:items-end items-center justify-center lg:pr-8 md:pr-8 pr-0">
				<div className="lg:w-3/5 md:w-4/5 w-full flex flex-col items-center justify-center lg:px-0 md:px-0 px-4 pb-4">
					<h3 className="my-4 w-full text-center">{process.title}</h3>
					<p className="text-justify leading-relaxed">{process.description}</p>
				</div>
			</div>
			<div className="h-full flex flex-col lg:justify-end md:justify-center justify-start lg:items-start md:items-start items-center lg:px-0 md:px-0 px-4">
				<div className="relative lg:w-3/5 md:w-4/5 w-full h-auto aspect-square">
					<Image src={process.photo} alt={process.title} layout="fill" />
				</div>
			</div>
		</motion.div>
	)
}

export default ProcessTimelineItem

