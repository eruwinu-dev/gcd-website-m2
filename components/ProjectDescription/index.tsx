import React from "react"
import type { ProjectType } from "../../types"
import ProjectTeam from "../ProjectTeam"

type Props = {
	project: ProjectType
	html: string
}

const ProjectDescription = ({ project, html }: Props) => {
	return (
		<div className="project-description">
			<ProjectTeam project={project} />
			<div className="project-markdown">
				<article className="project-markdown-article" dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</div>
	)
}

export default ProjectDescription

