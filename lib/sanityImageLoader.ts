import { ImageProps } from "next/image"
import imageUrlBuilder from "@sanity/image-url"

import client from "./client"

export const sanityImageLoader = ({ src, width }: ImageProps) => {
	const builder = imageUrlBuilder(client)

	return builder
		.image(src)
		.auto("format")
		.width(width as number)
		.fit("clip")
		.url()
}

