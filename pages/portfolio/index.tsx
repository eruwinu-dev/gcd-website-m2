import { GetServerSideProps } from "next"
import React, { useEffect, useRef } from "react"
import MetaHead from "../../components/MetaHead"
import PortfolioGallery from "../../components/PortfolioGallery"
import useStateContext from "../../context/State"
import client from "../../lib/client"
import { getProjects } from "../../lib/grocQueries"
import { headerTitle } from "../../lib/title"
import { ProjectType } from "../../types/project"

type Props = {
	projects: ProjectType[]
}

const Portfolio = ({ projects }: Props) => {
	const { setProjects } = useStateContext()

	const calledOnce = useRef(false)

	useEffect(() => {
		if (calledOnce.current) return
		else {
			setProjects(projects)
			calledOnce.current = true
		}
		return () => {}
	}, [setProjects, projects])

	return (
		<>
			<MetaHead
				title={`Portfolio | ${headerTitle}`}
				description="G. Charles Design has completed many projects shown in this portfolio gallery."
				url={process.env.NEXT_PUBLIC_SITE_URL + "/portfolio"}
				siteName={`Portfolio | ${headerTitle}`}
			/>
			<div className="portfolio-section">
				<PortfolioGallery />
			</div>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const projects = (await client.fetch(getProjects)) as ProjectType[]

	return {
		props: {
			projects,
		},
	}
}

export default Portfolio

