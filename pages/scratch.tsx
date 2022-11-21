import React from "react"

import { buildUrl } from "cloudinary-build-url"
import Image from "next/image"
import Head from "next/head"

type Props = {}

const url = buildUrl("v1668946670/gcd-website/coding.jpg", {
	cloud: {
		cloudName: "dr8eirysm",
	},
	transformations: {},
})

const Scratch = (props: Props) => {
	return (
		<>
			<Head>
				<title>Hello</title>
			</Head>
			<section className="w-full min-h-screen max-h-fit flex flex-col items-center justify-center">
				<div className="w-1/4 h-auto aspect-video relative border-2">
					<Image src={url} alt="Cloudinary Image" layout="fill" />
				</div>
				{url} <br />
				{`https://res.cloudinary.com/dr8eirysm/image/upload/v1668946670/gcd-website/coding.jpg`}
			</section>
		</>
	)
}

export default Scratch

