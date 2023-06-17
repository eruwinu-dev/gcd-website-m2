import React, { memo } from "react"
import Image from "next/image"
import Link from "next/link"

import { useNextSanityImage } from "next-sanity-image"

import type { ProjectLink } from "../../../../types/project"
import sanityClient from "../../../../lib/sanityClient"

type Props = {
    project: ProjectLink
}

const PortfolioGalleryItem = ({ project }: Props) => {
    const imageProps = useNextSanityImage(sanityClient, project.mainImage)

    return (
        <div className="portfolio-gallery-item">
            <Link href={`./portfolio/${project.slug}`}>
                <div className="portfolio-gallery-item-image">
                    {imageProps ? (
                        <Image
                            src={imageProps.src}
                            loader={imageProps.loader}
                            alt={`The main image for ${project.name}, one of the projects by G. Charles Design`}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                            className="hover:scale-105 generic-transition"
                            sizes="(max-width: 768px) 50vw,
                            (max-width: 1280px) 50vw,
                            50vw"
                            placeholder="blur"
                            blurDataURL={project.mainImage.asset.metadata.lqip}
                        />
                    ) : null}
                </div>
            </Link>
            <div className="portfolio-gallery-item-caption">
                <h2>{project.name}</h2>
                <h3>{project.address}</h3>
            </div>
        </div>
    )
}

export default memo(PortfolioGalleryItem)
