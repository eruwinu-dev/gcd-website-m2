import React, { useRef } from "react"
import type { MemberType } from "../../types/member"
import { useRect } from "@reach/rect"

import TeamGalleryItem from "./TeamGalleryItem"
import useStateContext from "../../context/State"

type Props = {
	members: MemberType[]
}

const TeamGallery = ({ members }: Props) => {
	const boxRef = useRef<HTMLDivElement | null>(null)
	const boxRect = useRect(boxRef)

	return (
		<>
			<section className="team-gallery-container">
				<div
					style={{
						height: boxRect ? boxRect.height : 0,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "flex-start",
					}}
				>
					<div className="meet-the-team-container">
						<h2>Meet the Team</h2>
						<p>
							We believe that developing collaborative relationships would produce the best service for
							our clients. The strength of our team gives us the capability to design in any style, scale
							or geography.
						</p>
					</div>
				</div>
				<div className="team-gallery" ref={boxRef}>
					{members.map((member: MemberType) => (
						<TeamGalleryItem member={member} key={member._id} />
					))}
				</div>
			</section>
			<section className="team-gallery-hidden-container">
				<div className="team-gallery">
					{members.map((member: MemberType) => (
						<TeamGalleryItem member={member} key={member._id} />
					))}
				</div>
				<div className="meet-the-team-hidden-container">
					<h2>Meet the Team</h2>
					<p>
						We believe that developing collaborative relationships would produce the best service for our
						clients. The strength of our team gives us the capability to design in any style, scale or
						geography.
					</p>
				</div>
			</section>
		</>
	)
}

export default TeamGallery

