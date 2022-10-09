import Head from "next/head"
import Image from "next/image"
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
							By hiring a licensed architect, you gain creative expertise through the design process
							coupled with years of experience getting plans approved by various jurisdictions.
						</p>
						<ContactList />
					</div>
				</div>
			</section>
			<div className="contact-form-section">
				<div className="flex flex-col items-center justify-center">
					<div className="relative w-[95%] h-auto aspect-video bg-[url(https://i.ibb.co/pL4Zry9/contact-sketch.jpg)] bg-cover">
						{/* <Image src="" alt="Contact Sketch" layout="fill" /> */}
					</div>
				</div>
				<div className="contact-form-beside">
					<ContactForm />
				</div>
			</div>
		</>
	)
}

export default Contact

