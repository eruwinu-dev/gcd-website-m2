import React, { MouseEvent } from "react"
import useStateContext from "../../context/State"
import { BookIcon, ColumnsIcon } from "../../lib/icons"
import type { ModeType } from "../../types"
import { motion } from "framer-motion"

type Props = {}

const viewVariants = {
	story: {
		x: 0,
	},
	carousel: {
		x: "calc(50vw - 8rem)",
	},
}

const ProjectViewMode = (props: Props) => {
	const { setViewMode, viewMode } = useStateContext()

	const toggleViewMode = (mode: ModeType) => (event: MouseEvent<HTMLButtonElement>) => {
		window.scrollTo(0, 0)
		setViewMode(mode)
	}

	return (
		<motion.div
			variants={viewVariants}
			initial="story"
			animate={viewMode}
			transition={{
				ease: "easeInOut",
				duration: 0.5,
			}}
			className={[
				"absolute bottom-8 left-8 px-4 py-3 z-[4] rounded-xl flex flex-row items-center justify-center space-x-4 w-fit h-fit",
				viewMode === "carousel" ? "bg-black/60" : "bg-transparent",
			].join(" ")}
		>
			<button type="button" className="p-1 text-white/50 hover:text-white" onClick={toggleViewMode("story")}>
				<BookIcon />
			</button>
			<button type="button" className="p-1 text-white/50 hover:text-white" onClick={toggleViewMode("carousel")}>
				<ColumnsIcon />
			</button>
		</motion.div>
	)
}

export default ProjectViewMode

