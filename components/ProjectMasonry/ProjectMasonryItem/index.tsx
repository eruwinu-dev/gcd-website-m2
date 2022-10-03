import Link from "next/link"
import React from "react"
import type { ProjectType } from "../../../types"

type Props = {
	project: ProjectType
	index: number
}

const ProjectMasonryItem = ({ project, index }: Props) => {
	const aspects: string[] = ["4/3", "16/9", "1/1", "8/3", "21/5", "1/3"]
	const max: number = 4
	const min: number = 0
	const aspect: string = aspects[index % 5]
	return (
		<Link href={`./portfolio/${project.url}`}>
			<div className="w-full aspect-video inline-block group mb-8 relative cursor-pointer hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl hover:opacity-100 opacity-80">
				<div className="relative">
					<img className={`w-full aspect-[${aspect}] rounded-xl`} src={project.photos[0]} />
				</div>
			</div>
		</Link>
	)
}

export default ProjectMasonryItem

