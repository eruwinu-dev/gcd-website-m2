import { useRect } from "@reach/rect"
import Head from "next/head"
import React, { useRef } from "react"
import ContactForm from "../components/ContactForm"
import ContactList from "../components/ContactList"
import MapContainer from "../components/MapContainer"
import SocialsList from "../components/SocialsList"

type Props = {}

const Contact = (props: Props) => {
	const sliderRef = useRef<HTMLDivElement | null>(null)
	const sliderRect = useRect(sliderRef)

	return (
		<>
			<Head>
				<title>Contact | G Charles Design - Licensed Architectural Services</title>
			</Head>
			<section className="h-fit translate-y-0 lg:flex md:flex hidden flex-row items-start justify-center">
				<div
					className="w-full flex flex-col items-center justify-start"
					style={{ height: sliderRect ? sliderRect.height : 0 }}
				>
					<div
						className={[
							"sticky flex flex-col items-center justify-center w-4/5 h-auto aspect-square space-y-8 px-8 mb-8 generic-transition top-32",
						].join(" ")}
					>
						<h1>Get In Touch</h1>
						<ContactList size="large" />
						<SocialsList />
					</div>
				</div>

				<div className="w-full h-fit flex flex-col items-center justify-start space-y-2 pb-8" ref={sliderRef}>
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
		</>
	)
}

export default Contact

