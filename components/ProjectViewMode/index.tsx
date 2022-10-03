import React, { MouseEvent } from "react"
import useStateContext from "../../context/State"
import { BookIcon, ColumnsIcon } from "../../lib/icons"
import type { ModeType } from "../../types"

type Props = {}

const ProjectViewMode = (props: Props) => {
	const { setViewMode } = useStateContext()

	const toggleViewMode = (mode: ModeType) => (event: MouseEvent<HTMLButtonElement>) => setViewMode(mode)

	return (
		<div className="absolute bottom-0 left-0 p-4 z-[3] flex flex-row items-center justify-center space-x-4">
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

