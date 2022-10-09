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
			<div className="team-gallery-item">
				<div className="team-image-container">
					<Image src={member.pictures[0]} alt={member.name} layout="fill" />
				</div>
				<div className="team-text">
					<h5>{member.name}</h5>
					<div className="italic">{member.role}</div>
				</div>
			</div>
		</Link>
	)
}

export default TeamGalleryItem

