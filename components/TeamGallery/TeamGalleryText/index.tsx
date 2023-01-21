import React from "react"

type Props = {
	sticky?: boolean
}

const TeamGalleryText = ({ sticky = false }: Props) => {
	return (
		<div className={["meet-the-team-container", sticky ? "sticky top-24 aspect-square" : "aspect-[4/2]"].join(" ")}>
			<h2>Meet the Team</h2>
			<p>
				We believe that developing collaborative relationships would produce the best service for our clients.
				The strength of our team gives us the capability to design in any style, scale or geography.
			</p>
		</div>
	)
}

export default TeamGalleryText

