import React from "react"

import type { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"

import type { ProjectType } from "../../types"

import ProjectStory from "../../components/ProjectStory"
import ProjectGallery from "../../components/ProjectGallery"
import ProjectViewMode from "../../components/ProjectViewMode"
import ProjectCarousel from "../../components/ProjectCarousel"

import { getProjectText } from "../../lib/api"
import mdToHtml from "../../lib/mdToHtml"
import { projects } from "../../lib/projects"
import useStateContext from "../../context/State"
import ProjectBottomNav from "../../components/ProjectBottomNav"
import ProjectDescription from "../../components/ProjectDescription"

type Props = {}

const Project = ({ project, html }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { viewMode } = useStateContext()

	return (
		<>
			<Head>
				<title>{`${project.name} | G Charles Design - Licensed Architecture Services`}</title>
			</Head>
			<section className="project-section">
				<div className="project-landing-container">
					<ProjectViewMode />
					{viewMode === "story" ? (
						<ProjectStory project={project} html={html} />
					) : (
						<ProjectCarousel project={project} />
					)}
				</div>
			</section>
			<div className="portfolio-section">
				{viewMode === "story" ? (
					<ProjectGallery projectName={project.name} photos={project.photos} />
				) : (
					<ProjectDescription project={project} html={html} />
				)}
				<ProjectBottomNav project={project} />
			</div>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: projects.map((project: ProjectType) => ({ params: { project: project.url } })),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const project: ProjectType | undefined = projects.find((project: ProjectType) => project.url === params?.project)

	const content = typeof project === "undefined" ? "" : getProjectText(project)
	const html = await mdToHtml(content || "")

	if (!project) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			project,
			html,
		},
	}
}

export default Project

