import Head from "next/head"
import React from "react"
import ContactForm from "../components/ContactForm"
import ContactList from "../components/ContactList"
import MapContainer from "../components/MapContainer"

type Props = {}

const Contact = (props: Props) => {
	return (
		<>
			<Head>
				<title>Contact | G Charles Design - Licensed Architectural Services</title>
			</Head>
			<section className="project-section relative">
				<MapContainer />
				<div className="absolute z-[2] w-[50%] h-full top-0 left-0">
					<div className="flex flex-col items-center justify-center w-[60%] space-y-8 -translate-y-8">
						<h1>Get In Touch</h1>
						<p>
							We work diligently to bring all of our clients personalized designs at a reasonable price.
							By hiring a licensed architect, you gain creative expertise through the design process
							coupled with years of experience getting plans approved by various jurisdictions. Whether
							it's a simple design or one that's more involved, we will work with you to find a creative
							solution that will be approved for construction.
						</p>
						<ContactList />
					</div>
				</div>
			</section>
			<div className="contact-form-section">
				<div className="contact-image"></div>
				<div className="contact-form-beside">
					<ContactForm />
				</div>
			</div>
		</>
	)
}

export default Contact

