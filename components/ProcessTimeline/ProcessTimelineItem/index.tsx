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
			className="w-full h-fit grid grid-cols-2 grid-flow-row gap-4"
			key={process ? process.phase : "0"}
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			<div className="flex flex-col items-center justify-center">
				<div className="w-[60%]">
					<h3 className="mb-4 w-full text-center">{process.title}</h3>
					<p>{process.description}</p>
				</div>
			</div>
			<div className="h-full flex flex-col items-start justify-end pb-4">
				<div className="relative w-[70%] h-fit aspect-square">
					<Image src={process.photo} alt={process.title} layout="fill" />
				</div>
			</div>
		</motion.div>
	)
}

export default ProcessTimelineItem

