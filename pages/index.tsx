import { useRect } from "@reach/rect"
import Head from "next/head"
import Image from "next/image"
import React, { useRef } from "react"
import BookConsultButton from "../components/BookConsultButton"
import LandingCollage from "../components/LandingCollage"
import { services } from "../lib/services"
import { ServiceType } from "../types"

type Props = {}

const Home = (props: Props) => {
	const sliderRef = useRef<HTMLDivElement | null>(null)
	const sliderRect = useRect(sliderRef)

	return (
		<>
			<Head>
				<title>G Charles Design - Licensed Architectural Services</title>
			</Head>
			<section className="relative w-full h-full aspect-video bg-[url('https://i.ibb.co/Q6NwFhT/mulholland-front1.jpg')] bg-fill">
				<div className="absolute w-full h-full top-0 left-0 bg-black/60 z-[2] grid grid-cols-2 grid-flow-row px-8 py-16">
					<div className="flex flex-col items-start justify-center w-full h-full relative border-2 px-8">
						<h1 className="text-5xl text-white mb-4 leading-normal">
							Client Focused, Licensed Architectural Services.
						</h1>
						<p className="text-white w-3/5 text-xl leading-relaxed">
							Whether the project is small or large, we will always passionately pursue quality.
						</p>
					</div>
					<div></div>
				</div>
			</section>
			<section className="h-fit translate-y-0 flex flex-row items-start justify-center px-8 pb-16">
				<div className="w-full h-fit flex flex-col items-center justify-start" ref={sliderRef}>
					<div className={["w-5/6 grid grid-flow-row grid-cols-1 gap-8"].join(" ")}>
						{services.map((service: ServiceType, index: number) => (
							<div className="flex flex-col items-center justify-center space-y-4 pb-4" key={index}>
								<div className="relative w-full h-auto aspect-video overflow-hidden">
									<Image
										src={service.photo}
										alt={service.title}
										layout="fill"
										className="generic-transition hover:scale-105 cursor-pointer"
									/>
								</div>
								<h4>{service.title}</h4>
								<p className="w-full leading-loose">{service.description}</p>
							</div>
						))}
					</div>
				</div>
				<div
					className="w-full h-fit flex flex-col items-center justify-start"
					style={{ height: sliderRect ? sliderRect.height : 0 }}
				>
					<div
						className={[
							"sticky flex flex-col items-center justify-center w-11/12 h-auto aspect-square border-2 border-black space-y-8 generic-transition top-24",
						].join(" ")}
					>
						<h3>Quality in Service.</h3>

						<p className="leading-loose w-4/5">
							Our approach is built upon the belief that the greater talent of any architect lies in their
							ability to translate a clients wishes and dreams into beautiful design solutions.
						</p>
						<p className="leading-loose w-4/5">
							Our goal is to provide a level of service that is reflective of our passion while paying
							careful attention to the individual needs of each of our clients.
						</p>
						{/* <p className="leading-loose w-4/5">
							We take our business relationships seriously. We strive for excellence in customer service &
							client satisfaction. You will see the difference.
						</p> */}
					</div>
				</div>
			</section>
			<section className="h-screen translate-y-0 flex flex-row items-start justify-center">
				<div className="w-full h-screen grid grid-cols-2 grid-flow-row">
					<div className="w-full h-screen flex flex-col items-center justify-center space-y-4">
						<div className="w-4/5 flex flex-col items-center justify-center space-y-8 py-8">
							<h3>Licensed in California, Nevada & Arizona.</h3>
							<p>
								We are experienced in the unique challenges of Southern California and will help you
								navigate them expertly and efficiently. Our years of expertise have allowed us to craft
								an efficient and agile operation that saves you money on all fronts without sacrificing
								quality production.
							</p>
							<div className="flex flex-row items-center justify-center">
								<div className="relative w-auto h-[7rem] aspect-[2.38/1] overflow-hidden">
									<Image src="/aia-logo.png" alt="AIA Logo" layout="fill" />
								</div>
								<div className="relative w-auto h-[7rem] aspect-[1.60/1] overflow-hidden">
									<Image src="/ncarb.png" alt="AIA Logo" layout="fill" />
								</div>
							</div>
						</div>
					</div>
					<LandingCollage />
				</div>
			</section>
			<section className="translate-y-0 relative w-full h-screen aspect-video bg-[url('https://i.ibb.co/f0nrwYG/Outside-2.jpg')] bg-fill bg-cover">
				<div className="absolute w-full h-full top-0 left-0 bg-black/60 z-[2] grid grid-cols-4 grid-flow-row px-8 py-16">
					<div />
					<div className="flex flex-col items-center justify-center w-full h-full relative border-2 px-8 text-center col-span-2 text-white space-y-8">
						<h1 className="text-5xl">Maximize your project's potential.</h1>
						<p className="text-white w-11/12 text-xl leading-relaxed">
							Let's build your dream space fit to your wishes. Set up a talk with our architects!
						</p>
						<BookConsultButton />
					</div>
				</div>
			</section>
		</>
	)
}

export default Home

