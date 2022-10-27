import Image from "next/image"
import React, { MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useStateContext from "../../context/State"

import type { ModeType, ProjectType } from "../../types/project"
import ProjectTeam from "../ProjectTeam"
import { ChevronDoubleRightIcon, CloseIcon } from "../../lib/icons"
import { useRouter } from "next/router"
import { wrap } from "popmotion"

type Props = {
	project: ProjectType
	html: string
}

const opacityVariants = {
	closed: {
		opacity: 0.5,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
	open: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
}

const borderVariants = {
	closed: {
		x: 0,
		width: "48%",
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
	open: {
		x: "50vw",
		width: "30%",
		transition: {
			delay: 0.1,
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
			duration: 0.7,
			ease: "easeInOut",
		},
	},
}

const ProjectStory = ({ project, html }: Props) => {
	const { storyOpen, setStoryOpen, page } = useStateContext()
	const {
		query: { mode },
	} = useRouter()

	const viewMode = (mode || "story") as ModeType

	const photoIndex = wrap(0, project.photos.length, page)

	const toggleProjectStory = (event: MouseEvent<HTMLButtonElement>) => {
		setStoryOpen((open: boolean) => !open)
		window.scrollTo(0, 0)
	}

	return (
		<AnimatePresence>
			{viewMode === "story" && (
				<motion.div
					variants={opacityVariants}
					initial="closed"
					animate="open"
					exit="closed"
					className="relative w-full lg:h-screen h-[100vh] lg:translate-y-0 md:-translate-y-[3.5rem] -translate-y-[3.5rem] flex flex-col items-center overflow-x-hidden"
				>
					<Image
						src={project.photos[photoIndex]}
						alt={project.name}
						layout="fill"
						objectFit="cover"
						objectPosition="left"
						quality="95"
					/>
					<div className="relative w-full h-full bg-black/60 z-[2]">
						<motion.div
							className="border-2 top-16 left-8 absolute lg:flex md:flex hidden flex-col items-start justify-center px-8 h-[calc(100vh_-_6rem)] w-[calc(100vw_/_2_-_2rem)]"
							variants={borderVariants}
							initial="closed"
							animate={storyOpen ? "open" : "closed"}
							exit="closed"
						/>
						<div className="border-2 top-16 left-8 absolute lg:hidden md:hidden flex flex-col items-start justify-center px-8 h-[calc(100vh_-_6rem)] w-[calc(100vw_-_4rem)]" />
						<div className="top-16 left-8 absolute grid grid-rows-3 px-8 z-[2] h-[calc(100vh_-_6rem)]  lg:w-[calc(100vw_/_2_-_2rem)] md:w-[calc(100vw_/_2_-_2rem)] w-[calc(100vw_-_4rem)]">
							<div />
							<ProjectTeam project={project} />
							{html && (
								<AnimatePresence>
									{!storyOpen && (
										<motion.div
											className="animated-div-button lg:flex md:flex hidden flex-row items-center"
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
							)}
						</div>

						{html && (
							<div className="lg:flex md:flex hidden">
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
														animate={{
															opacity: 1,
															x: 0,
															transition: { duration: 0.5, delay: 0.5 },
														}}
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
						)}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default ProjectStory

