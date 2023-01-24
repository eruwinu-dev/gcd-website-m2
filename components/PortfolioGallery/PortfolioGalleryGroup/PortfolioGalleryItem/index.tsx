import React, { memo } from "react"
import Image from "next/image"
import Link from "next/link"

import { useNextSanityImage } from "next-sanity-image"
import { motion } from "framer-motion"

import type { PortfolioProjectType } from "../../../../types/project"
import client from "../../../../lib/client"

type Props = {
	project: PortfolioProjectType
}

const PortfolioGalleryItem = ({ project }: Props) => {
	const imageProps = useNextSanityImage(client, project.imageList[0])

	return (
		<motion.div
			className="portfolio-gallery-item"
			variants={galleryItemVariants}
			initial="start"
			whileInView="go"
			viewport={{ once: true }}
		>
			<Link href={`./portfolio/${project.slug}`}>
				<div className="portfolio-gallery-item-image">
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
			</Link>
			<div className="portfolio-gallery-item-caption">
				<h2>{project.name}</h2>
				<h3>{project.address}</h3>
			</div>
		</motion.div>
	)
}

const galleryItemVariants = {
	start: { opacity: 0 },
	go: { opacity: 1, transition: { duration: 0.3 } },
}

export default memo(PortfolioGalleryItem)

