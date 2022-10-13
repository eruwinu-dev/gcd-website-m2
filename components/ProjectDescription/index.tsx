import React from "react"
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
			<div className="lg:w-4/5 md:w-4/5 w-full aspect-video flex flex-col items-center lg:justify-start justify-center lg:sticky static px-16 pt-16 mx-8 lg:my-16 my-0 lg:top-24 top-0">
				<ProjectTeam project={project} />
			</div>
			{html && (
				<div className="project-markdown">
					<article dangerouslySetInnerHTML={{ __html: html }} />
				</div>
			)}
		</div>
	)
}

export default ProjectDescription

