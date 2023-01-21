import React from "react"
import Image from "next/image"

import type { CollageType } from "../../types/collage"
import { sanityImageLoader } from "../../lib/sanityImageLoader"
import { getMediaSize } from "../../lib/media"

type Props = {
	width: number
}

const AboutCollage = ({ width }: Props) => {
	let breakpoint = getMediaSize(width)
	return (
		<div className="about-collage">
			{collages.map((tile: CollageType, index: number) => (
				<div
					className={[
						"relative w-full aspect-video",
						tile.format,
						breakpoint !== "sm" ? " h-full" : "h-fit",
					].join(" ")}
					key={tile.picture}
				>
					<Image
						src={tile.picture}
						loader={sanityImageLoader}
						alt={`A picture used in the collage from G. Charles Design`}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						priority
					/>
				</div>
			))}
		</div>
	)
}

const collages: CollageType[] = [
	{
		picture:
			"https://cdn.sanity.io/images/1apv929p/production/b97527c9df5a062889c1bc7b42d05beebe9268e0-1140x760.jpg",
		format: "col-span-3 row-span-2",
	},
	{
		picture:
			"https://cdn.sanity.io/images/1apv929p/production/ff45754abef80dc2a55fb7a4a490bbfd7d35eff3-2000x3008.jpg",
		format: "col-span-2 row-span-3",
	},
	{
		picture:
			"https://cdn.sanity.io/images/1apv929p/production/421143931a7386de1b78a91e821f79284de9e938-2000x1125.jpg",
		format: "col-span-3 row-span-3",
	},
	{
		picture:
			"https://cdn.sanity.io/images/1apv929p/production/43b86fb40e55d86a39923374a68606573dc8cf6e-2678x1899.jpg",
		format: "col-span-2 row-span-2",
	},
]

export default AboutCollage

