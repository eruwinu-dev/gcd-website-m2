import React, { useRef, useState } from "react"
import ProcessTimelineItem from "./ProcessTimelineItem"

import { steps } from "../../lib/steps"
import { ProcessType } from "../../types/process"
import { AnimatePresence, motion } from "framer-motion"
import { useRect } from "@reach/rect"

type Props = {}

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

const ProcessTimeline = (props: Props) => {
	const [step, setStep] = useState<number>(0)

	const navRef = useRef<HTMLDivElement | null>(null)
	const rect = useRect(navRef)

	return (
		<div className="w-full lg:min-h-[60vh] md:min-h-[80vh] min-h-fit max-h-fit flex flex-col items-center justify-start space-y-4 lg:pt-16 md:pt-8 pt-4 pb-16">
			<nav
				className="lg:w-3/4 md:w-4/5 w-full flex flex-col items-center lg:justify-center md:justify-center justify-start relative"
				ref={navRef}
			>
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
				<ul className="flex flex-row items-center lg:justify-space-between md:justify-space-between justify-start w-full h-fit z-[3]">
					{steps.map((processItem: ProcessType, index: number) => (
						<li
							key={processItem.phase}
							className={["w-full flex flex-col items-center justify-center"].join(" ")}
						>
							<motion.div
								className="h-6 w-6 border-2 rounded-full cursor-pointer"
								variants={circleVariants}
								animate={step === index ? "current" : step > index ? "active" : "inactive"}
								onClick={() => setStep(index)}
							/>
							<div
								onClick={() => setStep(index)}
								className={[
									"p-2 cursor-pointer lg:flex md:flex hidden",
									step === index ? "text-red-700" : "text-black",
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

export default ProcessTimeline

