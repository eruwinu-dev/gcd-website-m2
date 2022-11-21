import React from "react"

import type { ProjectType } from "../../types/project"

import { AnimatePresence, motion } from "framer-motion"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon } from "../../lib/icons"
import { useRouter } from "next/router"

type Props = {
	project: ProjectType
}

const ProjectCarousel = ({ project }: Props) => {
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
					className="w-[96vw] h-full mt-4 mx-auto"
					renderArrowPrev={carouselControl("left")}
					renderArrowNext={carouselControl("right")}
					selectedItem={Number(query.photo) || 0}
					onChange={changeCarouselIndex}
				>
					{project.photos.map((photo: string) => (
						<div
							className={["w-full h-auto lg:aspect-video aspect-square relative select-none"].join(" ")}
							key={photo}
						>
							<Image src={photo} alt={photo} layout="fill" objectFit="cover" objectPosition="center" />
						</div>
					))}
				</Carousel>
			</motion.div>
		</AnimatePresence>
	)
}

const carouselControl = (side: "left" | "right") => (clickHandler: () => void, hasPrev: boolean, label: string) => {
	return (
		<div
			className={[
				"w-1/12 h-[90vh] absolute top-0 bottom-0 my-auto z-[2] inline-flex items-center justify-center group cursor-pointer",
				side === "left" ? "left-0" : "right-0",
			].join(" ")}
			onClick={clickHandler}
		>
			<button
				type="button"
				aria-label={label}
				className={[
					"p-2 text-white rounded-full generic-transition group-hover:scale-125 group-hover:bg-black/50",
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
			duration: 0.5,
		},
	},
}

export default ProjectCarousel

