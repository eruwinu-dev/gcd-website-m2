import Head from "next/head"
import React from "react"

type Props = {}

const Home = (props: Props) => {
	return (
		<>
			<Head>
				<title>G Charles Design - Licensed Architectural Services</title>
			</Head>
			<section>
				<div className="landing-image"></div>
				<div>
					<h1>Client Focused, Licensed Architecture Services.</h1>
				</div>
			</section>
		</>
	)
}

export default Home

