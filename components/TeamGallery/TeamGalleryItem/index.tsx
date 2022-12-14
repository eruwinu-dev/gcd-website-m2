import React from "react"
import Image from "next/image"
import Link from "next/link"

import type { MemberType } from "../../../types/member"
import { useNextSanityImage } from "next-sanity-image"
import client from "../../../lib/client"

type Props = {
	member: MemberType
}

const TeamGalleryItem = ({ member }: Props) => {
	const imageProps = useNextSanityImage(client, member.image)

	return (
		<>
			<div className={member.order === 1 ? "lg:flex md:flex hidden" : "hidden"} />
			<div className="team-gallery-item">
				<Link href={`about/${member.slug.current}`}>
					<div className="relative lg:w-full md:w-full w-3/5 h-auto aspect-[1/1.4] overflow-hidden space-y-4 flex flex-col items-center">
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
					</div>
				</Link>
				<h5 className="mt-2 text-center">{member.name}</h5>
				<div className="text-center italic">{member.role}</div>
			</div>
			<div className={member.order === 1 ? "lg:flex md:flex hidden" : "hidden"} />
		</>
	)
}

export default TeamGalleryItem

