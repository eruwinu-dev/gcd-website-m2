import React from "react"
import { ProjectCategoryOptionsType, ProjectType } from "../../../types/state"
import { motion } from "framer-motion"
import { projects } from "../../../lib/projects"
import PortfolioGalleryItem from "./PortfolioGalleryItem"

type Props = {
	category: ProjectCategoryOptionsType
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
			staggerChildren: 0.1,
			duration: 0.4,
		},
	},
	end: {
		y: -10,
		opacity: 0,
		transition: {
			duration: 0.4,
		},
	},
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
			exit="end"
			className="portfolio-gallery"
		>
			{selectedProjects.map((project: ProjectType, index: number) => (
				<PortfolioGalleryItem key={project.name} project={project} />
			))}
		</motion.div>
	)
}

export default PortfolioGalleryGroup

