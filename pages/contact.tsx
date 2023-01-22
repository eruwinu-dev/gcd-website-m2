import React, { useRef } from "react"

import { useRect } from "@reach/rect"

import ContactForm from "../components/ContactForm"
import ContactList from "../components/ContactList"
import ContactModal from "../components/ContactModal"
import MapContainer from "../components/MapContainer"
import SocialsList from "../components/SocialsList"

import { headerTitle } from "../lib/title"
import MetaHead from "../components/MetaHead"

type Props = {}

const Contact = (props: Props) => {
	const sliderRef = useRef<HTMLDivElement | null>(null)
	const sliderRect = useRect(sliderRef)
	const widthRef = useRef<HTMLDivElement | null>(null)
	const widthRect = useRect(widthRef)

	return (
		<>
			<MetaHead
				title={`Contact | ${headerTitle}`}
				description="Get in touch with G. Charles Design at inquiry@gcharlesdesign.com. Book a consult now!"
				url={process.env.NEXT_PUBLIC_SITE_URL + "/contact"}
				siteName={`Contact | ${headerTitle}`}
			/>
			<section className="contact-landing-section" ref={widthRef}>
				<div
					className="contact-landing-list-sticky-container"
					style={{ height: sliderRect ? sliderRect.height : 0 }}
				>
					<div className="contact-landing-list-container">
						<h1>Get In Touch</h1>
						<ContactList size="large" />
						<SocialsList />
					</div>
				</div>

				<div className="contact-landing-scroll-container" ref={sliderRef}>
					<ContactForm />
				</div>
			</section>
			<ContactModal />
		</>
	)
}

export default Contact

