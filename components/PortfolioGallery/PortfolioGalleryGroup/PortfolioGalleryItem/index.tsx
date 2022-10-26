import React, { MouseEvent, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ProjectType } from "../../../../types/state"
import { motion } from "framer-motion"
import { wrap } from "popmotion"
import useStateContext from "../../../../context/State"

type Props = {
	project: ProjectType
}

const galleryItemVariants = {
	start: { y: 20, opacity: 0 },
	go: { y: 0, opacity: 1, transition: { duration: 0.2 } },
	end: { y: -20, opacity: 0 },
}

const imageVariants = {
	show: {
		opacity: 1,
		transition: {
			ease: "easeInOut",
			duration: 0.25,
		},
	},
	hide: {
		opacity: 0,
	},
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
			<motion.div className="portfolio-gallery-item" variants={galleryItemVariants} onClick={setCoverPhoto}>
				<div className="portfolio-gallery-item-caption">
					<h6>{project.name}</h6>
					<span className="italic">{project.address}</span>
				</div>
				<motion.div
					onMouseEnter={() => {
						setHover(true)
					}}
					onMouseLeave={() => {
						setHover(false)
					}}
					className={[
						"w-full h-auto relative aspect-square overflow-hidden generic-transition hover:scale-105",
					].join(" ")}
					key={photoIndex}
					variants={imageVariants}
					animate={"show"}
					initial="hide"
				>
					<Image src={project.photos[photoIndex]} alt={project.url} layout="fill" />
				</motion.div>
			</motion.div>
		</Link>
	)
}

export default PortfolioGalleryItem

