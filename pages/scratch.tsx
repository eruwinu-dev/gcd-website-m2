import React, { useState } from "react"
import { motion } from "framer-motion"

type Props = {}

const variants = {
	hidden: {
		width: 100,
		height: 100,
		borderRadius: "1000px",
		transition: { duration: 1 },
	},
	visible: {
		width: 300,
		height: 300,
		borderRadius: "0",
		transition: { duration: 0.25 },
	},
}

const Scratch = (props: Props) => {
	const [show, setShow] = useState<boolean>(false)

	return (
		<section className="flex flex-col items-center justify-center relative">
			<motion.div
				variants={variants}
				animate={show ? "visible" : "hidden"}
				className="absolute bg-red-500 top-0 left-0"
			/>
			<button className="px-3 py-2 border-2" onClick={() => setShow(!show)}>
				{show ? "Hide" : "Show"}
			</button>
		</section>
	)
}

export default Scratch

