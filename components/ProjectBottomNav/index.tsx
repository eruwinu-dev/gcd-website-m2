import React, { MouseEvent } from "react"
import Link from "next/link"

import { motion } from "framer-motion"

import useStateContext from "../../context/State"

type Props = {
	previous: string
	next: string
}

const ProjectBottomNav = ({ previous, next }: Props) => {
	const { setStoryOpen } = useStateContext()

	const resetProjectState = (event: MouseEvent<HTMLAnchorElement>) => {
		setStoryOpen(false)
	}

	return (
		<div className="project-bottom-bar">
			{!previous ? (
				<div />
			) : (
				<div className="flex flex-col lg:items-start md:items-start items-center cursor-pointer">
					<motion.div
						className="project-bottom-bar-link w-fit lg:items-end md:items-end items-center relative"
						variants={linkVariants}
						initial="hidden"
						whileHover="show"
						exit="hidden"
					>
						<label className="cursor-pointer">Previous Project</label>
						<Link href={`./${previous}`}>
							<a className="capitalize" onClick={resetProjectState}>
								<div>{previous.replaceAll("-", " ")}</div>
							</a>
						</Link>
						<motion.div className="absolute -bottom-1 right-0 h-1 bg-red-700" variants={lineVariants} />
					</motion.div>
				</div>
			)}
			{!next ? (
				<div />
			) : (
				<div className="flex flex-col lg:items-end md:items-end items-center">
					<motion.div
						className="project-bottom-bar-link w-fit lg:items-start md:items-start items-center relative"
						variants={linkVariants}
						initial="hidden"
						whileHover="show"
						exit="hidden"
					>
						<label className="cursor-pointer">Next Project</label>
						<Link href={`./${next}`}>
							<a className="capitalize" onClick={resetProjectState}>
								<div>{next.replaceAll("-", " ")}</div>
							</a>
						</Link>
						<motion.div className="absolute -bottom-1 lefet-0 h-1 bg-red-700" variants={lineVariants} />
					</motion.div>
				</div>
			)}
		</div>
	)
}

const linkVariants = {
	hidden: {},
	show: {},
}

const lineVariants = {
	hidden: {
		opacity: 0,
		width: "0%",
		transition: {
			duration: 0.3,
			ease: "easeInOut",
			type: "spring",
		},
	},
	show: {
		opacity: 1,
		width: "100%",
		transition: {
			duration: 0.3,
			ease: "easeInOut",
			type: "spring",
		},
	},
}

export default ProjectBottomNav

