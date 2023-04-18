import React from "react"
import Image from "next/image"
import Link from "next/link"

import { useNextSanityImage } from "next-sanity-image"
import { motion } from "framer-motion"

import client from "../../../lib/client"
import { MemberLink } from "../../../types/member"

type Props = {
    member: MemberLink
    order: number
}

const TeamGalleryItem = ({ member, order }: Props) => {
    const imageProps = useNextSanityImage(client, member.image)

    return (
        <>
            <div
                className={order === 1 ? "lg:flex md:flex hidden" : "hidden"}
            />
            <div className="team-gallery-item">
                <Link href={`about/${member.slug}`}>
                    <motion.div
                        className="team-gallery-item-container"
                        variants={memberVariants}
                        initial="start"
                        whileInView="go"
                        viewport={{ once: true }}
                    >
                        {imageProps ? (
                            <Image
                                src={imageProps.src}
                                loader={imageProps.loader}
                                alt={member.name}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="bottom"
                                className="generic-transition hover:scale-105 cursor-pointer"
                            />
                        ) : null}
                    </motion.div>
                </Link>
                <Link href={`about/${member.slug}`}>
                    <h3>{member.name}</h3>
                </Link>
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
