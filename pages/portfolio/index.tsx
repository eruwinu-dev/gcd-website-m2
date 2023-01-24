import { GetStaticProps } from "next"
import React from "react"
import MetaHead from "../../components/MetaHead"
import PortfolioGallery from "../../components/PortfolioGallery"
import client from "../../lib/client"
import { getProjects } from "../../lib/grocQueries"
import { headerTitle } from "../../lib/title"
import { PortfolioProjectType } from "../../types/project"

type Props = {
	projects: PortfolioProjectType[]
	categories: string[]
}

const Portfolio = ({ projects, categories }: Props) => {
	return (
		<>
			<MetaHead
				title={`Portfolio | ${headerTitle}`}
				description="G. Charles Design has completed many projects shown in this portfolio gallery."
				url={process.env.NEXT_PUBLIC_SITE_URL + "/portfolio"}
				siteName={`Portfolio | ${headerTitle}`}
			/>
			<div className="portfolio-section">
				{" "}
				<PortfolioGallery projects={projects} categories={categories} />
			</div>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const projects = (await client.fetch(getProjects)) as PortfolioProjectType[]
	const categories = [
		"all",
		...new Set(projects.reduce((group: string[], project) => [...group, ...project.categories], [])),
	]

	return {
		props: {
			projects,
			categories,
		},
	}
}

export default Portfolio

