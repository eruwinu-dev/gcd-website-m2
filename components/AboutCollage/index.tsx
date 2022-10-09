import React from "react"

type Props = {}

const AboutCollage = (props: Props) => {
	return (
		<div className="w-full px-8 py-16">
			<div className="w-full h-full grid grid-cols-3 grid-flow-row gap-4 px-4 py-8">
				<div className="col-span-2 bg-[url('https://i.ibb.co/cvBb71n/Koman-Rear.jpg')] bg-cover"></div>
				<div className="row-span-2 bg-[url('https://i.ibb.co/t29d6jr/glen-044.jpg')] bg-cover"></div>
				<div className="col-span-2 row-span-2 bg-[url('https://i.ibb.co/gt112NW/Rancho-Palo-Verdes-Drone-Shots-1-of-5.jpg')] bg-cover"></div>
				<div className="bg-[url('https://i.ibb.co/2kCRXP3/rough-sketch.jpg')] bg-cover"></div>
			</div>
		</div>
	)
}

export default AboutCollage

