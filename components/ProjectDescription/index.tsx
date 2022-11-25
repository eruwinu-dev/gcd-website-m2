import React from "react"
import ProjectTeam from "../ProjectTeam"

import { ProjectType } from "../../types/project"
import { PortableText } from "@portabletext/react"
import { CustomProjectStoryComponents } from "../CustomPTComponents"

type Props = {
	project: ProjectType
}

const ProjectDescription = ({ project }: Props) => {
	return (
		<div className="project-description">
			<div className="lg:w-4/5 md:w-4/5 w-full aspect-video flex flex-col items-center lg:justify-start justify-center lg:sticky static px-16 pt-16 mx-8 lg:my-16 my-0 lg:top-24 top-0">
				<ProjectTeam name={project.name} team={project?.team || ""} />
			</div>
			{project.body ? (
				<div className="project-markdown">
					<PortableText value={project.body} components={CustomProjectStoryComponents} />
				</div>
			) : null}
		</div>
	)
}

export default ProjectDescription

