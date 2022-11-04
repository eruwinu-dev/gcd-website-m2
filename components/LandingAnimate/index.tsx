import Image from "next/image"
import React from "react"
import useStateContext from "../../context/State"

import { motion } from "framer-motion"

type Props = {}

const images: string[] = [
	"https://i.ibb.co/j4mXHwP/Michigan-Exterior-1.jpg",
	"https://i.ibb.co/HKdjWQr/Koman-Front1.jpg",
	"https://i.ibb.co/t3n1zGd/SV-Night-1.jpg",
]

const zIndex: string[] = ["z-[3]", "z-[4]", "z-[5]"]

const LandingAnimate = (props: Props) => {
	const { load, setLoad } = useStateContext()

	const resetLoad = () => {
		setTimeout(() => {
			setLoad(false)
		}, childDuration * 1000 * images.length)
	}

	return (
		<section
			className={[
				"relative w-full lg-h-screen h-[100vh] -lg:translate-y-[3.5rem] -translate-y-[3.5rem] z-[3] generic-transition",
				load ? "flex" : "hidden",
			].join(" ")}
		>
			<div className="absolute m-auto top-0 left-0 right-0 bottom-0 z-[6] w-auto h-[25vh] aspect-[1.75/1]">
				<motion.div className="w-full h-full relative" variants={logoVariants} initial="start" animate="end">
					<Image
						src="/gcd-logo-big-white.png"
						alt="Glen Charles Design Landing Image"
						layout="fill"
						objectFit="contain"
					/>
				</motion.div>
			</div>

			<motion.div className="w-full h-full relative" variants={containerVariants} initial="start" animate="end">
				{images.map((image: string, index: number) => (
					<motion.div
						className={["w-full h-full absolute top-0 left-0", zIndex[index]].join(" ")}
						variants={imageVariants}
						style={{
							originX: "50vw",
							originY: "50vh",
						}}
						key={image}
					>
						<div className={["w-full h-full relative"].join(" ")}>
							<Image
								src={image}
								alt="Loading Image"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								quality="95"
								priority
								onLoadingComplete={index === images.length - 1 ? resetLoad : () => {}}
							/>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}

const childDuration = 0.75

const containerVariants = {
	start: {},
	end: {
		transition: {
			staggerChildren: childDuration,
		},
	},
}

const logoVariants = {
	start: {
		opacity: 0,
		transition: {
			duration: childDuration,
		},
	},
	end: {
		opacity: 1,
		transition: {
			delay: childDuration / images.length,
			duration: childDuration,
		},
	},
}

const imageVariants = {
	start: {
		scale: 1,
		opacity: 0,
		transition: {
			duration: childDuration,
		},
	},
	end: {
		scale: 1.1,
		opacity: 1,
		transition: {
			duration: childDuration,
		},
	},
}

export default LandingAnimate

