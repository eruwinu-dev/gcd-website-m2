import Image from "next/image"
import React from "react"

type Props = {}

const MapContainer = (props: Props) => {
	return (
		<>
			<div className="w-4/5 h-auto relative aspect-square lg:my-8 lg:px-8 px-4 lg:py-16 md:py-8 py-4">
				<Image
					src="https://i.ibb.co/HrqHsRJ/gcd-map-no-offset.png"
					alt="Glen Charles Design Map"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					priority
				/>
			</div>
		</>
	)
}

export default MapContainer

