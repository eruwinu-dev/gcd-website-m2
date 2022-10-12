import Image from "next/image"
import Link from "next/link"
import React from "react"
import { MemberType } from "../../../types"

type Props = {
	member: MemberType
}

const TeamGalleryItem = ({ member }: Props) => {
	return (
		<Link href={`about/${member.url}`}>
			<div className="flex flex-col items-center justify-start w-full h-full aspect-square">
				<div className="relative lg:w-full md:w-full w-3/5 h-auto aspect-[1/1.4] overflow-hidden space-y-4 flex flex-col items-center">
					<Image
						src={member.pictures[0]}
						alt={member.name}
						layout="fill"
						className="generic-transition hover:scale-105 cursor-pointer"
					/>
				</div>
				<h5 className="mt-2 text-center">{member.name}</h5>
				<div className="text-center italic">{member.role}</div>
			</div>
		</Link>
	)
}

export default TeamGalleryItem

