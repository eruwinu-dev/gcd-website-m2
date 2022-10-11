import React, { useRef } from "react"
import { team } from "../../lib/team"
import type { MemberType } from "../../types"
import { useRect } from "@reach/rect"

import TeamGalleryItem from "./TeamGalleryItem"

type Props = {}

const TeamGallery = (props: Props) => {
	const boxRef = useRef<HTMLDivElement | null>(null)
	const boxRect = useRect(boxRef)

	return (
		<>
			<div className="team-gallery" ref={boxRef}>
				{team.map((member: MemberType, index: number) => (
					<TeamGalleryItem member={member} key={index} />
				))}
			</div>
			<div
				style={{
					height: boxRect ? boxRect.height : 0,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "flex-start",
				}}
				className="px-8"
			>
				<div className="flex flex-col items-center justify-center w-full h-auto aspect-square sticky border-2 border-gray-400 mb-8 top-24 space-y-8">
					<h3>Meet the Team</h3>
					<p className="w-3/4 text-left leading-loose">
						We believe that developing collaborative relationships would produce the best service for our
						clients. The strength of our team gives us the capability to design in any style, scale or
						geography.
					</p>
				</div>
			</div>
		</>
	)
}

export default TeamGallery

