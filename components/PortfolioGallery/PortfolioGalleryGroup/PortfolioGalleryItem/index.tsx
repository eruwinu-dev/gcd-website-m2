import React, { memo, MouseEvent } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

import { useNextSanityImage } from "next-sanity-image"
import { motion } from "framer-motion"

import type { ProjectType } from "../../../../types/project"
import client from "../../../../lib/client"

type Props = {
	project: ProjectType
}

const PortfolioGalleryItem = ({ project }: Props) => {
	const { push } = useRouter()

	const goToProject = (event: MouseEvent<HTMLDivElement>) => {
		push(`./portfolio/${project.slug.current}`)
	}

	const imageProps = useNextSanityImage(client, project.imageList[0])

	return (
		<motion.div
			className="portfolio-gallery-item"
			variants={galleryItemVariants}
			initial="start"
			whileInView="go"
			viewport={{ once: true }}
		>
			<div className="portfolio-gallery-item-image" onClick={goToProject}>
				{imageProps ? (
					<Image
						src={imageProps.src}
						loader={imageProps.loader}
						alt={`The main image for ${project.name}, one of the projects by G. Charles Design`}
						layout="fill"
						objectFit="cover"
						objectPosition="top"
						className="hover:scale-105 generic-transition"
					/>
				) : null}
			</div>
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

