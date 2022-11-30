import React from "react"
import Image from "next/image"
import type { CollageType } from ".././../types/collage"

type Props = {}

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
							loading="eager"
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
							loading="eager"
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
			"https://res.cloudinary.com/dr8eirysm/image/upload/v1669362562/gcd-website/the-cyclist/open_room_1_izrncp.jpg",
		format: "col-span-2 row-span-2",
	},
	{
		picture:
			"https://res.cloudinary.com/dr8eirysm/image/upload/v1669364150/gcd-website/woodland-hills-home/5D_photos_2_of_13_FIXED_ez5ggm.jpg",
		format: "col-span-3 row-span-4",
	},
	{
		picture:
			"https://res.cloudinary.com/dr8eirysm/image/upload/v1669339503/gcd-website/a-montecito-classic/Window_3_a9lfa9.jpg",
		format: "col-span-2 row-span-3",
	},
	{
		picture:
			"https://res.cloudinary.com/dr8eirysm/image/upload/v1669366025/gcd-website/the-bernadus-ranch-house/Rancho_Palo_Verdes_-_Craig_House_38_of_62_ycymmv.jpg",
		format: "col-span-3",
	},
]

export default LandingCollage

