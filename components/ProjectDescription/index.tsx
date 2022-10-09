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
	const boxRef = useRef<HTMLDivElement | null>(null)
	const rect = useRect(boxRef)

	return (
		<div className="project-description">
			<div className="w-3/4 aspect-square flex flex-col items-center justify-center sticky border-2 border-gray-400 px-16 py-16 mx-8 my-16 top-24 space-y-8">
				<ProjectTeam project={project} />
			</div>
			<div className="project-markdown" ref={boxRef}>
				<article dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</div>
	)
}

export default ProjectDescription

