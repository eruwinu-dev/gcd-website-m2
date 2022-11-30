import React, { memo, MouseEvent, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

import { motion } from "framer-motion"
import { wrap } from "popmotion"
import { Carousel } from "react-responsive-carousel"

import type { ProjectType } from "../../../../types/project"

import useStateContext from "../../../../context/State"

import "react-responsive-carousel/lib/styles/carousel.min.css"

/* eslint-disable react/display-name */

type Props = {
	project: ProjectType
}

const PortfolioGalleryItem = ({ project }: Props) => {
	const [photo, setPhoto] = useState<number>(0)
	const [hover, setHover] = useState<boolean>(false)
	const { push } = useRouter()

	const photoList: string[] = useMemo(
		() =>
			project.images
				? project.images.split("\n").splice(0, Math.ceil(project.images.split("\n").length / 4))
				: [],
		[project]
	)

	const goToProject = (event: MouseEvent<HTMLDivElement>) => {
		push(`./portfolio/${project.slug.current}`)
	}

	const photoIndex = wrap(0, 4, photo)

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (photoList.length === 1) return
			setPhoto((photo) => (hover ? photo + 1 : 0))
		}, 1500)

		return () => {
			clearInterval(intervalId)
			setPhoto(0)
		}
	}, [hover])

	return (
		<motion.div
			className="w-full h-full flex flex-col items-center justify-start"
			variants={galleryItemVariants}
			initial="start"
			whileInView="go"
			viewport={{ once: true }}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onClick={goToProject}
		>
			<Carousel
				showThumbs={false}
				showIndicators={false}
				showArrows={false}
				showStatus={false}
				transitionTime={500}
				infiniteLoop
				animationHandler="fade"
				className="w-full h-full mt-4 mx-auto cursor-pointer"
				selectedItem={photoIndex}
			>
				{photoList.map((image: string, index) => (
					<div className="w-full h-auto aspect-video relative" key={image}>
						<Image
							src={image}
							alt={image}
							layout="fill"
							objectFit="cover"
							objectPosition="top"
							loading={index !== 0 ? "lazy" : "eager"}
							priority={Boolean(index === 0)}
						/>
					</div>
				))}
			</Carousel>
			<div className="portfolio-gallery-item-caption">
				<h5>{project.name}</h5>
				<span className="italic">{project.address}</span>
			</div>
		</motion.div>
	)
}

const galleryItemVariants = {
	start: { opacity: 0 },
	go: { opacity: 1, transition: { duration: 0.3 } },
}

export default memo(PortfolioGalleryItem)

