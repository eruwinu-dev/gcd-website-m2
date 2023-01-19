import React from "react"
import { useRouter } from "next/router"

import type { ProjectType } from "../../../types/project"

import PortfolioGalleryItem from "./PortfolioGalleryItem"

type Props = {
	selectedProjects: ProjectType[]
}

const PortfolioGalleryGroup = ({ selectedProjects }: Props) => {
	const {
		query: { category },
	} = useRouter()

	return (
		<div key={(category || "all") as string} className="portfolio-gallery">
			{selectedProjects.map((project: ProjectType) => (
				<PortfolioGalleryItem key={project._id} project={project} />
			))}
		</div>
	)
}

export default PortfolioGalleryGroup

