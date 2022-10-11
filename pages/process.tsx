import Head from "next/head"
import Image from "next/image"
import React from "react"
import ProcessTimeline from "../components/ProcessTimeline"

type Props = {}

const Process = (props: Props) => {
	return (
		<>
			<Head>
				<title>Process | G Charles Design - Licensed Architectural Services</title>
			</Head>

			<section className="relative w-full h-full aspect-video bg-[url('https://i.ibb.co/8PNkG2s/Balcony-1.jpg')] bg-cover">
				<div className="absolute w-full h-full top-0 left-0 bg-black/40 z-[2] grid grid-cols-2 grid-flow-row px-8 py-16">
					<div></div>
					<div className="flex flex-col items-end justify-center w-full h-full relative border-2 px-8 text-end">
						<h1 className="text-5xl text-white mb-4 leading-normal">Excellence in client satisfaction.</h1>
						<p className="text-white w-3/5 text-xl leading-relaxed">
							GCD strives to create architecture that stands as a unique and enduring representation of
							who our clients are.
						</p>
					</div>
				</div>
			</section>
			<div className="w-full min-h-[35vh] max-h-fit flex flex-row items-center justify-center py-8">
				<div className="w-1/2 h-auto flex flex-col items-center justify-center border-2 border-black p-16">
					<p className="indent-4 text-justify leading-loose tracking-wider text-lg w-full italic">
						By hiring a licensed architect, you gain creative expertise through the design process coupled
						with years of experience getting plans approved by various jurisdictions.
					</p>
				</div>
			</div>
			<ProcessTimeline />
		</>
	)
}

export default Process

