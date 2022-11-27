import React from "react"
import Image from "next/image"

import type { CollageType } from "../../types/collage"

type Props = {}

const AboutCollage = (props: Props) => {
	return (
		<>
			<div className="w-full lg:h-auto md:h-auto h-auto lg:aspect-square md:aspect-square lg:grid md:grid hidden grid-cols-5 grid-flow-row gap-2 lg:px-16 md:px-8 px-4 py-16">
				{collages.map((tile: CollageType, index: number) => (
					<div className={["relative w-full h-full aspect-video", tile.format].join(" ")} key={tile.picture}>
						<Image
							src={tile.picture}
							alt={tile.picture}
							layout="fill"
							objectFit="cover"
							objectPosition="center"
							unoptimized
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
							unoptimized
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
			"https://res.cloudinary.com/dr8eirysm/image/upload/v1669257339/gcd-website/the-traditional-shingle/Carmar_2_nyhevn.jpg",
		format: "col-span-3 row-span-2",
	},
	{
		picture:
			"https://res.cloudinary.com/dr8eirysm/image/upload/v1669297960/gcd-website/spanish-revival/Koman_Din1_dcitro.jpg",
		format: "col-span-2 row-span-3",
	},
	{
		picture:
			"https://res.cloudinary.com/dr8eirysm/image/upload/v1669299655/gcd-website/california-classic/San_Vicente_View_4_DUSK_Opt_1_11-11-2022_mpttmb.jpg",
		format: "col-span-3 row-span-3",
	},
	{
		picture:
			"https://res.cloudinary.com/dr8eirysm/image/upload/v1669472691/gcd-website/background/rough-sketch_hkcfjf.jpg",
		format: "col-span-2 row-span-2",
	},
]

export default AboutCollage

