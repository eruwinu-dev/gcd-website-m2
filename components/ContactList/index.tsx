import React from "react"
import { MailIcon, MapPinIcon, PhoneIcon } from "../../lib/icons"

type Props = {
	size?: "large"
}

const ContactList = ({ size }: Props) => {
	return (
		<div className="contact-list h-fit">
			<div>
				<a
					href="mailto:inquiry@gcharlesdesign.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-red-700 hover:underline"
					aria-label="G. Charles Design Inquiry Email"
				>
					<div className="w-6 h-6">
						<MailIcon />
					</div>
					<span className={size === "large" ? "text-base" : ""}>inquiry@gcharlesdesign.com</span>
				</a>
			</div>
			<div>
				<a
					href="tel:+1818-578-5895"
					aria-label="G. Charles Design Office Phone"
					className="hover:text-red-700 hover:underline"
				>
					<div className="w-6 h-6">
						<PhoneIcon />
					</div>
					<span className={size === "large" ? "text-base" : ""}>(818) 578 5895</span>
				</a>
			</div>
			<div>
				<a
					href="https://www.google.com/maps/place/6860+Canby+Ave+UNIT+113,+Reseda,+CA+91335,+USA/@34.1957441,-118.5339613,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2997f42ed0517:0xac97d99b47c7624b!8m2!3d34.1957441!4d-118.5339613"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Google Map Link of G. Charles Design"
					className="hover:text-red-700 hover:underline"
				>
					<MapPinIcon />
					<span className={size == "large" ? "text-base" : ""}>
						6860 Canby Avenue, Suite 113 Los Angeles, California 91335
					</span>
				</a>
			</div>
		</div>
	)
}

export default ContactList

