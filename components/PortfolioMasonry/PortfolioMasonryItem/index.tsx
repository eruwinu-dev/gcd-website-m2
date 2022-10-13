import React from "react"
import Link from "next/link"
import type { ProjectType } from "../../../types"
import Image from "next/image"

type Props = {
	project: ProjectType
	index: number
}

const PortfolioMasonryItem = ({ project, index }: Props) => {
	return (
		<Link href={`./portfolio/${project.url}`}>
			<div className="portfolio-masonry-item">
				<div className="portfolio-masonry-item-slider">
					<h5>{project.name}</h5>
					<span className="italic">{project.address}</span>
				</div>
				<div
					className={[
						"w-full h-auto relative aspect-square overflow-hidden generic-transition hover:scale-105",
					].join(" ")}
				>
					<Image src={project.photos[0]} alt={project.url} layout="fill" />
				</div>
			</div>
		</Link>
	)
}

export default PortfolioMasonryItem

