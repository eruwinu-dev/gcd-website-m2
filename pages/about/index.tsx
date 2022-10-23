import Head from "next/head"
import React from "react"
import AboutCollage from "../../components/AboutCollage"
import BookConsultButton from "../../components/BookConsultButton"
import TeamGallery from "../../components/TeamGallery"
import Image from "next/image"
import { headerTitle } from "../../lib/title"

type Props = {}

const About = (props: Props) => {
	return (
		<>
			<Head>
				<title>{`About | ${headerTitle}`}</title>
			</Head>
			<section className="relative w-full lg:h-screen h-[100vh] -lg:translate-y-[3.5rem] -translate-y-[3.5rem]">
				<Image
					src="https://i.ibb.co/Zf2c2d2/Staircase-3.jpg"
					alt="Glen Charles Design About Image"
					layout="fill"
					objectFit="cover"
					objectPosition="left"
					quality="95"
					priority
				/>
				<div className="absolute w-full h-full top-0 left-0 bg-black/60 z-[2] grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 grid-flow-row px-8 py-16">
					<div className="lg:flex md:flex hidden" />
					<div className="flex flex-col items-center justify-center w-full h-full relative border-2 px-8 text-center col-span-2">
						<h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl mb-4 text-white">
							We design for our clients, not our portfolio.
						</h1>
						<p className="text-white lg:w-3/5 md:w-11/12 w-11/12 lg:text-xl md:text-lg text-base">
							Our knowledge of architecture is informed through years of education and experience.
						</p>
					</div>
				</div>
			</section>
			<section className="lg:min-h-0 md:min-h-0 min-h-fit max-h-fit grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-flow-row lg:gap-4 md:gap-4 gap-0">
				<div className="h-full flex flex-col items-center justify-center space-y-8 px-4">
					<p className="lg:w-4/5 md:w-4/5 w-full">
						Founded in 1999, G. Charles Design has been dedicated to creating authentic and captivating
						architecture with careful consideration for our clients needs.
					</p>
					<p className="lg:w-4/5 md:w-4/5 w-full">
						In addition to our decades of residential and high-end residential experience, we have completed
						over 900,000 square feet of retail space design both nationally and overseas. Our firm is eager
						to work with clients from all walks of life.
					</p>
				</div>
				<AboutCollage />
			</section>
			<section className="w-full h-full flex flex-row items-center justify-center bg-black lg:py-16 md:py-8 py-4">
				<div className="lg:w-1/2 md:w-10/12  w-full h-auto flex flex-col items-center justify-center lg:p-16 p-8">
					<p className="text-white indent-4 text-justify leading-loose tracking-wider text-lg w-full italic">
						Any style can be emulated, but the truly talented architects are those that can masterfully
						create designs of any style and period, historically correct and with strong precedence from the
						entire history of architecture.
					</p>
				</div>
			</section>
			<TeamGallery />
			<section className="relative w-full h-screen translate-y-0 aspect-video">
				<Image
					src="https://i.ibb.co/HrbGy9v/Michigan-Exterior-3-2.jpg"
					alt="Glen Charles Booking Image"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					quality="95"
					priority
				/>
				<div className="absolute w-full h-full top-0 left-0 bg-black/60 z-[2] grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 grid-flow-row px-8 py-16 text-center">
					<div className="lg:flex md:flex hidden" />
					<div className="flex flex-col items-center justify-center w-full h-full relative border-2 px-8 col-span-2 space-y-4">
						<h1 className="w-full lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-white">
							Let&apos;s build that dream project together.
						</h1>
						<p className="leading-relaxed text-white w-full lg:text-xl md:text-lg text-base">
							Whether you&apos;re still in the rough sketches or you have a full plan in mind, it&apos;s
							never too early to involve us. We&apos;ll be with you in every step.
						</p>
						<BookConsultButton />
					</div>
					<div className="lg:flex md:flex hidden" />
				</div>
			</section>
		</>
	)
}

export default About

