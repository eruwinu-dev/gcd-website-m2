import Image from "next/image"
import React from "react"

type Props = {}

const MapContainer = (props: Props) => {
	return (
		<>
			<div className="w-4/5 h-auto relative aspect-square my-8 px-8 py-16">
				<Image
					src="https://i.ibb.co/HrqHsRJ/gcd-map-no-offset.png"
					alt="Glen Charles Design Map"
					layout="fill"
				/>
			</div>
		</>
	)
}

export default MapContainer

