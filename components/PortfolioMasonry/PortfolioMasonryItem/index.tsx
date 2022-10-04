import React from "react"
import Link from "next/link"
import type { ProjectType } from "../../../types"
import { motion } from "framer-motion"

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
	const aspects: string[] = ["4/3", "16/9", "1/1", "8/3", "21/5", "1/3"]
	const aspect: string = aspects[index % 5]
	return (
		<Link href={`./portfolio/${project.url}`}>
			<motion.div className="portfolio-masonry-item" initial="rest" whileHover="hover" animate="rest">
				<motion.div className="portfolio-masonry-item-slider" variants={titleMotion}>
					<h3>{project.name}</h3>
				</motion.div>
				<motion.div className="image" variants={imageMotion}>
					<img className={`w-full aspect-[${aspect}] rounded-xl`} src={project.photos[0]} />
				</motion.div>
			</motion.div>
		</Link>
	)
}

export default PortfolioMasonryItem

