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

export const landingCollage: CollageType[] = [
    {
        picture:
            "https://cdn.sanity.io/images/d0yhnc23/production/b00986fcffc65f43d9a4d956fa49071e69bf4dd0-6016x4010.jpg",
        format: "col-span-2 row-span-2",
    },
    {
        picture:
            "https://cdn.sanity.io/images/d0yhnc23/production/8094a7b6bfae5ab2af94148433597d7ae194c0e2-6698x4465.jpg",
        format: "col-span-3 row-span-4",
    },
    {
        picture:
            "https://cdn.sanity.io/images/d0yhnc23/production/d6681788694ebc1934407bf8402502b6cfd3df24-3072x2048.jpg",
        format: "col-span-2 row-span-3",
    },
    {
        picture:
            "https://cdn.sanity.io/images/d0yhnc23/production/6648120ab3666b52413c78f4312e7455733f1d12-3274x2183.jpg",
        format: "col-span-3",
    },
]

export default LandingCollage
