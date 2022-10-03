import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion"

import { ArrowLeftIcon, ArrowRightIcon } from "../../lib/icons"

import type { ProjectType } from "../../types"
import useStateContext from "../../context/State"

type Props = {
	project: ProjectType
}

const ProjectCarousel = ({ project }: Props) => {
	const { page, direction, setPage } = useStateContext()

	const photoIndex = wrap(0, project.photos.length, page)

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection])
	}

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="project-landing-carousel-container"
			>
				<div className="project-carousel-container">
					<AnimatePresence initial={false} custom={direction}>
						<motion.img
							key={page}
							alt={project.name}
							src={project.photos[photoIndex]}
							custom={direction}
							variants={variants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{
								x: { type: "spring", stiffness: 300, damping: 30 },
							}}
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={1}
							onDragEnd={(e, { offset, velocity }) => {
								const swipe = swipePower(offset.x, velocity.x)

								if (swipe < -swipeConfidenceThreshold) {
									paginate(1)
								} else if (swipe > swipeConfidenceThreshold) {
									paginate(-1)
								}
							}}
						/>
					</AnimatePresence>
					<div className="carousel-controls left-0" onClick={() => paginate(-1)}>
						<button type="button" className="p-2 text-white">
							<ArrowLeftIcon />
						</button>
					</div>
					<div className="carousel-controls right-0" onClick={() => paginate(1)}>
						<button type="button">
							<ArrowRightIcon />
						</button>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	)
}

export default ProjectCarousel

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
		}
	},
	center: {
		zIndex: 1,
		x: 0,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
		}
	},
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity
}

