import Head from "next/head"
import Link from "next/link"
import React from "react"
import AboutCollage from "../../components/AboutCollage"
import TeamGallery from "../../components/TeamGallery"

type Props = {}

const About = (props: Props) => {
	return (
		<>
			<Head>
				<title>About | G Charles Design - Licensed Architectural Services</title>
			</Head>
			<section className="relative w-full h-full aspect-video bg-[url('https://i.ibb.co/Zf2c2d2/Staircase-3.jpg')] bg-cover">
				<div className="absolute w-full h-full top-0 left-0 bg-black/40 z-[2] grid grid-cols-4 grid-flow-row px-8 py-16">
					<div></div>
					<div className="flex flex-col items-center justify-center w-full h-full relative border-2 px-8 text-center col-span-2">
						<h1 className="text-5xl text-white mb-4 leading-normal">
							We design for our clients, not our portfolio.
						</h1>
						<p className="text-white w-[60%] text-xl leading-relaxed">
							Our knowledge of architecture is informed through years of education and experience.
						</p>
					</div>
					<div></div>
				</div>
			</section>
			<section className="translate-y-0">
				<div className="about-beside">
					<div>
						<p>
							Founded in 1999, G. Charles Design has been dedicated to creating authentic and captivating
							architecture with careful consideration for our clients needs.
						</p>
						<p>
							In addition to our decades of residential and high-end residential experience, we have
							completed over 900,000 square feet of retail space design both nationally and overseas. Our
							firm is eager to work with clients from all walks of life.
						</p>
						<p>
							We are not a firm that's only interested in the next big opportunity. We pride ourselves in
							bringing custom design services to clients that have never had that experience.
						</p>
					</div>
				</div>
				<AboutCollage />
			</section>
			<div className="w-full h-[60vh] flex flex-row items-center justify-center py-8">
				<div className="w-1/2 h-auto flex flex-col items-center justify-center bg-black/80 p-16">
					<p className="text-white indent-4 text-justify leading-loose tracking-wider text-lg w-full italic">
						Any style can be emulated, but the truly talented architects are those that can masterfully
						create designs of any style and period, historically correct and with strong precedence from the
						entire history of architecture.
					</p>
				</div>
			</div>
			<section className="h-fit translate-y-0 flex flex-row items-start justify-center p-8">
				<TeamGallery />
			</section>
			<section className="relative w-full translate-y-0 aspect-video bg-[url('https://i.ibb.co/HrbGy9v/Michigan-Exterior-3-2.jpg')] bg-fixed bg-cover bg-center">
				<div className="absolute w-full h-full top-0 left-0 bg-black/60 z-[2] grid grid-cols-4 grid-flow-row px-8 py-16">
					<div />
					<div className="flex flex-col items-center justify-center w-full h-full relative border-2 px-8 col-span-2 space-y-4">
						<h1 className="text-5xl text-white leading-normal text-center">
							Let's build that dream project together.
						</h1>
						<p className="text-white w-[90%] text-lg leading-relaxed text-center">
							Whether you're still in the rough sketches or you have a fully planned structure in mind,
							it's never too early to involve us. We'll be with you in every step.
						</p>
						<Link href="/contact">
							<button className="mb-4 generic-transition border-2 border-white text-white hover:text-black hover:bg-white">
								Book a Consult
							</button>
						</Link>
					</div>
					<div></div>
				</div>
			</section>
		</>
	)
}

export default About

