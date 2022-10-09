import Image from "next/image"
import React, { MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useStateContext from "../../context/State"

import type { ProjectType } from "../../types"
import ProjectTeam from "../ProjectTeam"
import { ChevronDoubleRightIcon, CloseIcon } from "../../lib/icons"

type Props = {
	project: ProjectType
	html: string
}

const borderVariants = {
	closed: {
		x: 0,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
	open: {
		x: "calc(48vw)",
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
}

const storyVariants = {
	closed: {
		x: -30,
		opacity: 0,
	},
	open: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.1,
			duration: 0.7,
			ease: "easeInOut",
		},
	},
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
				className="relative w-full h-full flex flex-col items-center"
			>
				<Image src={project.photos[0]} alt={project.name} layout="fill" />
				<div className="relative w-full h-full bg-black/60 z-[2]">
					<motion.div
						className="border-2 top-16 left-8 absolute flex flex-col items-start justify-center px-8"
						style={{
							height: "calc(100vh - 6rem)",
							width: "calc(100vw / 2 - 2rem)",
						}}
						variants={borderVariants}
						initial="closed"
						animate={storyOpen ? "open" : "closed"}
					/>
					<div
						className="top-16 left-8 absolute grid grid-rows-3 px-8 z-[2]"
						style={{
							height: "calc(100vh - 6rem)",
							width: "calc(100vw / 2 - 2rem)",
						}}
					>
						<div />
						<ProjectTeam project={project} />
						<div className="w-full">
							<AnimatePresence>
								{!storyOpen && (
									<motion.div
										className="animated-div-button"
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }}
										exit={{ opacity: 0, x: -10, transition: { duration: 0.5 } }}
									>
										<button type="button" onClick={toggleProjectStory}>
											<div>View Story</div>
											<ChevronDoubleRightIcon />
										</button>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>

					<AnimatePresence>
						{storyOpen && (
							<motion.div
								className="project-story-markdown-container"
								variants={storyVariants}
								initial="closed"
								animate={storyOpen ? "open" : "closed"}
							>
								<AnimatePresence>
									{storyOpen && (
										<motion.div
											className="w-full flex flex-row items-center justify-end pt-2 pr-2 generic-transition text-gray-600 hover:text-gray-800"
											initial={{ opacity: 0, x: -10 }}
											animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }}
											exit={{ opacity: 0, x: -10, transition: { duration: 0.5 } }}
										>
											<button type="button" onClick={toggleProjectStory}>
												<CloseIcon />
											</button>
										</motion.div>
									)}
								</AnimatePresence>
								<article dangerouslySetInnerHTML={{ __html: html }} />
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				{/* <div className="project-story-team-container">
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
								<article
									dangerouslySetInnerHTML={{ __html: html }}
									className="project-markdown-article"
								/>
							</motion.div>
						)}
					</AnimatePresence> */}
			</motion.div>
		</AnimatePresence>
	)
}

export default ProjectStory

