import React, { MouseEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

import { motion, useAnimation } from "framer-motion"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { useNextSanityImage } from "next-sanity-image"
import client from "../../../lib/client"

type Props = {
	title: string
	photo: SanityImageSource
	index: number
}

const ProjectGalleryItem = ({ title, photo, index }: Props) => {
	const router = useRouter()
	const { asPath } = router
	const controls = useAnimation()
	const [load, setLoad] = useState<boolean>(false)

	const imageProps = useNextSanityImage(client, photo)

	useEffect(() => {
		if (load) {
			controls.start("visible")
		}
		return () => {}
	}, [load, controls])

	useEffect(() => {
		setLoad(false)
	}, [asPath])

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
				className="project-gallery-item-image"
				variants={itemVariants}
				initial="hidden"
				animate={controls}
			>
				{imageProps ? (
					<Image
						src={imageProps.src}
						loader={imageProps.loader}
						alt={`A photo from ${title}, a project of G. Charles Design`}
						layout="fill"
						quality={80}
						objectFit="cover"
						objectPosition="center"
						onLoadingComplete={() => setLoad(true)}
					/>
				) : null}
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

