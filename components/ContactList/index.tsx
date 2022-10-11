import React from "react"
import { MailIcon, MapPinIcon, PhoneIcon } from "../../lib/icons"

type Props = {
	size?: "large"
}

const ContactList = ({ size }: Props) => {
	return (
		<div className="contact-list h-fit">
			<div>
				<a href="mailto:inquiry@gcharlesdesign.com" target="_blank" rel="noopener noreferrer">
					<div className="w-6 h-6">
						<MailIcon />
					</div>
					<span className={size == "large" ? "text-base" : ""}>inquiry@gcharlesdesign.com</span>
				</a>
			</div>
			<div>
				<PhoneIcon />
				<span className={size == "large" ? "text-base" : ""}>(818) 562-7224</span>
			</div>
			<div>
				<a
					href="https://www.google.com/maps/place/Westlake+Village+Industrial+Park,+31312+Via+Colinas+%23109,+Westlake+Village,+CA+91362,+USA/@34.1564555,-118.8096535,17z/data=!3m1!4b1!4m5!3m4!1s0x80e8245959a89a85:0xecd35589a8231181!8m2!3d34.1564555!4d-118.8074648"
					target="_blank"
					rel="noopener noreferrer"
				>
					<MapPinIcon />
					<span className={size == "large" ? "text-base" : ""}>
						31312 Via Colinas #109, Westlake Village, CA 91362
					</span>
				</a>
			</div>
		</div>
	)
}

export default ContactList

