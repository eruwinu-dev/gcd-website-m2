import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { services } from "../lib/services"
import { ServiceType } from "../types"

type Props = {}

const Home = (props: Props) => {
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
						<p className="text-white w-[60%] text-xl leading-relaxed">
							Whether the project is small or large, we will always passionately pursue quality.
						</p>
					</div>
					<div></div>
				</div>
			</section>
			<section className="translate-y-0">
				<div></div>
				<div className="relative px-8 py-16">
					<div className="space-y-8 w-full h-full flex flex-col items-center justify-center px-8">
						<h1>Quality in Service.</h1>
						<div className="flex flex-row items-center justify-center">
							<div className="relative w-auto h-[7rem] aspect-[2.38/1] overflow-hidden">
								<Image src="/aia-logo.png" alt="AIA Logo" layout="fill" />
							</div>
							<div className="relative w-auto h-[7rem] aspect-[1.60/1] overflow-hidden">
								<Image src="/ncarb.png" alt="AIA Logo" layout="fill" />
							</div>
						</div>
						<p className="leading-loose w-[80%]">
							Our approach is built upon the belief that the greater talent of any architect lies in their
							ability to translate a clients wishes and dreams into beautiful design solutions.
						</p>
						<p className="leading-loose w-[80%]">
							Our goal is to provide a level of service that is reflective of our passion while paying
							careful attention to the individual needs of each of our clients.
						</p>
					</div>
				</div>
			</section>
			<div className="w-full h-screen flex flex-col items-center justify-center">
				<div className="w-[96vw] h-full">
					<h2>What We Offer</h2>
					<div className={["grid grid-flow-row grid-cols-3 gap-8"].join(" ")}>
						{services.map((service: ServiceType, index: number) => (
							<div className="flex flex-col items-center justify-center" key={index}>
								<div className="relative w-full h-auto aspect-video overflow-hidden">
									<Image
										src={service.photo}
										alt={service.title}
										layout="fill"
										className="generic-transition hover:scale-110 cursor-pointer"
									/>
								</div>
								<h4>{service.title}</h4>
								<p>{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="w-full h-[50vh] flex flex-col items-center justify-center p-4">
				<h1>Maximize your project's potential.</h1>
				<h6>Let's build your dream space fit to your wishes. Set up a talk with our architects!</h6>
				<Link href="/contact">
					<button>Book a Consult</button>
				</Link>
			</div>
		</>
	)
}

export default Home

