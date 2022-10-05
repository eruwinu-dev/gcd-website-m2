import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

type Props = {}

const MapContainer = (props: Props) => {
	return (
		<>
			<motion.div
				className="absolute z-[3] top-[3vh] right-[27vw] w-[9vw] h-fit"
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: "easeInOut", duration: 0.5 }}
			>
				<div className="w-full h-auto relative aspect-square">
					<Image src="/gcd-logo-big.png" alt="Glen Charles Design Logo" layout="fill" />
				</div>
			</motion.div>
			<motion.div
				className="absolute z-[3] bg-red-600 w-1 top-[18vh] right-[31.125vw]"
				initial={{ height: 0 }}
				animate={{ height: "27vh" }}
				transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
			/>
			<motion.div
				className="absolute z-[3] bg-red-500 w-6 h-6 rounded-full top-[44%] right-[30.5vw]"
				animate={{
					scale: [0, 1.25, 1],
				}}
				transition={{
					duration: 1,
					ease: "easeInOut",
					delay: 0.5,
				}}
			/>
			<motion.div className="absolute top-0 left-0">
				<div className="w-full h-full relative aspect-square">
					<Image src="https://i.ibb.co/7Rvj1bk/gcd-map.png" alt="Glen Charles Design Map" layout="fill" />
				</div>
			</motion.div>
		</>
	)
}

export default MapContainer

