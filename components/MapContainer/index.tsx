import React from "react"
import Image from "next/image"

import { sanityImageLoader } from "../../lib/sanityImageLoader"

type Props = {}

const MapContainer = (props: Props) => {
	return (
		<div className="lg:w-4/5 w-11/12 h-auto aspect-video lg:my-4 lg:py-4 md:py-4 py-4 flex flex-col items-center justify-start">
			<div className="w-full aspect-video relative">
				<Image
					src={mapImage}
					alt="Toscana Influence Sketch by G. Charles Design. Book a consult now!"
					loader={sanityImageLoader}
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					priority
				/>
			</div>
		</div>
	)
}

const mapImage =
	"https://cdn.sanity.io/images/1apv929p/production/2e635b3b0514be6efecb0246e99cc5597b00e75c-4267x1539.jpg"

export default MapContainer

