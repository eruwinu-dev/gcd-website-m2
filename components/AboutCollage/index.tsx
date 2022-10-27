import Image from "next/image"
import React from "react"
import { CollageType } from "../../types/collage"

type Props = {}

const collages: CollageType[] = [
	{
		picture: "https://i.ibb.co/cvBb71n/Koman-Rear.jpg",
		format: "col-span-3 row-span-2",
	},
	{
		picture: "https://i.ibb.co/t29d6jr/glen-044.jpg",
		format: "col-span-2 row-span-3",
	},
	{
		picture: "https://i.ibb.co/gt112NW/Rancho-Palo-Verdes-Drone-Shots-1-of-5.jpg",
		format: "col-span-3 row-span-3",
	},
	{
		picture: "https://i.ibb.co/2kCRXP3/rough-sketch.jpg",
		format: "col-span-2 row-span-2",
	},
]

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
		</>
	)
}

export default AboutCollage

