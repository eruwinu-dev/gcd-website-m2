import React, { useMemo } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

import { Carousel } from "react-responsive-carousel"
import { AnimatePresence, motion } from "framer-motion"

import { ArrowLeftIcon, ArrowRightIcon } from "../../lib/icons"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { getOptimizedImageUrl } from "../../lib/cloudinaryImage"

type Props = {
	images: string
}

/* eslint-disable react/display-name */

const ProjectCarousel = ({ images }: Props) => {
	const { asPath, query, push } = useRouter()

	const imagesList = useMemo(() => images.split("\n"), [images])

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
						{imagesList.map((photo: string) => (
							<div
								className={["w-full h-auto lg:aspect-video aspect-square relative select-none"].join(
									" "
								)}
								key={photo}
							>
								<Image
									src={getOptimizedImageUrl(photo)}
									alt={photo}
									layout="fill"
									objectFit={
										["the-art-deco", "adelbert"].includes(asPath.split("?")[0].split("/")[2])
											? "contain"
											: "cover"
									}
									objectPosition="center"
									loading="eager"
								/>
							</div>
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
				"lg:w-1/12 md:w-1/12 w-2/12 h-[90vh] absolute top-0 bottom-0 my-auto z-[2] inline-flex items-center justify-center group cursor-pointer",
				side === "left" ? "left-0" : "right-0",
			].join(" ")}
			onClick={clickHandler}
		>
			<button
				type="button"
				aria-label={label}
				className={[
					"lg:p-2 md:p-2 p-1 text-white rounded-full generic-transition group-hover:scale-125 group-hover:bg-black/50",
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

