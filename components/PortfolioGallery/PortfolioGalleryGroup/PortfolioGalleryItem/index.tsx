import React, { MouseEvent, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { motion } from "framer-motion"
import { wrap } from "popmotion"

import type { ProjectType } from "../../../../types/project"

import useStateContext from "../../../../context/State"

type Props = {
	project: ProjectType
}

const PortfolioGalleryItem = ({ project }: Props) => {
	const { setStoryOpen } = useStateContext()
	const [photo, setPhoto] = useState<number>(0)
	const [hover, setHover] = useState<boolean>(false)

	const photoIndex = wrap(0, project.photos.length, photo)

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (project.photos.length === 1) return
			setPhoto((photo) => (hover ? photo + 1 : 0))
		}, 1000)

		return () => {
			clearInterval(intervalId)
			setPhoto(0)
		}
	}, [hover])

	const setCoverPhoto = (event: MouseEvent<HTMLDivElement>) => {
		setStoryOpen(false)
	}

	return (
		<motion.div
			className="w-full h-full flex flex-col items-center justify-start"
			variants={galleryItemVariants}
			onClick={setCoverPhoto}
		>
			<Link href={`./portfolio/${project.url}`}>
				<motion.div
					className="w-full h-fit flex flex-col items-center justify-start"
					variants={containerVariants}
					initial="start"
					whileHover="hover"
				>
					<motion.div
						onMouseEnter={() => {
							setHover(true)
						}}
						onMouseLeave={() => {
							setHover(false)
						}}
						className={["w-full h-auto relative aspect-video overflow-hidden cursor-pointer"].join(" ")}
						key={photoIndex}
						variants={imageVariants}
						animate="hover"
						initial="end"
						exit="end"
					>
						<Image
							src={project.photos[photoIndex]}
							alt={project.url}
							layout="fill"
							objectFit="cover"
							objectPosition="top"
							className="generic-transition hover:scale-105"
						/>
					</motion.div>
					<div className="portfolio-gallery-item-caption">
						<h5>{project.name}</h5>
						<span className="italic">{project.address}</span>
					</div>
				</motion.div>
			</Link>
		</motion.div>
	)
}

const galleryItemVariants = {
	start: { y: 20, opacity: 0 },
	go: { y: 0, opacity: 1, transition: { duration: 0.3 } },
}

const containerVariants = {
	start: {},
	hover: {},
	end: {},
}

const imageVariants = {
	hover: {
		opacity: 1,
		transition: {
			ease: "easeInOut",
			duration: 0.25,
		},
	},
	end: {
		opacity: 0,
	},
}

export default PortfolioGalleryItem

