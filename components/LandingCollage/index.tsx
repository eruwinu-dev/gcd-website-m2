import React from "react"
import Image from "next/image"
import type { CollageType } from ".././../types/collage"
import { sanityImageLoader } from "../../lib/sanityImageLoader"

type Props = {}

const LandingCollage = (props: Props) => {
	return (
		<div className="landing-collage">
			<div className="landing-collage-container">
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
			<div className="landing-collage-hidden-container">
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
		</div>
	)
}

const collages: CollageType[] = [
	{
		picture:
			"https://cdn.sanity.io/images/1apv929p/production/b00986fcffc65f43d9a4d956fa49071e69bf4dd0-6016x4010.jpg",
		format: "col-span-2 row-span-2",
	},
	{
		picture:
			"https://cdn.sanity.io/images/1apv929p/production/8094a7b6bfae5ab2af94148433597d7ae194c0e2-6698x4465.jpg",
		format: "col-span-3 row-span-4",
	},
	{
		picture:
			"https://cdn.sanity.io/images/1apv929p/production/d6681788694ebc1934407bf8402502b6cfd3df24-3072x2048.jpg",
		format: "col-span-2 row-span-3",
	},
	{
		picture:
			"https://cdn.sanity.io/images/1apv929p/production/6648120ab3666b52413c78f4312e7455733f1d12-3274x2183.jpg",
		format: "col-span-3",
	},
]

export default LandingCollage

