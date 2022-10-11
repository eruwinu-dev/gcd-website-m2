import React from "react"
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../../lib/icons"

type Props = {}

const SocialsList = (props: Props) => {
	return (
		<div className="w-3/5 h-fit grid grid-cols-3 grid-flow-row gap-4 text-center p-4">
			<div className="flex flex-col items-center">
				<a
					href="https://www.instagram.com/gcharlesdesign/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:scale-110 generic-transition"
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
				>
					<LinkedinIcon />
				</a>
			</div>
		</div>
	)
}

export default SocialsList

