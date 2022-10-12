import { useRect } from "@reach/rect"
import React, { useRef } from "react"
import type { ModeType, ProjectType } from "../../types"
import ProjectTeam from "../ProjectTeam"

type Props = {
	project: ProjectType
	html: string
	location?: ModeType
}

const ProjectDescription = ({ project, html }: Props) => {
	return (
		<div className="project-description">
			<div className="lg:w-3/5 md:w-4/5 w-full lg:aspect-square aspect-video flex flex-col items-center justify-center lg:sticky static border-2 border-gray-400 px-16 py-16 mx-8 lg:my-16 my-0 lg:top-24 top-0 space-y-8">
				<ProjectTeam project={project} />
			</div>
			<div className="project-markdown">
				<article dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</div>
	)
}

export default ProjectDescription

