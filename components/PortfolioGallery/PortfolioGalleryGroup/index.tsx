import React from "react"

import { motion } from "framer-motion"

import type { ProjectCategoryOptionsType, ProjectType } from "../../../types/project"

import { projects } from "../../../lib/projects"
import PortfolioGalleryItem from "./PortfolioGalleryItem"

type Props = {
	category: ProjectCategoryOptionsType
}

const PortfolioGalleryGroup = ({ category }: Props) => {
	const selectedProjects: ProjectType[] =
		category === "all" ? projects : projects.filter((project: ProjectType) => project.category === category)

	return (
		<motion.div
			key={category}
			variants={galleryVariants}
			initial="start"
			animate="go"
			className="portfolio-gallery"
		>
			{selectedProjects.map((project: ProjectType, index: number) => (
				<PortfolioGalleryItem key={project.name} project={project} />
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

