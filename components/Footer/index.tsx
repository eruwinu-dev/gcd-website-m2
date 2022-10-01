import Image from "next/image"
import React from "react"
import ContactList from "../ContactList"

type Props = {}

const Footer = (props: Props) => {
	return (
		<footer>
			<div className="logo-container">
				<div>
					<Image src="/gcd-logo-big.png" alt="Glen Charles Design Logo" width={237} height={124} />
				</div>
				<h6>&copy; 2022 G Charles Design Architecture and Planning</h6>
			</div>
			<div className="contact-list-container">
				<h4>Reach Us</h4>
				<ContactList />
			</div>
		</footer>
	)
}

export default Footer

