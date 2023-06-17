import React from "react"
import Image from "next/image"

import { useNextSanityImage } from "next-sanity-image"

import { SanityImageWithMetaData } from "../../../types/image"
import sanityClient from "../../../lib/sanityClient"

type Props = {
    title: string
    image: SanityImageWithMetaData
}

const ProjectCarouselItem = ({ title, image }: Props) => {
    const imageProps = useNextSanityImage(sanityClient, image)

    return (
        <div
            className={[
                "w-full h-auto lg:aspect-video aspect-square relative select-none",
            ].join(" ")}
        >
            {imageProps ? (
                <Image
                    src={imageProps.src}
                    loader={imageProps.loader}
                    alt={`A picture from the photo gallery of ${title}, a project of G. Charles Design`}
                    layout="fill"
                    objectFit="contain"
                    loading="eager"
                    priority
                    objectPosition="center"
                    placeholder="blur"
                    blurDataURL={image.asset.metadata.lqip}
                    quality={90}
                />
            ) : null}
        </div>
    )
}

export default ProjectCarouselItem
