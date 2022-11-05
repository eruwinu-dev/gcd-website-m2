import React from "react"
import Image from "next/image"

import { motion } from "framer-motion"

import type { ProcessType } from "../../../types/process"

type Props = {
	process: ProcessType
}

const ProcessTimelineItem = ({ process }: Props) => {
	return (
		<motion.div
			className="process-timeline-item"
			key={process ? process.phase : "0"}
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.4 }}
		>
			<div className="process-timeline-item-text-container">
				<h3 className="process-timeline-item-text text-center">{process.title}</h3>
				<p className="process-timeline-item-text text-justify leading-relaxed">{process.description}</p>
			</div>
			<div className="process-timeline-item-image-container">
				<div>
					<Image src={process.photo} alt={process.title} layout="fill" objectFit="cover" />
				</div>
			</div>
		</motion.div>
	)
}

export default ProcessTimelineItem

