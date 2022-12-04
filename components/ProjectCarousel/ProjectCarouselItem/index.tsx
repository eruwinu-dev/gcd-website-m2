import React from "react"
import Image from "next/image"

import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { getSanityImageProps } from "../../../lib/sanityImageLoader"

type Props = {
	image: SanityImageSource
}

const ProjectCarouselItem = ({ image }: Props) => {
	const imageProps = getSanityImageProps(image)

	return (
		<div className={["w-full h-auto lg:aspect-video aspect-square relative select-none"].join(" ")}>
			<Image
				src={imageProps.src}
				loader={imageProps.loader}
				layout="fill"
				objectFit="contain"
				objectPosition="center"
				priority
				sizes="96vw, 760px 420px 300px"
			/>
		</div>
	)
}

export default ProjectCarouselItem

