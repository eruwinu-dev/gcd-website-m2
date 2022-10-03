import React from "react"
import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon } from "../../lib/icons"
import { projects } from "../../lib/projects"
import type { ProjectType } from "../../types"
import useStateContext from "../../context/State"

type Props = {
	project: ProjectType
}

const ProjectBottomNav = ({ project }: Props) => {
	const { setStoryOpen, setViewMode } = useStateContext()

	const projectIndex: number = projects.findIndex((projectItem: ProjectType) => projectItem.url === project.url)

	const prevProject: ProjectType | undefined = projects[projectIndex - 1]
	const nextProject: ProjectType | undefined = projects[projectIndex + 1]

	return (
		<div className="project-bottom-bar">
			{typeof prevProject === "undefined" ? null : (
				<div className="project-bottom-bar-link left-0 items-end">
					<label>Previous Project</label>
					<Link href={`./${prevProject.url}`}>
						<a
							onClick={() => {
								setStoryOpen(false)
								setViewMode("story")
							}}
						>
							<ArrowLeftIcon />
							<div>{prevProject.name}</div>
						</a>
					</Link>
				</div>
			)}
			{typeof nextProject === "undefined" ? null : (
				<div className="project-bottom-bar-link right-0 items-start">
					<label>Next Project</label>
					<Link href={`./${nextProject.url}`}>
						<a
							onClick={() => {
								setStoryOpen(false)
								setViewMode("story")
							}}
						>
							<div>{nextProject.name}</div>
							<ArrowRightIcon />
						</a>
					</Link>
				</div>
			)}
		</div>
	)
}

export default ProjectBottomNav

