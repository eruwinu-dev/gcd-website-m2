import React from "react"
import { useRouter } from "next/router"

import type { PortfolioProjectType } from "../../../types/project"

import PortfolioGalleryItem from "./PortfolioGalleryItem"

type Props = {
	selectedProjects: PortfolioProjectType[]
}

const PortfolioGalleryGroup = ({ selectedProjects }: Props) => {
	const {
		query: { category },
	} = useRouter()

	return (
		<div key={(category || "all") as string} className="portfolio-gallery-group">
			{selectedProjects.map((project) => (
				<PortfolioGalleryItem key={project._id} project={project} />
			))}
		</div>
	)
}

export default PortfolioGalleryGroup

