import React from "react"
import Image from "next/image"

import type { CollageType } from "../../types/collage"
import { sanityImageLoader } from "../../lib/sanityImageLoader"
import { getMediaSize } from "../../lib/media"

type Props = {
    width: number
}

const AboutCollage = ({ width }: Props) => {
    let breakpoint = getMediaSize(width)
    return (
        <div className="about-collage">
            {collages.map((tile: CollageType, index: number) => (
                <div
                    className={[
                        "relative w-full aspect-video",
                        tile.format,
                        breakpoint !== "sm" ? " h-full" : "h-fit",
                    ].join(" ")}
                    key={tile.picture}
                >
                    <Image
                        src={tile.picture}
                        loader={sanityImageLoader}
                        alt={`A picture used in the collage from G. Charles Design`}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        priority
                    />
                </div>
            ))}
        </div>
    )
}

const collages: CollageType[] = [
    {
        picture:
            "https://cdn.sanity.io/images/d0yhnc23/production/a0f5de31cb92fb58fb4e808aef2bcdaf87b4cfb3-1140x760.jpg",
        format: "col-span-3 row-span-2",
    },
    {
        picture:
            "https://cdn.sanity.io/images/d0yhnc23/production/37871578d92f2ab0b65ad81881279f62e045a666-2000x3008.jpg",
        format: "col-span-2 row-span-3",
    },
    {
        picture:
            "https://cdn.sanity.io/images/d0yhnc23/production/421143931a7386de1b78a91e821f79284de9e938-2000x1125.jpg",
        format: "col-span-3 row-span-3",
    },
    {
        picture:
            "https://cdn.sanity.io/images/d0yhnc23/production/7c61367581882ea7af0c9daaa2f7d3d19288fceb-2678x1899.jpg",
        format: "col-span-2 row-span-2",
    },
]

export default AboutCollage
