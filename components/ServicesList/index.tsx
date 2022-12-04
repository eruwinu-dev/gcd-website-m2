import React, { useEffect, useState } from "react"
import Image from "next/image"

import { motion, useAnimation } from "framer-motion"

import type { ServiceType } from "../../types/service"

import { services } from "../../lib/services"
import { sanityImageLoader } from "../../lib/sanityImageLoader"

type Props = {}

const ServicesList = (props: Props) => {
	const controls = useAnimation()
	const [load, setLoad] = useState<boolean>(false)

	useEffect(() => {
		if (load) {
			controls.start("visible")
		}
		return () => {}
	}, [load, controls])

	return (
		<div
			className={[
				"w-full h-fit grid grid-cols-1 grid-flow-row gap-12 lg:px-8 md:px-8 px-4 lg:py-16 md:py-8",
			].join(" ")}
		>
			{services.map((service: ServiceType, index: number) => (
				<motion.div
					className="h-full flex flex-col items-center justify-start"
					key={index}
					variants={itemVariants}
					initial="hidden"
					whileInView="visible"
					animate={controls}
					viewport={{
						once: true,
					}}
				>
					<div
						className={[
							"relative lg:w-11/12 w-full h-auto aspect-video overflow-hidden",
							!load ? "animate-pulse bg-gray-300" : "",
						].join(" ")}
					>
						<Image
							src={service.photo}
							loader={sanityImageLoader}
							layout="fill"
							objectFit="cover"
							objectPosition="top"
							className="generic-transition hover:scale-105 cursor-pointer"
							onLoadingComplete={() => setLoad(true)}
						/>
					</div>
				</motion.div>
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

