import { useRouter } from "next/router"
import React, { MouseEvent } from "react"
import useStateContext from "../../context/State"
import { BookIcon, ColumnsIcon } from "../../lib/icons"
import type { ModeType } from "../../types"

type Props = {}

const ProjectViewMode = (props: Props) => {
	const { setStoryOpen } = useStateContext()
	const router = useRouter()
	const { mode } = router.query
	const { asPath } = router

	const toggleViewMode = (mode: ModeType) => (event: MouseEvent<HTMLButtonElement>) => {
		window.scrollTo(0, 0)
		setStoryOpen(false)
		router.push(
			{
				pathname: asPath.split("?")[0],
				query: { mode },
			},
			undefined,
			{ shallow: true }
		)
	}

	const viewMode: ModeType = (mode || "story") as ModeType

	return (
		<div
			className={[
				"absolute z-[4] flex flex-row items-center w-full h-fit",
				viewMode === "carousel"
					? "justify-center bottom-8"
					: "justify-start lg:bottom-8 md:bottom-24 bottom-24",
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

