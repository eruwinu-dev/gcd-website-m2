import Image from "next/image"
import React, { MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BarsIcon, CloseIcon } from "../../lib/icons"
import useStateContext from "../../context/State"

import type { ProjectType, TeamMemberType } from "../../types"
import ProjectTeam from "../ProjectTeam"

type Props = {
	project: ProjectType
	html: string
}

const ProjectStory = ({ project, html }: Props) => {
	const { storyOpen, setStoryOpen } = useStateContext()

	const toggleProjectStory = (event: MouseEvent<HTMLButtonElement>) => setStoryOpen((open: boolean) => !open)

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Image src={project.photos[0]} layout="fill" className="project-story-image" />
				<div
					className={[
						"project-story-div",
						storyOpen ? "bg-white/[92.5%]" : "",
						"z-[3] flex flex-row items-center justify-end",
					].join(" ")}
				>
					<button type="button" onClick={toggleProjectStory}>
						{storyOpen ? <CloseIcon /> : <BarsIcon />}
					</button>
				</div>
				<div className="project-story-team-container">
					<ProjectTeam project={project} />
				</div>
				{storyOpen && (
					<div className="project-story-markdown-container">
						<article dangerouslySetInnerHTML={{ __html: html }} className="project-markdown-article" />
					</div>
				)}
			</motion.div>
		</AnimatePresence>
	)
}

export default ProjectStory

