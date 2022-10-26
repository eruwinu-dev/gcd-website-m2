import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"

import client from "./client"

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource): ImageUrlBuilder => {
	return builder.image(source)
}

