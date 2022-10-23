import Head from "next/head"
import React from "react"
import { headerTitle } from "../../lib/title"

type Props = {}

const Article = (props: Props) => {
	return (
		<>
			<Head>
				<title>{`News | ${headerTitle}`}</title>
			</Head>
			<section>News</section>`
		</>
	)
}

export default Article

