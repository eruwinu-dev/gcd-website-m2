import React from "react"
import Link from "next/link"
import type { ProjectType } from "../../../types"
import { motion } from "framer-motion"
import Image from "next/image"

type Props = {
	project: ProjectType
	index: number
}

const imageMotion = {
	rest: { scale: 1 },
	hover: { scale: 1.05 },
}

const titleMotion = {
	rest: { opacity: 0, ease: "easeOut", duration: 0.2 },
	hover: {
		opacity: 1,
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeInOut",
		},
	},
}

const PortfolioMasonryItem = ({ project, index }: Props) => {

	return (
		<Link href={`./portfolio/${project.url}`}>
			<motion.div className="portfolio-masonry-item" initial="rest" whileHover="hover" animate="rest">
				<motion.div className="portfolio-masonry-item-slider" variants={titleMotion}>
					<h4>{project.name}</h4>
					<span className="italic">{project.address}</span>
				</motion.div>
				<motion.div className={["w-full h-auto relative aspect-square"].join(" ")} variants={imageMotion}>
					<Image src={project.photos[0]} alt={project.url} layout="fill" />
				</motion.div>
			</motion.div>
		</Link>
	)
}

export default PortfolioMasonryItem

