import React from "react"
import Image from "next/image"
import { services } from "../../lib/services"
import { ServiceType } from "../../types/service"

type Props = {}

const ServicesList = (props: Props) => {
	return (
		<div
			className={["w-full h-fit grid grid-cols-1 grid-flow-row gap-8 lg:px-8 md:px-8 px-4 lg:py-16 md:py-8"].join(
				" "
			)}
		>
			{services.map((service: ServiceType, index: number) => (
				<div className="h-full flex flex-col items-center justify-start space-y-4" key={index}>
					<div className="relative lg:w-11/12 w-full h-auto aspect-video overflow-hidden">
						<Image
							src={service.photo}
							alt={service.title}
							layout="fill"
							objectFit="cover"
							className="generic-transition hover:scale-105 cursor-pointer"
						/>
						<h4 className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4 text-lg">
							{service.title}
						</h4>
					</div>
				</div>
			))}
		</div>
	)
}

export default ServicesList

