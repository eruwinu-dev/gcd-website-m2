import React from "react"
import Image from "next/image"
import type { CollageType } from ".././../types/collage"

type Props = {}

const collages: CollageType[] = [
	{
		picture: "https://i.ibb.co/fq9cFRc/open-room-1.jpg",
		format: "col-span-2 row-span-2",
	},
	{
		picture: "https://i.ibb.co/DGNpcXZ/5-D-photos-2-of-13-FIXED.jpg",
		format: "col-span-3 row-span-4",
	},
	{
		picture: "https://i.ibb.co/Zdw6BG8/Window-3.jpg",
		format: "col-span-2 row-span-3",
	},
	{
		picture: "https://i.ibb.co/xGhMcS0/Rancho-Palo-Verdes-Craig-House-38-of-62.jpg",
		format: "col-span-3",
	},
]

const LandingCollage = (props: Props) => {
	return (
		<div className="lg:px-16 md:px-8 px-4 py-16">
			<div className="w-full lg:h-auto md:h-auto h-auto lg:aspect-square md:aspect-square lg:grid md:grid hidden grid-cols-5 grid-flow-row gap-2">
				{collages.map((tile: CollageType, index: number) => (
					<div className={["relative w-full h-full aspect-video", tile.format].join(" ")} key={tile.picture}>
						<Image
							src={tile.picture}
							alt={tile.picture}
							layout="fill"
							objectFit="cover"
							objectPosition="center"
						/>
					</div>
				))}
			</div>
			<div className="w-full lg:h-screen md:h-screen h-fit lg:aspect-square md:aspect-square lg:hidden md:hidden grid grid-cols-1 grid-flow-row gap-4 lg:px-16 md:px-8 px-4 py-16">
				{collages.map((tile: CollageType, index: number) => (
					<div className={["relative w-full h-fit aspect-video"].join(" ")} key={tile.picture}>
						<Image
							src={tile.picture}
							alt={tile.picture}
							layout="fill"
							objectFit="cover"
							objectPosition="center"
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default LandingCollage

