import { GetStaticProps } from "next"
import Head from "next/head"
import React, { useEffect, useRef } from "react"
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
	}, [])

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

export const getStaticProps: GetStaticProps = async () => {
	const projects = (await client.fetch(getProjects)) as ProjectType[]

	return {
		props: {
			projects,
		},
	}
}

export default Portfolio

