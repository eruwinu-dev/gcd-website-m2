import React from "react"
import Image from "next/image"

import { useNextSanityImage } from "next-sanity-image"

import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

import client from "../../../lib/client"

type Props = {
	title: string
	image: SanityImageSource
}

const ProjectCarouselItem = ({ title, image }: Props) => {
	const imageProps = useNextSanityImage(client, image)

	return (
		<div className={["w-full h-auto lg:aspect-video aspect-square relative select-none"].join(" ")}>
			{imageProps ? (
				<Image
					src={imageProps.src}
					loader={imageProps.loader}
					alt={`A picture from the photo gallery of ${title}, a project of G. Charles Design`}
					layout="fill"
					objectFit="contain"
					objectPosition="center"
					priority
					sizes="96vw, 760px 420px 300px"
				/>
			) : null}
		</div>
	)
}

export default ProjectCarouselItem

