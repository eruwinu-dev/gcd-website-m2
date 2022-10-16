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
import { motion } from "framer-motion"

type Props = {}

const sectionVariants = {
	story: {
		width: "100%",
		x: "0vw",
	},
	carousel: {
		width: "96vw",
		x: "2vw",
	},
}

const Project = ({ project, html }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { viewMode } = useStateContext()

	return (
		<>
			<Head>
				<title>{`${project.name} | G Charles Design - Licensed Architecture Services`}</title>
			</Head>
			<section className={[viewMode === "carousel" ? "translate-y-0" : "", "generic-transition h-fit"].join(" ")}>
				<motion.div
					className={["w-full h-fit"].join(" ")}
					variants={sectionVariants}
					initial="story"
					animate={viewMode}
					transition={{
						ease: "easeInOut",
						duration: 0.5,
					}}
				>
					<div className="w-full h-fit flex flex-col items-center justify-center relative">
						{viewMode === "story" ? (
							<ProjectStory project={project} html={html} />
						) : (
							<ProjectCarousel project={project} />
						)}
						<ProjectViewMode />
					</div>
				</motion.div>
			</section>
			<div className="portfolio-section">
				{viewMode === "story" ? (
					<ProjectGallery photos={project.photos} />
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

