import React from "react"
import { team } from "../../lib/team"
import { MemberType } from "../../types"
import TeamGalleryItem from "./TeamGalleryItem"

type Props = {}

const TeamGallery = (props: Props) => {
	return (
		<>
			<h1>The Team</h1>
			<div className="team-gallery">
				{team.map((member: MemberType) => (
					<TeamGalleryItem member={member} />
				))}
			</div>
		</>
	)
}

export default TeamGallery

