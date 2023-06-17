import React from "react"
import Image from "next/image"

import type { ServiceType } from "../../types/service"

import { services } from "../../lib/services"
import { sanityImageLoader } from "../../lib/sanityImageLoader"

type Props = {
    placeholders: string[]
}

const ServicesList = ({ placeholders }: Props) => {
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
                        sizes="(max-width: 768px) 50vw,
						(max-width: 1280px) 50vw,
						50vw"
                        placeholder="blur"
                        blurDataURL={placeholders[index]}
                    />
                </div>
            ))}
        </div>
    )
}

export default ServicesList
