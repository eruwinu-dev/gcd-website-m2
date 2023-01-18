import Head from "next/head"
import React from "react"
import Image from "next/image"

import ProcessTimeline from "../components/ProcessTimeline"

import { headerTitle } from "../lib/title"
import { sanityImageLoader } from "../lib/sanityImageLoader"

type Props = {}

const Process = (props: Props) => {
	return (
		<>
			<Head>
				<title>{`Process | ${headerTitle}`}</title>
			</Head>

			<section className="banner-section">
				<Image
					src={processImage}
					loader={sanityImageLoader}
					alt={"The veranda of the building from the A Montecito Classic, a project from G. Charles Design"}
					layout="fill"
					objectFit="cover"
					objectPosition="left"
					priority
				/>
				<div className="banner-mask lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
					<div className="banner-spacer" />
					<div className="flex flex-col items-end justify-center w-full h-full relative border-2 px-8 lg:text-end md:text-end text-center">
						<h1 className="banner-title">Excellence in client satisfaction.</h1>
						<p className="banner-subtitle">
							GCD strives to create architecture that stands as a unique and enduring representation of
							who our clients are.
						</p>
					</div>
				</div>
			</section>
			<section className="process-blockquote">
				<p>
					By hiring a licensed architect, you gain creative expertise through the design process coupled with
					years of experience getting plans approved by various jurisdictions.
				</p>
			</section>
			<ProcessTimeline />
		</>
	)
}

const processImage =
	"https://cdn.sanity.io/images/1apv929p/production/f07ddafe01db7857dbf2ada96f766bb74a172b14-3072x2048.jpg"

export default Process

