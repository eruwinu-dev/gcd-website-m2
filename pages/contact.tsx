import Head from "next/head"
import React from "react"
import ContactForm from "../components/ContactForm"
import ContactList from "../components/ContactList"
import { MailIcon, MapPinIcon, PhoneIcon } from "../lib/icons"

type Props = {}

const Contact = (props: Props) => {
	return (
		<>
			<Head>
				<title>Contact | G Charles Design - Licensed Architectural Services</title>
			</Head>
			<section>
				<div className="contact-beside">
					<div className="contact-beside-container">
						<h1>Get In Touch</h1>
						<p>
							We work diligently to bring all of our clients personalized designs at a reasonable price.
							By hiring a licensed architect, you gain creative expertise through the design process
							coupled with years of experience getting plans approved by various jurisdictions. Whether
							it's a simple design or one that's more involved, we will work with you to find a creative
							solution that will be approved for construction.
						</p>
					</div>
				</div>
				<div className="contact-image"></div>
			</section>
			<section>
				<div className="contact-beside"></div>
				<div className="contact-beside">
					<ContactForm />
				</div>
			</section>
		</>
	)
}

export default Contact

