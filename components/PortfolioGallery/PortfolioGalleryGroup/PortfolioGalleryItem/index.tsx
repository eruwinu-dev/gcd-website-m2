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
			className="lg:w-10/12 md:w-10/12 mx-auto w-full h-full flex flex-col items-center justify-start"
			variants={galleryItemVariants}
			initial="start"
			whileInView="go"
			viewport={{ once: true }}
		>
			<div className="w-full h-auto aspect-video relative cursor-pointer overflow-hidden" onClick={goToProject}>
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

