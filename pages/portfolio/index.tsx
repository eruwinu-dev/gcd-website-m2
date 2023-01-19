import { GetStaticProps } from "next"
import React from "react"
import MetaHead from "../../components/MetaHead"
import PortfolioGallery from "../../components/PortfolioGallery"
import client from "../../lib/client"
import { getProjects } from "../../lib/grocQueries"
import { headerTitle } from "../../lib/title"
import { ProjectType } from "../../types/project"

type Props = {
	projects: ProjectType[]
}

const Portfolio = ({ projects }: Props) => {
	return (
		<>
			<MetaHead
				title={`Portfolio | ${headerTitle}`}
				description="G. Charles Design has completed many projects shown in this portfolio gallery."
				url={process.env.NEXT_PUBLIC_SITE_URL + "/portfolio"}
				siteName={`Portfolio | ${headerTitle}`}
			/>
			<div className="portfolio-section">
				<PortfolioGallery projects={projects} />
			</div>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const projects = (await client.fetch(getProjects)) as ProjectType[]

	return {
		props: {
			projects,
		},
	}
}

export default Portfolio

