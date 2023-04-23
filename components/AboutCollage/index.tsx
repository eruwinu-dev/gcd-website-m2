import React from "react"
import Image from "next/image"

import { sanityImageLoader } from "../../lib/sanityImageLoader"
import { getMediaSize } from "../../lib/media"
import { aboutCollage } from "../../utils/collages"

type Props = {
    width: number
    placeholders: string[]
}

const AboutCollage = ({ width, placeholders }: Props) => {
    let breakpoint = getMediaSize(width)
    return (
        <div className="about-collage">
            {aboutCollage.map((tile, index) => (
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
                        sizes="(max-width: 768px) 100vw,
						(max-width: 1280px) 50vw,
						33vw"
                        placeholder="blur"
                        blurDataURL={placeholders[index]}
                    />
                </div>
            ))}
        </div>
    )
}

export default AboutCollage
