import React from "react"
import { projects } from "../../lib/projects"
import type { ProjectType } from "../../types"
import ProjectMasonryItem from "./ProjectMasonryItem"

type Props = {}

const ProjectMasonry = (props: Props) => {
	return (
		<div className="gap-8 lg:columns-3 md:columns-2 sm:columns-2 columns-2 w-[80%] h-full p-8">
			{projects.map((project: ProjectType, index: number) => (
				<ProjectMasonryItem project={project} key={index} index={index} />
			))}
		</div>
	)
}

export default ProjectMasonry

