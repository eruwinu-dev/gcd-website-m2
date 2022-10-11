import Image from "next/image"
import React from "react"
import { ProcessType } from "../../../types"
import { motion } from "framer-motion"

type Props = {
	process: ProcessType
}

const ProcessTimelineItem = ({ process }: Props) => {
	return (
		<motion.div
			className="w-full h-fit grid grid-cols-2 grid-flow-row gap-x-8"
			key={process ? process.phase : "0"}
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.4 }}
		>
			<div className="flex flex-col items-end justify-center pr-8">
				<div className="w-3/4">
					<h3 className="mb-4 w-full text-center">{process.title}</h3>
					<p className="text-justify leading-relaxed">{process.description}</p>
				</div>
			</div>
			<div className="h-full flex flex-col items-start justify-end">
				<div className="relative w-3/4 h-auto aspect-square">
					<Image src={process.photo} alt={process.title} layout="fill" />
				</div>
			</div>
		</motion.div>
	)
}

export default ProcessTimelineItem

