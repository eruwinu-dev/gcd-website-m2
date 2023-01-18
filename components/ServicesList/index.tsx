import React from "react"
import Image from "next/image"

import type { ServiceType } from "../../types/service"

import { services } from "../../lib/services"
import { sanityImageLoader } from "../../lib/sanityImageLoader"

type Props = {}

const ServicesList = (props: Props) => {
	return (
		<div className="services-list">
			{services.map((service: ServiceType, index: number) => (
				<div key={service.title}>
					<Image
						src={service.photo}
						loader={sanityImageLoader}
						layout="fill"
						objectFit="cover"
						objectPosition="top"
						alt={`${service.title} - ${service.description} - G. Charles Design`}
					/>
				</div>
			))}
		</div>
	)
}

export default ServicesList

