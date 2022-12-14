import React, { useRef } from "react"
import Head from "next/head"

import { useRect } from "@reach/rect"

import ContactForm from "../components/ContactForm"
import ContactList from "../components/ContactList"
import ContactModal from "../components/ContactModal"
import MapContainer from "../components/MapContainer"
import SocialsList from "../components/SocialsList"

import { headerTitle } from "../lib/title"

type Props = {}

const Contact = (props: Props) => {
	const sliderRef = useRef<HTMLDivElement | null>(null)
	const sliderRect = useRect(sliderRef)

	return (
		<>
			<Head>
				<title>{`Contact | ${headerTitle}`}</title>
			</Head>
			<section className="contact-landing-section">
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
					<MapContainer />
					<ContactForm />
				</div>
			</section>
			<section className="h-fit translate-y-0 lg:hidden md:hidden flex flex-col items-center justify-start space-y-8 py-4">
				<MapContainer />
				<div className="h-fit flex flex-col items-center justify-center space-y-4 w-11/12 aspect-square">
					<h3>Get In Touch</h3>
					<ContactList size="large" />
					<SocialsList />
				</div>
				<ContactForm />
			</section>
			<ContactModal />
		</>
	)
}

export default Contact

