import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"

type Props = {}

const buttonVariants = {
	hidden: {
		x: -10,
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			ease: "easeInOut",
			duration: 0.5,
		},
	},
}

const BookConsultButton = (props: Props) => {
	return (
		<Link href="/contact">
			<motion.button
				type="button"
				className="border-2 border-white generic-transition text-white hover:bg-white hover:text-black"
				variants={buttonVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				Book a Consult
			</motion.button>
		</Link>
	)
}

export default BookConsultButton

