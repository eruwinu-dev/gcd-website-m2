import React from "react"
import { masonryArrange } from "../../lib/arrange"
import { projects } from "../../lib/projects"
import type { ProjectType } from "../../types"
import PortfolioMasonryItem from "./PortfolioMasonryItem"

type Props = {}

const PortfolioMasonry = (props: Props) => {
	return (
		<div className="portfolio-masonry">
			{masonryArrange(Array.from(Array(projects.length).keys())).map((projectIndex: number, index: number) => (
				<PortfolioMasonryItem project={projects[projectIndex]} key={index} index={index} />
			))}
		</div>
	)
}

export default PortfolioMasonry

