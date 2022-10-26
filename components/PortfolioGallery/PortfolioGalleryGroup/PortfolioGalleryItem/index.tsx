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
	const { setPage, setStoryOpen } = useStateContext()
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
		setPage([0, 1])
		setStoryOpen(false)
	}

	return (
		<Link href={`./portfolio/${project.url}`}>
			<motion.div
				className="w-full h-full flex flex-col items-center justify-start"
				variants={galleryItemVariants}
				whileHover="hover"
				onClick={setCoverPhoto}
			>
				<motion.div
					onMouseEnter={() => {
						setHover(true)
					}}
					onMouseLeave={() => {
						setHover(false)
					}}
					className={["w-full h-auto relative aspect-square overflow-hidden cursor-pointer"].join(" ")}
					key={photoIndex}
					variants={imageVariants}
					animate="hover"
					initial="end"
				>
					<Image
						src={project.photos[photoIndex]}
						alt={project.url}
						layout="fill"
						className="generic-transition hover:scale-105"
					/>
				</motion.div>
				<motion.div className="portfolio-gallery-item-caption" variants={textVariants}>
					<h5>{project.name}</h5>
					<span className="italic">{project.address}</span>
				</motion.div>
			</motion.div>
		</Link>
	)
}

const galleryItemVariants = {
	start: { y: 20, opacity: 0 },
	go: { y: 0, opacity: 1, transition: { duration: 0.2 } },
	end: { y: -20, opacity: 0 },
	hover: {},
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

const textVariants = {
	hover: {
		y: -20,
		transition: {
			ease: "easeInOut",
			duration: 0.25,
		},
	},
	end: {
		y: 0,
		opacity: 0,
	},
}

export default PortfolioGalleryItem

