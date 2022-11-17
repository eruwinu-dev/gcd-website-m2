import Image from "next/image"
import Link from "next/link"
import React from "react"
import { MemberType } from "../../../types/member"

type Props = {
	member: MemberType
}

const TeamGalleryItem = ({ member }: Props) => {
	return (
		<>
			<div className={member.url === "glen-charles-salcedo" ? "lg:flex md:flex hidden" : "hidden"}></div>
			<div className="team-gallery-item">
				<Link href={`about/${member.url}`}>
					<div className="relative lg:w-full md:w-full w-3/5 h-auto aspect-[1/1.4] overflow-hidden space-y-4 flex flex-col items-center">
						<Image
							src={member.pictures[0]}
							alt={member.name}
							layout="fill"
							objectFit="cover"
							objectPosition="bottom"
							className="generic-transition hover:scale-105 cursor-pointer"
						/>
					</div>
				</Link>
				<h5 className="mt-2 text-center">{member.name}</h5>
				<div className="text-center italic">{member.role}</div>
			</div>
			<div className={member.url === "glen-charles-salcedo" ? "lg:flex md:flex hidden" : "hidden"}></div>
		</>
	)
}

export default TeamGalleryItem

