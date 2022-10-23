import Head from "next/head"
import React from "react"
import PortfolioGallery from "../../components/PortfolioGallery"
import { headerTitle } from "../../lib/title"

type Props = {}

const Portfolio = (props: Props) => {
	return (
		<>
			<Head>
				<title>{`Portfolio | ${headerTitle}`}</title>
			</Head>
			<div className="portfolio-section">
				<PortfolioGallery />
			</div>
		</>
	)
}

export default Portfolio

