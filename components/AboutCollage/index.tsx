import React from "react"
import Image from "next/image"

import type { CollageType } from "../../types/collage"
import { sanityImageLoader } from "../../lib/sanityImageLoader"

type Props = {}

const AboutCollage = (props: Props) => {
	return (
		<>
			<div className="w-full lg:h-auto md:h-auto h-auto lg:aspect-square md:aspect-square lg:grid md:grid hidden grid-cols-5 grid-flow-row gap-2 lg:px-16 md:px-8 px-4 py-16">
				{collages.map((tile: CollageType, index: number) => (
					<div className={["relative w-full h-full aspect-video", tile.format].join(" ")} key={tile.picture}>
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
			<div className="w-full lg:h-screen md:h-screen h-fit lg:aspect-square md:aspect-square lg:hidden md:hidden grid grid-cols-1 grid-flow-row gap-4 lg:px-16 md:px-8 px-4 py-16">
				{collages.map((tile: CollageType, index: number) => (
					<div className={["relative w-full h-fit aspect-video"].join(" ")} key={tile.picture}>
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
		</>
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

