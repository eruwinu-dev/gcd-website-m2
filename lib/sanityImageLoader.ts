import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { ImageUrlBuilder, useNextSanityImage } from "next-sanity-image"
import { ImageProps } from "next/image"
import imageUrlBuilder from "@sanity/image-url"

import client from "./client"

export const getSanityImageProps = (image: SanityImageSource) => useNextSanityImage(client, image)

export const sanityImageLoader = ({ src, width }: ImageProps) => {
	const builder = imageUrlBuilder(client)

	return builder
		.image(src)
		.auto("format")
		.width(width as number)
		.fit("clip")
		.url()
}

