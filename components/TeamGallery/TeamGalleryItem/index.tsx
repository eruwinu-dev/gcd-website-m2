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
			<div className="flex flex-col items-center justify-center w-full">
				<div className="relative w-full h-auto aspect-[1/1.4] overflow-hidden space-y-4">
					<Image
						src={member.pictures[0]}
						alt={member.name}
						layout="fill"
						className="generic-transition hover:scale-105 cursor-pointer"
					/>
				</div>
				<h5 className="mt-2">{member.name}</h5>
				<div className="italic">{member.role}</div>
			</div>
		</Link>
	)
}

export default TeamGalleryItem

