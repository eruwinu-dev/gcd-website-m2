import React, { MouseEvent } from "react"
import Link from "next/link"

import type { ProjectType } from "../../types/project"

import { ArrowLeftIcon, ArrowRightIcon } from "../../lib/icons"

import { projects } from "../../lib/projects"
import useStateContext from "../../context/State"

type Props = {
	project: ProjectType
}

const ProjectBottomNav = ({ project }: Props) => {
	const { setStoryOpen, setPage } = useStateContext()

	const projectIndex: number = projects.findIndex((projectItem: ProjectType) => projectItem.url === project.url)

	const prevProject: ProjectType | undefined = projects[projectIndex - 1]
	const nextProject: ProjectType | undefined = projects[projectIndex + 1]

	const resetProjectState = (event: MouseEvent<HTMLAnchorElement>) => {
		setStoryOpen(false)
		setPage([0, 1])
	}

	return (
		<div className="project-bottom-bar">
			{typeof prevProject === "undefined" ? (
				<div />
			) : (
				<div className="flex flex-col lg:items-start md:items-start items-center">
					<div className="project-bottom-bar-link w-fit lg:items-end md:items-end items-center">
						<label>Previous Project</label>
						<Link href={`./${prevProject.url}`}>
							<a onClick={resetProjectState}>
								<ArrowLeftIcon />
								<div>{prevProject.name}</div>
							</a>
						</Link>
					</div>
				</div>
			)}
			{typeof nextProject === "undefined" ? (
				<div />
			) : (
				<div className="flex flex-col lg:items-end md:items-end items-center">
					<div className="project-bottom-bar-link w-fit lg:items-start md:items-start items-center">
						<label>Next Project</label>
						<Link href={`./${nextProject.url}`}>
							<a onClick={resetProjectState}>
								<div>{nextProject.name}</div>
								<ArrowRightIcon />
							</a>
						</Link>
					</div>
				</div>
			)}
		</div>
	)
}

export default ProjectBottomNav

