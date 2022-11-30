import React from "react"
import Image from "next/image"
import Link from "next/link"

import type { MemberType } from "../../../types/member"

import { urlFor } from "../../../lib/urlFor"

type Props = {
	member: MemberType
}

const TeamGalleryItem = ({ member }: Props) => {
	return (
		<>
			<div className={member.order === 1 ? "lg:flex md:flex hidden" : "hidden"} />
			<div className="team-gallery-item">
				<Link href={`about/${member.slug.current}`} prefetch>
					<div className="relative lg:w-full md:w-full w-3/5 h-auto aspect-[1/1.4] overflow-hidden space-y-4 flex flex-col items-center">
						<Image
							src={member?.image ? urlFor(member?.image).url() : ""}
							alt={member.name}
							layout="fill"
							objectFit="cover"
							objectPosition="bottom"
							className="generic-transition hover:scale-105 cursor-pointer"
							loading="eager"
						/>
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

