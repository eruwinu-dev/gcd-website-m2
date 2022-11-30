import React from "react"

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
		<div key={category} className="portfolio-gallery">
			{selectedProjects.map((project: ProjectType) => (
				<PortfolioGalleryItem key={project._id} project={project} />
			))}
		</div>
	)
}

export default PortfolioGalleryGroup

