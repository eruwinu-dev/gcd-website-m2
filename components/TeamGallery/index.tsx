import React, { useRef } from "react"
import type { MemberType } from "../../types/member"
import { useRect } from "@reach/rect"

import TeamGalleryItem from "./TeamGalleryItem"
import useStateContext from "../../context/State"

type Props = {}

const TeamGallery = ({}: Props) => {
	const { members } = useStateContext()

	const boxRef = useRef<HTMLDivElement | null>(null)
	const boxRect = useRect(boxRef)

	return (
		<>
			<section className="h-fit lg:py-16 md:py-8 py-4 lg:flex md:flex hidden flex-row items-center justify-center">
				<div className="team-gallery" ref={boxRef}>
					{members.map((member: MemberType) => (
						<TeamGalleryItem member={member} key={member._id} />
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
				>
					<div className="flex flex-col items-center justify-center w-full h-auto aspect-square sticky mb-8 top-24 space-y-8">
						<h3>Meet the Team</h3>
						<p className="w-3/4 text-left leading-loose">
							We believe that developing collaborative relationships would produce the best service for
							our clients. The strength of our team gives us the capability to design in any style, scale
							or geography.
						</p>
					</div>
				</div>
			</section>
			<section className="h-fit lg:py-16 md:py-8 py-4 lg:hidden md:hidden flex flex-col-reverse items-center justify-center">
				<div className="team-gallery">
					{members.map((member: MemberType) => (
						<TeamGalleryItem member={member} key={member._id} />
					))}
				</div>
				<div className="flex flex-col items-center justify-center w-full lg:h-auto h-fit space-y-8 py-16 px-4">
					<h3>Meet the Team</h3>
					<p className="lg:w-3/5 md:4/5 w-full text-left leading-loose">
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

