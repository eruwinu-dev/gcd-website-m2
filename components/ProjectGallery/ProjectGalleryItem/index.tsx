import React, { MouseEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

import { motion, useAnimation } from "framer-motion"

type Props = {
	photo: string
	index: number
}

const ProjectGalleryItem = ({ photo, index }: Props) => {
	const router = useRouter()
	const { asPath } = router
	const controls = useAnimation()
	const [load, setLoad] = useState<boolean>(false)

	useEffect(() => {
		if (load) {
			controls.start("visible")
		}
		return () => {}
	}, [load])

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
		<div
			className={["project-gallery-item", !load ? "animate-pulse bg-gray-200" : ""].join(" ")}
			onClick={viewGalleryItem(index)}
		>
			<motion.div
				className="relative w-full h-full overflow-hidden generic-transition hover:scale-105"
				variants={itemVariants}
				initial="hidden"
				animate={controls}
			>
				<Image
					src={photo}
					alt={photo}
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					unoptimized
					onLoadingComplete={() => setLoad(true)}
				/>
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

