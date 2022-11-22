import React, { MouseEvent } from "react"
import Link from "next/link"

import { motion } from "framer-motion"

import type { ProjectType } from "../../types/project"

import useStateContext from "../../context/State"

import { projects } from "../../lib/projects"

type Props = {
	project: ProjectType
}

const ProjectBottomNav = ({ project }: Props) => {
	const { setStoryOpen } = useStateContext()

	const projectIndex: number = projects.findIndex((projectItem: ProjectType) => projectItem.url === project.url)

	const prevProject: ProjectType | undefined = projects[projectIndex - 1]
	const nextProject: ProjectType | undefined = projects[projectIndex + 1]

	const resetProjectState = (event: MouseEvent<HTMLAnchorElement>) => {
		setStoryOpen(false)
	}

	return (
		<div className="project-bottom-bar">
			{typeof prevProject === "undefined" ? (
				<div />
			) : (
				<div className="flex flex-col lg:items-start md:items-start items-center cursor-pointer">
					<motion.div
						className="project-bottom-bar-link w-fit lg:items-end md:items-end items-center relative"
						variants={linkVariants}
						initial="hidden"
						whileHover="show"
						exit="hidden"
					>
						<label className="cursor-pointer">Previous Project</label>
						<Link href={`./${prevProject.url}`}>
							<a onClick={resetProjectState}>
								<div>{prevProject.name}</div>
							</a>
						</Link>
						<motion.div className="absolute -bottom-1 right-0 h-1 bg-red-700" variants={lineVariants} />
					</motion.div>
				</div>
			)}
			{typeof nextProject === "undefined" ? (
				<div />
			) : (
				<div className="flex flex-col lg:items-end md:items-end items-center">
					<motion.div
						className="project-bottom-bar-link w-fit lg:items-start md:items-start items-center relative"
						variants={linkVariants}
						initial="hidden"
						whileHover="show"
						exit="hidden"
					>
						<label className="cursor-pointer">Next Project</label>
						<Link href={`./${nextProject.url}`}>
							<a onClick={resetProjectState}>
								<div>{nextProject.name}</div>
							</a>
						</Link>
						<motion.div className="absolute -bottom-1 lefet-0 h-1 bg-red-700" variants={lineVariants} />
					</motion.div>
				</div>
			)}
		</div>
	)
}

const linkVariants = {
	hidden: {},
	show: {},
}

const lineVariants = {
	hidden: {
		opacity: 0,
		width: "0%",
		transition: {
			duration: 0.3,
			ease: "easeInOut",
			type: "spring",
		},
	},
	show: {
		opacity: 1,
		width: "100%",
		transition: {
			duration: 0.3,
			ease: "easeInOut",
			type: "spring",
		},
	},
}

export default ProjectBottomNav

