import React from "react"
import useStateContext from "../../../context/State"
import { ArrowLeftIcon, ArrowRightIcon } from "../../../lib/icons"
import { motion } from "framer-motion"

type Props = {
	side: "left" | "right"
}

const containerMotion = {
	rest: {},
	hover: {},
}

const arrowMotion = {
	rest: { x: 0, ease: "easeInOut" },
	hover: {
		x: 10,
		scaleX: 1.2,
		scaleY: 1.2,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		transition: {
			duration: 0.2,
		},
	},
}

const CarouselControl = ({ side }: Props) => {
	const { paginate } = useStateContext()

	return (
		<motion.div
			className={["carousel-controls", side === "left" ? "left-0" : "right-0"].join(" ")}
			onClick={() => paginate(side === "left" ? -1 : 1)}
			initial="rest"
			whileHover="hover"
			animate="rest"
			variants={containerMotion}
		>
			<motion.button type="button" className="p-2 text-white" variants={arrowMotion}>
				{side === "left" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
			</motion.button>
		</motion.div>
	)
}

export default CarouselControl

