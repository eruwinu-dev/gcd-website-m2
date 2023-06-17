import React from "react"
import Image from "next/image"
import { sanityImageLoader } from "../../lib/sanityImageLoader"
import { getMediaSize } from "../../lib/media"
import { CollageType } from "../../types/collage"

type Props = {
    width: number
    placeholders: string[]
}

const LandingCollage = ({ width, placeholders }: Props) => {
    let breakpoint = getMediaSize(width)
    return (
        <div
            className={[
                "landing-collage",
                breakpoint !== "sm" ? "grid-cols-5" : "grid-cols-1",
            ].join(" ")}
        >
            {landingCollage.map((tile, index) => (
                <div
                    className={[
                        "relative w-full aspect-video",
                        tile.format,
                        breakpoint !== "sm" ? "h-full" : "h-fit",
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
                        placeholder="blur"
                        blurDataURL={placeholders[index]}
                    />
                </div>
            ))}
        </div>
    )
}

export const landingCollage: CollageType[] = [
    {
        picture:
            "https://cdn.sanity.io/images/d0yhnc23/production/6e6ae70600a61d8ebfea27494bba331ccf524717-330x330.jpg",
        format: "col-span-2 row-span-2",
    },
    {
        picture:
            "https://cdn.sanity.io/images/d0yhnc23/production/7f25236921026692e1bb7f2a20ac5c50dfeaf184-550x495.jpg",
        format: "col-span-3 row-span-4",
    },
    {
        picture:
            "https://cdn.sanity.io/images/d0yhnc23/production/26a6247fd09aaa9bf9a3a1416c37aefd73c0f0cb-350x525.jpg",
        format: "col-span-2 row-span-3",
    },
    {
        picture:
            "https://cdn.sanity.io/images/d0yhnc23/production/e537686a98d9fadfc2b9470a43a06ad2f7135bd8-500x333.jpg",
        format: "col-span-3",
    },
]

export default LandingCollage
