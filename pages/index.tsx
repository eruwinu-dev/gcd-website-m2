import { useRect } from "@reach/rect"
import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import BookConsultButton from "../components/BookConsultButton"
import LandingCollage from "../components/LandingCollage"
import ServicesList from "../components/ServicesList"

type Props = {}

const Home = (props: Props) => {
	const sliderRef = useRef<HTMLDivElement | null>(null)
	const sliderRect = useRect(sliderRef)

	return (
		<>
			<Head>
				<title>G Charles Design - Licensed Architectural Services</title>
			</Head>
			<section className="relative w-full lg:h-screen h-[100vh] -lg:translate-y-[3.5rem] -translate-y-[3.5rem]">
				<Image
					src="https://i.ibb.co/Q6NwFhT/mulholland-front1.jpg"
					alt="Glen Charles Design Landing Image"
					layout="fill"
					objectFit="cover"
					objectPosition="left"
					quality="95"
					priority
				/>
				<div className="absolute w-full h-full top-0 left-0 bg-black/60 z-[2] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-flow-row px-8 py-16">
					<div className="flex flex-col lg:items-start md:items-start items-center justify-center w-full h-full relative border-2 px-8 lg:text-left md:text-left text-center">
						<h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-white mb-4 leading-normal">
							Client Focused, Licensed Architectural Services.
						</h1>
						<p className="text-white w-3/5 lg:text-xl md:text-lg text-base leading-relaxed">
							Whether the project is small or large, we will always passionately pursue quality.
						</p>
					</div>
					<div className="lg:flex md:flex hidden"></div>
				</div>
			</section>
			<section className="h-fit w-full lg:flex md:flex hidden flex-row items-center justify-center pb-16">
				<div className="w-full h-fit flex flex-col items-center justify-center" ref={sliderRef}>
					<ServicesList />
				</div>
				<div
					className="w-full h-fit flex flex-col items-center justify-start"
					style={{ height: sliderRect ? sliderRect.height : 0 }}
				>
					<div className="sticky flex flex-col items-center justify-center w-full h-auto aspect-square space-y-8 generic-transition top-24 py-8">
						<h2 className="text-2xl">Quality in Service.</h2>

						<p className="leading-loose lg:w-4/5 md:w-11/12 w-full">
							Our approach is built upon the belief that the greater talent of any architect lies in their
							ability to translate a clients wishes and dreams into beautiful design solutions.
						</p>
						<p className="leading-loose lg:w-4/5 md:w-11/12 w-full">
							Our goal is to provide a level of service that is reflective of our passion while paying
							careful attention to the individual needs of each of our clients.
						</p>
					</div>
				</div>
			</section>
			<section className="h-fit w-full lg:hidden md:hidden flex flex-col items-start justify-center">
				<div className="w-full h-fit flex flex-col items-center justify-start">
					<div
						className={[
							"flex flex-col items-center justify-center w-11/12 h-auto aspect-square space-y-8 generic-transition pb-8",
						].join(" ")}
					>
						<h2 className="text-2xl">Quality in Service.</h2>

						<p className="leading-loose">
							Our approach is built upon the belief that the greater talent of any architect lies in their
							ability to translate a clients wishes and dreams into beautiful design solutions.
						</p>
						<p className="leading-loose">
							Our goal is to provide a level of service that is reflective of our passion while paying
							careful attention to the individual needs of each of our clients.
						</p>
					</div>
				</div>
				<div className="w-full h-fit flex flex-col items-center justify-start pb-16">
					<ServicesList />
				</div>
			</section>
			<section className="w-full h-full flex flex-row items-center justify-center bg-black lg:py-16 md:py-8 py-4">
				<div className="lg:w-1/2 md:w-3/4 w-full h-auto flex flex-col items-center justify-center lg:p-16 p-8">
					<p className="text-white indent-4 text-justify leading-loose tracking-wider text-lg w-full italic">
						We take our business relationships seriously. We strive for excellence in customer service &
						client satisfaction. You will see the difference.
					</p>
				</div>
			</section>
			<section className="min-h-0 max-h-fit">
				<div className="w-full h-fit grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-flow-row">
					<div className="w-full h-fit flex flex-col items-center justify-center space-y-4">
						<div className="w-11/12 flex flex-col items-center justify-center space-y-8 pt-16">
							<h3 className="text-center">Licensed in California, Nevada & Arizona.</h3>
							<p className="leading-loose lg:w-4/5 md:w-11/12 w-full text-left">
								We are experienced in the unique challenges of Southern California and will help you
								navigate them expertly and efficiently. Our years of expertise have allowed us to craft
								an efficient and agile operation that saves you money on all fronts without sacrificing
								quality production.
							</p>
							<div className="lg:w-3/4 md:w-11/12 w-full flex flex-row items-center justify-center">
								<div className="relative w-auto lg:h-[9rem] md:h-[7rem] h-[5rem] aspect-[2.38/1] overflow-hidden">
									<Image src="/aia-logo.png" alt="AIA Logo" layout="fill" />
								</div>
								<div className="relative w-auto lg:h-[9rem] md:h-[7rem] h-[5rem] aspect-[1.60/1] overflow-hidden">
									<Image src="/ncarb.png" alt="AIA Logo" layout="fill" />
								</div>
							</div>
						</div>
					</div>
					<LandingCollage />
				</div>
			</section>
			<section className="translate-y-0 relative w-full h-screen">
				<Image
					src="https://i.ibb.co/f0nrwYG/Outside-2.jpg"
					alt="Glen Charles Design Booking Image"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					quality="95"
					priority
				/>
				<div className="w-full h-full bg-black/60 z-[2] grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 grid-flow-row px-8 py-16">
					<div className="lg:flex md:flex hidden" />
					<div className="flex flex-col items-center justify-center w-full h-full relative border-2 px-8 text-center col-span-2 text-white space-y-8">
						<h4 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl">
							Maximize your project&apos;s potential.
						</h4>
						<p className="leading-relaxed text-white w-11/12 lg:text-xl md:text-lg text-base">
							Let&apos;s build your dream space fit to your wishes. Set up a talk with our architects!
						</p>
						<BookConsultButton />
					</div>
				</div>
			</section>
		</>
	)
}

export default Home

