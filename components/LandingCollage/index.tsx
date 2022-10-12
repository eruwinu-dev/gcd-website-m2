import React from "react"

type Props = {}

const LandingCollage = (props: Props) => {
	return (
		<div className="w-full h-screen lg:aspect-square md:aspect-square grid grid-cols-3 grid-flow-row gap-4 lg:px-16 md:px-8 px-4 py-16">
			<div className="bg-[url('https://i.ibb.co/YXG0NpH/Rancho-Palo-Verdes-Craig-House-21-of-62.jpg')] bg-cover"></div>
			<div className="row-span-2 col-span-2 bg-[url('https://i.ibb.co/kgH8yhL/Front-of-House-2.jpg')] bg-cover"></div>
			<div className="row-span-2 bg-[url('https://i.ibb.co/Dtx5nzf/DSC-0002-copy.jpg')] bg-cover"></div>
			<div className="col-span-2 bg-[url('https://i.ibb.co/1n9jMB8/longden-view3-08-01-2021.jpg')] bg-cover"></div>
		</div>
	)
}

export default LandingCollage

