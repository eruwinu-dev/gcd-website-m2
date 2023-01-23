import React from "react"
import Image from "next/image"

import { motion } from "framer-motion"

import type { ServiceType } from "../../types/service"

import { services } from "../../lib/services"
import { sanityImageLoader } from "../../lib/sanityImageLoader"

type Props = {}

const ServicesList = (props: Props) => {
	return (
		<div className="services-list">
			{services.map((service: ServiceType, index: number) => (
				<motion.div
					key={service.title}
					variants={serviceVariants}
					initial="start"
					whileInView="go"
					viewport={{ once: true }}
				>
					<Image
						src={service.photo}
						loader={sanityImageLoader}
						layout="fill"
						objectFit="cover"
						objectPosition="top"
						alt={`${service.title} - ${service.description} - G. Charles Design`}
						sizes="(max-width: 768px) 100vw,
						(max-width: 1280px) 50vw,
						33vw"
					/>
				</motion.div>
			))}
		</div>
	)
}

const serviceVariants = {
	start: { opacity: 0 },
	go: { opacity: 1, transition: { duration: 0.3 } },
}

export default ServicesList

