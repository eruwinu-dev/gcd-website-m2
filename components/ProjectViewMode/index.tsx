import React, { MouseEvent } from "react"
import useStateContext from "../../context/State"
import { BookIcon, ColumnsIcon } from "../../lib/icons"
import type { ModeType } from "../../types"

type Props = {}

const ProjectViewMode = (props: Props) => {
	const { setViewMode, viewMode, setStoryOpen } = useStateContext()

	const toggleViewMode = (mode: ModeType) => (event: MouseEvent<HTMLButtonElement>) => {
		window.scrollTo(0, 0)
		setViewMode(mode)
		setStoryOpen((open: boolean) => !open)
	}

	return (
		<div
			className={[
				"absolute bottom-8 z-[4] flex flex-row items-center w-full h-fit",
				viewMode === "carousel" ? "justify-center" : "justify-start",
			].join(" ")}
		>
			<div
				className={[
					"px-4 py-3 rounded-xl space-x-4",
					viewMode === "carousel" ? "bg-black/60" : "bg-transparent translate-x-8",
				].join(" ")}
			>
				<button type="button" className="p-1 text-white/50 hover:text-white" onClick={toggleViewMode("story")}>
					<BookIcon />
				</button>
				<button
					type="button"
					className="p-1 text-white/50 hover:text-white"
					onClick={toggleViewMode("carousel")}
				>
					<ColumnsIcon />
				</button>
			</div>
		</div>
	)
}

export default ProjectViewMode

