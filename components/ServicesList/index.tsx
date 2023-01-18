import React from "react"
import Image from "next/image"

import type { ServiceType } from "../../types/service"

import { services } from "../../lib/services"
import { sanityImageLoader } from "../../lib/sanityImageLoader"

type Props = {}

const ServicesList = (props: Props) => {
	return (
		<div
			className={[
				"w-full h-fit grid grid-cols-1 grid-flow-row gap-12 lg:px-8 md:px-8 px-4 lg:py-16 md:py-8",
			].join(" ")}
		>
			{services.map((service: ServiceType, index: number) => (
				<div
					key={service.title}
					className={["relative lg:w-11/12 w-full h-auto aspect-video overflow-hidden"].join(" ")}
				>
					<Image
						src={service.photo}
						loader={sanityImageLoader}
						layout="fill"
						objectFit="cover"
						objectPosition="top"
						className="generic-transition hover:scale-105 cursor-pointer"
						alt={`${service.title} - ${service.description} - G. Charles Design`}
					/>
				</div>
			))}
		</div>
	)
}

const itemVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
}

export default ServicesList

