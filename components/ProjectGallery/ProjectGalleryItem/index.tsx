import React, { MouseEvent, memo } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

import { useNextSanityImage } from "next-sanity-image"
import { SanityImageWithMetaData } from "../../../types/image"
import sanityClient from "../../../lib/sanityClient"

type Props = {
    title: string
    image: SanityImageWithMetaData
    index: number
}

const ProjectGalleryItem = ({ title, image, index }: Props) => {
    const { asPath, push } = useRouter()

    const imageProps = useNextSanityImage(sanityClient, image)

    const viewGalleryItem = (index: number) => async (event: MouseEvent) => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        push(
            {
                pathname: asPath.split("?")[0],
                query: { mode: "carousel", photo: index },
            },
            undefined,
            { shallow: true }
        )
    }

    return (
        <div className="project-gallery-item" onClick={viewGalleryItem(index)}>
            <div className="project-gallery-item-image">
                {imageProps ? (
                    <Image
                        src={imageProps.src}
                        loader={imageProps.loader}
                        alt={`A photo from ${title}, a project of G. Charles Design`}
                        layout="fill"
                        quality={50}
                        objectFit="cover"
                        objectPosition="center"
                        sizes="(max-width: 800px) 100vw, 800px"
                        placeholder="blur"
                        blurDataURL={image.asset.metadata.lqip}
                    />
                ) : null}
            </div>
        </div>
    )
}

export default memo(ProjectGalleryItem)
