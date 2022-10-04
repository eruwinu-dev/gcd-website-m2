import Image from "next/image"
import React, { MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "../../lib/icons"
import useStateContext from "../../context/State"

import type { ProjectType, TeamMemberType } from "../../types"
import ProjectTeam from "../ProjectTeam"

type Props = {
	project: ProjectType
	html: string
}

const ProjectStory = ({ project, html }: Props) => {
	const { storyOpen, setStoryOpen } = useStateContext()

	const toggleProjectStory = (event: MouseEvent<HTMLButtonElement>) => {
		setStoryOpen((open: boolean) => !open)
		window.scrollTo(0, 0)
	}

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Image src={project.photos[0]} layout="fill" className="project-story-image" />

				<div className="project-story-team-container">
					<div className="project-story-relative">
						<AnimatePresence>
							{!storyOpen && (
								<motion.div
									className="animated-div"
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }}
									exit={{ opacity: 0, x: -10, transition: { duration: 0.5 } }}
								>
									<button
										type="button"
										className="inline-flex items-center space-x-1"
										onClick={toggleProjectStory}
									>
										<div>View Story</div>
										<ChevronDoubleRightIcon />
									</button>
								</motion.div>
							)}
						</AnimatePresence>
						<AnimatePresence>
							{storyOpen && (
								<motion.div
									className="animated-div"
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }}
									exit={{ opacity: 0, x: -10, transition: { duration: 0.5 } }}
								>
									<button
										type="button"
										className="inline-flex items-center space-x-1"
										onClick={toggleProjectStory}
									>
										<ChevronDoubleLeftIcon />
									</button>
								</motion.div>
							)}
						</AnimatePresence>
						<ProjectTeam project={project} />
					</div>
				</div>
				<AnimatePresence>
					{storyOpen && (
						<motion.div
							className="project-story-markdown-container"
							initial={{ zIndex: -1, opacity: 0, y: -100 }}
							animate={{ zIndex: 2, opacity: 1, y: 0, transition: { duration: 0.5 } }}
							exit={{ opacity: 0, zIndex: 0, transition: { duration: 0.5 } }}
						>
							<article dangerouslySetInnerHTML={{ __html: html }} className="project-markdown-article" />
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</AnimatePresence>
	)
}

export default ProjectStory

