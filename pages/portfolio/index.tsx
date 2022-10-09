import Head from "next/head"
import React from "react"
import PortfolioMasonry from "../../components/PortfolioMasonry"

type Props = {}

const Portfolio = (props: Props) => {
	return (
		<>
			<Head>
				<title>Portfolio | G Charles Design - Licensed Architectural Services</title>
			</Head>
			<div className="portfolio-section">
				<PortfolioMasonry />
			</div>
		</>
	)
}

export default Portfolio

