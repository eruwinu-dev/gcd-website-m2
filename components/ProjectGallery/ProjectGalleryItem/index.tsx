import React, { MouseEvent } from "react"
import { useRouter } from "next/router"

import { motion } from "framer-motion"

type Props = {
	photo: string
	index: number
}

const ProjectGalleryItem = ({ photo, index }: Props) => {
	const router = useRouter()
	const { asPath } = router

	const viewGalleryItem = (index: number) => (event: MouseEvent) => {
		router.push(
			{
				pathname: asPath.split("?")[0],
				query: { mode: "carousel", photo: index },
			},
			undefined,
			{ shallow: true }
		)
		window.scrollTo(0, 0)
	}

	return (
		<div className={["project-gallery-item"].join(" ")} onClick={viewGalleryItem(index)}>
			<motion.div
				className="relative w-full h-full overflow-hidden generic-transition hover:scale-105"
				variants={itemVariants}
				initial="hidden"
				whileInView="visible"
			>
				<img src={photo} alt={photo} />
			</motion.div>
		</div>
	)
}

const itemVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
}

export default ProjectGalleryItem

