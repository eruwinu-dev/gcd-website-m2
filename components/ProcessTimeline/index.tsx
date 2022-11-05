import React, { useRef, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"
import { useRect } from "@reach/rect"

import type { ProcessType } from "../../types/process"

import ProcessTimelineItem from "./ProcessTimelineItem"

import { steps } from "../../lib/steps"

type Props = {}

const ProcessTimeline = (props: Props) => {
	const [step, setStep] = useState<number>(0)

	const navRef = useRef<HTMLDivElement | null>(null)
	const rect = useRect(navRef)

	return (
		<div className="process-timeline">
			<nav ref={navRef}>
				<motion.div
					style={{
						position: "absolute",
						top: "0.75rem",
						height: "0.125rem",
						backgroundColor: "#dc2626",
						left: rect ? rect.width / (2 * steps.length) : 0,
						width: rect ? rect.width * (step / steps.length) : 0,
						zIndex: 2,
					}}
					animate={{
						width: rect ? rect.width * (step / steps.length) : 0,
					}}
					transition={{
						ease: "easeInOut",
						duration: 0.5,
					}}
				/>
				<div
					style={{
						position: "absolute",
						top: "0.75rem",
						height: "0.125rem",
						backgroundColor: "#e5e7eb",
						left: rect ? rect.width / (2 * steps.length) : 0,
						width: rect ? rect.width * (1 - 1 / steps.length) : 0,
					}}
				/>
				<ul className="process-timeline-ul">
					{steps.map((processItem: ProcessType, index: number) => (
						<li key={processItem.phase}>
							<motion.div
								className="process-timeline-circle"
								variants={circleVariants}
								animate={step === index ? "current" : step > index ? "active" : "inactive"}
								onClick={() => setStep(index)}
							/>
							<div
								onClick={() => setStep(index)}
								className={[
									"process-timeline-label",
									step === index ? "text-red-800" : "text-black",
								].join(" ")}
							>
								{processItem.phase}
							</div>
						</li>
					))}
				</ul>
			</nav>
			<AnimatePresence mode="wait">
				<ProcessTimelineItem process={steps[step]} />
			</AnimatePresence>
		</div>
	)
}

const circleVariants = {
	inactive: {
		border: "2px solid #e5e7eb",
		backgroundColor: "#fff",
	},
	active: {
		border: "2px solid #dc2626",
		backgroundColor: "#fff",
	},
	current: {
		border: "2px solid #dc2626",
		backgroundColor: "#ef4444",
	},
}

export default ProcessTimeline

