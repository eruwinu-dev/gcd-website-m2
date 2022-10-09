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
	rest: { opacity: 1 },
	hover: { opacity: 1 },
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
	const aspects = ["aspect-[1/1]", "aspect-[1.3/1]", "aspect-[16/9]", "aspect-[3/2]"]

	// const random = Math.floor(Math.random() * 100) % aspects.length

	return (
		<Link href={`./portfolio/${project.url}`}>
			<motion.div className="portfolio-masonry-item" initial="rest" whileHover="hover" animate="rest">
				<motion.div className="portfolio-masonry-item-slider" variants={titleMotion}>
					<h3>{project.name}</h3>
					<span className="italic">{project.address}</span>
				</motion.div>
				<motion.div className={["w-full h-auto relative", aspects[0]].join(" ")} variants={imageMotion}>
					<Image src={project.photos[0]} alt={project.url} layout="fill" />
				</motion.div>
			</motion.div>
		</Link>
	)
}

export default PortfolioMasonryItem

