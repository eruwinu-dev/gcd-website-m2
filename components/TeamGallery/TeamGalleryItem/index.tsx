import React from "react"
import Image from "next/image"
import Link from "next/link"

import { useNextSanityImage } from "next-sanity-image"

import { MemberLink } from "../../../types/member"
import sanityClient from "../../../lib/sanityClient"

type Props = {
    member: MemberLink
    order: number
}

const TeamGalleryItem = ({ member, order }: Props) => {
    const imageProps = useNextSanityImage(sanityClient, member.image)

    return (
        <>
            <div
                className={order === 1 ? "lg:flex md:flex hidden" : "hidden"}
            />
            <div className="team-gallery-item">
                <Link href={`about/${member.slug}`}>
                    <div className="team-gallery-item-container">
                        {imageProps ? (
                            <Image
                                src={imageProps.src}
                                loader={imageProps.loader}
                                alt={member.name}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="top"
                                className="generic-transition hover:scale-105 cursor-pointer"
                                placeholder="blur"
                                blurDataURL={member.image.asset.metadata.lqip}
                            />
                        ) : null}
                    </div>
                </Link>
                <Link href={`about/${member.slug}`}>
                    <h3>{member.name}</h3>
                </Link>
                <div>
                    <span className="text-base font-semibold">
                        {member.licenses ? member.licenses.join(", ") : ""}
                    </span>
                </div>
                <div>
                    <span className="text-base text-center italic">
                        {member.role}
                    </span>
                </div>
            </div>
            <div
                className={order === 1 ? "lg:flex md:flex hidden" : "hidden"}
            />
        </>
    )
}

const memberVariants = {
    start: { opacity: 0 },
    go: { opacity: 1, transition: { duration: 0.3 } },
}

export default TeamGalleryItem
