import Image from "next/image"
import React from "react"
import ContactList from "../ContactList"

type Props = {}

const Footer = (props: Props) => {
	return (
		<footer>
			<div className="logo-container">
				<div className="relative lg:w-1/4 md:w-1/2 w-4/5 h-auto aspect-video">
					<Image src="/gcd-logo-big.png" alt="Glen Charles Design Logo" layout="fill" />
				</div>
				<span className="text-sm italic">&copy; 2022 G Charles Design Architecture and Planning</span>
			</div>
			<div className="contact-list-container">
				<h4>Reach Us</h4>
				<ContactList />
			</div>
		</footer>
	)
}

export default Footer

