import React, { memo } from "react"
import { useRouter } from "next/router"

import { Carousel } from "react-responsive-carousel"
import { AnimatePresence, motion } from "framer-motion"

import { ArrowLeftIcon, ArrowRightIcon } from "../../lib/icons"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import ProjectCarouselItem from "./ProjectCarouselItem"

type Props = {
	title: string
	images: SanityImageSource[]
}

/* eslint-disable react/display-name */

const ProjectCarousel = ({ images, title }: Props) => {
	const { asPath, query, push } = useRouter()

	const changeCarouselIndex = (value: number) => {
		push(
			{
				pathname: asPath.split("?")[0],
				query: { mode: "carousel", photo: value },
			},
			undefined,
			{ shallow: true }
		)
	}

	return (
		<>
			<AnimatePresence>
				<motion.div
					className="project-carousel-container"
					variants={carouselVariants}
					initial="hidden"
					animate="show"
				>
					<Carousel
						showThumbs={false}
						showIndicators={false}
						showStatus={false}
						swipeable
						emulateTouch
						swipeScrollTolerance={100}
						transitionTime={200}
						infiniteLoop
						className="w-full h-full mt-4 mx-auto"
						renderArrowPrev={carouselControl("left")}
						renderArrowNext={carouselControl("right")}
						selectedItem={Number(query?.photo) || 0}
						onChange={changeCarouselIndex}
					>
						{images.map((image: SanityImageSource, index: number) => (
							<ProjectCarouselItem image={image} title={title} key={index} />
						))}
					</Carousel>
				</motion.div>
			</AnimatePresence>
		</>
	)
}

const carouselControl = (side: "left" | "right") => (clickHandler: () => void, hasPrev: boolean, label: string) => {
	return (
		<div
			className={[
				"lg:w-[5%] md:w-[5%] w-1/12 h-[90vh] absolute top-0 bottom-0 my-auto z-[2] inline-flex items-center justify-center group cursor-pointer generic-transition",
				side === "left" ? "left-0" : "right-0",
			].join(" ")}
			onClick={clickHandler}
		>
			<button
				type="button"
				aria-label={label}
				className={[
					"lg:p-2 md:p-2 p-1 text-white rounded-full bg-black/50 generic-transition group-hover:scale-125 group-hover:bg-black/70",
					side === "left" ? "group-hover:-translate-x-2" : "group-hover:translate-x-2",
				].join(" ")}
			>
				{side === "left" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
			</button>
		</div>
	)
}

const carouselVariants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 0.5,
			ease: "easeInOut",
		},
	},
}

export default memo(ProjectCarousel)

