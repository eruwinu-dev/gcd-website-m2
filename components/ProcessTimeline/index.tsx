import React, { MouseEvent, useRef, useState } from "react"
import { useRouter } from "next/router"

import { AnimatePresence, motion } from "framer-motion"
import { useRect } from "@reach/rect"

import type { ProcessType } from "../../types/process"

import ProcessTimelineItem from "./ProcessTimelineItem"

import { steps } from "../../lib/steps"

type Props = {}

const ProcessTimeline = (props: Props) => {
	// const [step, setStep] = useState<number>(0)
	const {
		query: { step = "1" },
		push,
	} = useRouter()

	const setStepHandler = (step: number) => (event: MouseEvent<HTMLDivElement>) => {
		push(
			{
				pathname: "/process",
				query: { step },
			},
			undefined,
			{ shallow: true }
		)
	}

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
						width: rect ? rect.width * ((Number(step) - 1) / steps.length) : 0,
						zIndex: 2,
					}}
					animate={{
						width: rect ? rect.width * ((Number(step) - 1) / steps.length) : 0,
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
								animate={
									Number(step) - 1 === index
										? "current"
										: Number(step) - 1 > index
										? "active"
										: "inactive"
								}
								onClick={setStepHandler(index + 1)}
							/>
							<div
								onClick={setStepHandler(index + 1)}
								className={[
									"process-timeline-label",
									Number(step) - 1 === index ? "text-red-800" : "text-black",
								].join(" ")}
							>
								{processItem.phase}
							</div>
						</li>
					))}
				</ul>
			</nav>
			<AnimatePresence mode="wait">
				<ProcessTimelineItem process={steps[Number(step) - 1]} />
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

