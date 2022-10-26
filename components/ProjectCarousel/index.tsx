import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion"

import type { ProjectType } from "../../types/project"
import useStateContext from "../../context/State"
import CarouselControl from "./CarouselControl"

type Props = {
	project: ProjectType
}

const ProjectCarousel = ({ project }: Props) => {
	const { page, direction, paginate } = useStateContext()

	const photoIndex = wrap(0, project.photos.length, page)

	return (
		<AnimatePresence>
			<motion.div className="project-landing-carousel-container">
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
					<CarouselControl side="left" />
					<CarouselControl side="right" />
				</div>
			</motion.div>
		</AnimatePresence>
	)
}

export default ProjectCarousel

const limit = 2000

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? limit : -limit,
		}
	},
	center: {
		zIndex: 1,
		x: 0,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? limit : -limit,
		}
	},
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity
}

