import React from "react"
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../../lib/icons"

type Props = {}

const SocialsList = (props: Props) => {
	return (
		<div className="socials-list">
			<div className="flex flex-col items-center">
				<a
					href="https://www.instagram.com/gcharlesdesign/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:scale-110 generic-transition"
					aria-label="G. Charles Design Instagram"
				>
					<InstagramIcon />
				</a>
			</div>
			<div className="flex flex-col items-center">
				<a
					href="https://www.facebook.com/profile.php?id=100078064703101"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:scale-110 generic-transition"
					aria-label="G. Charles Design Facebook"
				>
					<FacebookIcon />
				</a>
			</div>
			<div className="flex flex-col items-center">
				<a
					href="http://linkedin.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:scale-110 generic-transition"
					aria-label="G. Charles Design Linkedin"
				>
					<LinkedinIcon />
				</a>
			</div>
		</div>
	)
}

export default SocialsList

