import Image from "next/image"
import React from "react"
import SocialMediaList from "../SocialMediaList"

type Props = {}

const Footer = (props: Props) => {
	return (
		<footer>
			<div className="logo-container">
				<div className="relative lg:w-1/4 md:w-1/2 w-4/5 h-auto aspect-video">
					<Image
						src="/gcd-logo-big.png"
						alt="The logo for G. Charles Design"
						layout="fill"
						objectFit="contain"
						loading="eager"
						unoptimized
						loader={ ({ src }) => src }
					/>
				</div>
				<span className="text-sm italic">
					&copy; 2023 G.Charles Design + Consulting Inc. <br />
					<span>d.b.a G. Charles Design</span>
				</span>
			</div>
			<div className="contact-list-container">
				<h4 className="text-xl">Reach Us</h4>
				<SocialMediaList />
			</div>
		</footer>
	)
}

export default Footer

