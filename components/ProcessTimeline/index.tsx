import React, { useState } from "react"
import ProcessTimelineItem from "./ProcessTimelineItem"

import { process } from "../../lib/process"
import { ProcessType } from "../../types"
import { AnimatePresence, motion } from "framer-motion"

type Props = {}

const navWidth: number = 80

const getvwOffsetString = (width: number): string => `${width}vw`

const ProcessTimeline = (props: Props) => {
	const [step, setStep] = useState<ProcessType>(process[0])
	const [x, setX] = useState<string>("0vw")

	return (
		<>
			<nav className={["relative", `w-[${navWidth}vw]`].join(" ")}>
				<motion.div
					className="absolute -top-[0.375rem] left-[7.5vw] p-2 bg-red-600 rounded-full z-[3]"
					animate={{ x }}
					transition={{ type: "spring", duration: 0.5 }}
				/>
				<div
					className={[
						"h-1 border-2 rounded-lg bg-gray-300 border-gray-300 absolute right-0 left-0 m-auto",
						`w-[${getvwOffsetString(navWidth * (1 - 1 / process.length))}]`,
					].join(" ")}
				/>
				<ul className={["flex flex-row items-center justify-between mt-4", `w-full m-auto`].join(" ")}>
					{process.map((step: ProcessType, index: number) => (
						<li key={step.phase} className="w-full flex flex-col items-center">
							<div
								className={[
									"absolute -top-[0.375rem] p-[0.375rem] border-red-300 border-2 bg-white rounded-full z-[2] cursor-pointer",
									`left-[${getvwOffsetString(7.5 + (index * navWidth) / process.length)}]`,
								].join(" ")}
								onClick={() => {
									setStep(step)
									setX(getvwOffsetString((navWidth / process.length) * index))
								}}
							/>
							<motion.button
								onClick={() => {
									setStep(step)
									setX(getvwOffsetString((navWidth / process.length) * index))
								}}
							>
								{step.phase}
							</motion.button>
						</li>
					))}
				</ul>
			</nav>
			<AnimatePresence exitBeforeEnter>
				<ProcessTimelineItem process={step} />
			</AnimatePresence>
		</>
	)
}

export default ProcessTimeline

