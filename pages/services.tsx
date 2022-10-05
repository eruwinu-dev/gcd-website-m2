import Head from "next/head"
import React from "react"
import ProcessTimeline from "../components/ProcessTimeline"

type Props = {}

const Services = (props: Props) => {
	return (
		<>
			<Head>
				<title>Services | G Charles Design - Licensed Architectural Services</title>
			</Head>
			<section>
				<div></div>
				<div></div>
			</section>
			<section className="flex flex-col items-center justify-center min-h-0 max-h-fit py-4 space-y-4">
				<h1 className="mb-4">Our Process</h1>
				<ProcessTimeline />
			</section>
		</>
	)
}

export default Services

