import React from "react"

import { motion } from "framer-motion"

import type { ProjectType } from "../../../types/project"

import PortfolioGalleryItem from "./PortfolioGalleryItem"
import useStateContext from "../../../context/State"

type Props = {
	category: string
}

const PortfolioGalleryGroup = ({ category }: Props) => {
	const { projects } = useStateContext()
	const selectedProjects: ProjectType[] =
		category === "all"
			? projects
			: projects.filter((project: ProjectType) => project.category.slug.current === category)

	return (
		<motion.div
			key={category}
			variants={galleryVariants}
			initial="start"
			animate="go"
			className="portfolio-gallery"
		>
			{selectedProjects.map((project: ProjectType) => (
				<PortfolioGalleryItem key={project._id} project={project} />
			))}
		</motion.div>
	)
}

const galleryVariants = {
	start: {
		y: 10,
		opacity: 0,
	},
	go: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.0001,
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
}

export default PortfolioGalleryGroup

