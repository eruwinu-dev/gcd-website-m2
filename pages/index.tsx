import React, { useRef } from "react"

import Head from "next/head"
import Image from "next/image"

import { useRect } from "@reach/rect"

import BookConsultButton from "../components/BookConsultButton"
import LandingCollage from "../components/LandingCollage"
import ServicesList from "../components/ServicesList"

import { headerTitle } from "../lib/title"

import { sanityImageLoader } from "../lib/sanityImageLoader"
type Props = {}

const Home = (props: Props) => {
	const sliderRef = useRef<HTMLDivElement | null>(null)
	const sliderRect = useRect(sliderRef)

	return (
		<>
			<Head>
				<title>{headerTitle}</title>
			</Head>
			<section className="banner-section">
				<Image
					src={landingImage}
					loader={sanityImageLoader}
					alt="Glen Charles Design Landing Image"
					layout="fill"
					objectFit="cover"
					objectPosition="left"
					priority
				/>
				<div className="banner-mask lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
					<div className="flex flex-col lg:items-start md:items-start items-center justify-center w-full h-full relative border-2 px-8 lg:text-left md:text-left text-center">
						<h1 className="banner-title">Client Focused Architecture.</h1>
						<p className="banner-subtitle">
							Whether the project is small or large, we will always passionately pursue quality.
						</p>
					</div>
					<div className="banner-spacer"></div>
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
					{/* <ServicesList /> */}
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
							<div className="lg:w-3/4 md:w-11/12 w-full flex lg:flex-row md:flex-row flex-col items-center justify-center">
								<div className="relative w-auto lg:h-[9rem] md:h-[7rem] h-[5rem] aspect-[2.38/1] overflow-hidden">
									<Image
										src="/aia-logo.png"
										alt="AIA Logo"
										layout="fill"
										objectFit="contain"
										unoptimized
										loading="eager"
										sizes="460px, 200px, 100px"
									/>
								</div>
								<div className="relative w-auto lg:h-[9rem] md:h-[7rem] h-[5rem] aspect-[1.60/1] overflow-hidden">
									<Image
										src="/ncarb.png"
										alt="AIA Logo"
										layout="fill"
										objectFit="contain"
										unoptimized
										loading="eager"
										sizes="315px, 150px, 75px"
									/>
								</div>
							</div>
						</div>
					</div>
					<LandingCollage />
				</div>
			</section>
			<section className="translate-y-0 relative w-full h-screen">
				<Image
					src={bookImage}
					loader={sanityImageLoader}
					alt="Glen Charles Design Booking Image"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					quality="90"
					priority
					sizes="100vw"
					className="saturate-50"
				/>
				<div className="w-full h-full bg-black/60 z-[2] grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 grid-flow-row px-8 py-16">
					<div className="lg:flex md:flex hidden" />
					<div className="flex flex-col items-center justify-center w-full h-full relative border-2 text-center col-span-2 px-8 text-white space-y-8">
						<h4 className="w-10/12 lg:text-4xl md:text-4xl sm:text-3xl text-3xl">
							Maximize your project&apos;s potential.
						</h4>
						<p className="w-10/12 leading-relaxed text-white">
							Let&apos;s build your dream space fit to your wishes. Set up a talk with our architects!
						</p>
						<BookConsultButton />
					</div>
				</div>
			</section>
		</>
	)
}

const landingImage =
	"https://cdn.sanity.io/images/1apv929p/production/d8026d1f0395c9b782bf26ca806c8684619bb943-2200x1100.jpg"

const bookImage =
	"https://cdn.sanity.io/images/1apv929p/production/e358b6cfee63720bac0e8357fe23fecf106f6e28-2048x1365.jpg"

export default Home

