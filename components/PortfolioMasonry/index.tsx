import React from "react"
import { projects } from "../../lib/projects"
import type { ProjectType } from "../../types"
import PortfolioMasonryItem from "./PortfolioMasonryItem"

type Props = {}

const PortfolioMasonry = (props: Props) => {
	return (
		<div className="portfolio-masonry">
			{projects.map((project: ProjectType, index: number) => (
				<PortfolioMasonryItem project={project} key={index} index={index} />
			))}
		</div>
	)
}

export default PortfolioMasonry

