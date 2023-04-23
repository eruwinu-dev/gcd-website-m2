import React, { useRef } from "react"
import { useRect } from "@reach/rect"

import ServicesList from "../ServicesList"
import { getMediaSize } from "../../lib/media"
import ServicesText from "./ServicesText"

type Props = {
    width: number
    placeholders: string[]
}

const ServicesSection = ({ width, placeholders }: Props) => {
    const sliderRef = useRef<HTMLDivElement | null>(null)
    const sliderRect = useRect(sliderRef)

    let breakpoint = getMediaSize(width)

    return (
        <section className="services-section">
            {breakpoint !== "sm" ? (
                <>
                    <div className="services-list-container" ref={sliderRef}>
                        <ServicesList placeholders={placeholders} />
                    </div>
                    <div
                        className="services-slider"
                        style={{ height: sliderRect ? sliderRect.height : 0 }}
                    >
                        <ServicesText />
                    </div>
                </>
            ) : (
                <ServicesText />
            )}
        </section>
    )
}

export default ServicesSection
