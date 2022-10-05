import React, { MouseEvent } from "react"
import useStateContext from "../../context/State"
import { BookIcon, ColumnsIcon } from "../../lib/icons"
import type { ModeType } from "../../types"

type Props = {}

const ProjectViewMode = (props: Props) => {
	const { setViewMode, viewMode } = useStateContext()

	const toggleViewMode = (mode: ModeType) => (event: MouseEvent<HTMLButtonElement>) => {
		window.scrollTo(0, 0)
		setViewMode(mode)
	}

	return (
		<div
			className={[
				"absolute bottom-2 left-2 px-4 py-3 z-[3] rounded-xl flex flex-row items-center justify-center space-x-4",
				viewMode === "carousel" ? "bg-black/60" : "bg-transparent",
			].join(" ")}
		>
			<button type="button" className="p-1 text-white/50 hover:text-white" onClick={toggleViewMode("story")}>
				<BookIcon />
			</button>
			<button type="button" className="p-1 text-white/50 hover:text-white" onClick={toggleViewMode("carousel")}>
				<ColumnsIcon />
			</button>
		</div>
	)
}

export default ProjectViewMode

