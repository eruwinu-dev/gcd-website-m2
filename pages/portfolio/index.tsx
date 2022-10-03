import Head from "next/head"
import React from "react"
import ProjectMasonry from "../../components/ProjectMasonry"

type Props = {}

const Portfolio = (props: Props) => {
	return (
		<>
			<Head>
				<title>Portfolio | G Charles Design - Licensed Architectural Services</title>
			</Head>
			<div className="portfolio-section">
				<ProjectMasonry />
			</div>
		</>
	)
}

export default Portfolio

