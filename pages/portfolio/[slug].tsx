import React from "react"
import { useRouter } from "next/router"

import { motion } from "framer-motion"
import { useNextSanityImage } from "next-sanity-image"
import { ParsedUrlQuery } from "querystring"

import type { GetStaticPaths, GetStaticProps } from "next"

import type { ModeType, ProjectType } from "../../types/project"

import ProjectStory from "../../components/ProjectStory"
import ProjectGallery from "../../components/ProjectGallery"
import ProjectViewMode from "../../components/ProjectViewMode"
import ProjectCarousel from "../../components/ProjectCarousel"
import ProjectBottomNav from "../../components/ProjectBottomNav"
import ProjectDescription from "../../components/ProjectDescription"
import MetaHead from "../../components/MetaHead"

import { headerTitle } from "../../lib/title"
import { getProjectBySlug, getProjectSlugs } from "../../lib/grocQueries"
import client from "../../lib/client"

type Props = {
	project: ProjectType
	previous: string | null
	next: string | null
}

interface StaticParams extends ParsedUrlQuery {
	slug: string
}

const Project = ({ project, previous, next }: Props) => {
	const {
		query: { mode },
	} = useRouter()
	const imageProps = useNextSanityImage(client, project.imageList[0])

	const viewMode = (mode || "story") as ModeType

	return (
		<>
			<MetaHead
				title={`${project.name} - Portfolio | ${headerTitle}`}
				description={project.name + " - a project by G. Charles Design"}
				url={process.env.NEXT_PUBLIC_SITE_URL + "/portfolio/" + project.slug}
				siteName={`${project.name} | ${headerTitle}`}
				image={imageProps.src}
			/>
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
					<div className="project-view-mode-container">
						{viewMode === "story" ? (
							<ProjectStory project={project} />
						) : project.imageList.length ? (
							<ProjectCarousel images={project.imageList} title={project.name} />
						) : null}
						<ProjectViewMode />
					</div>
				</motion.div>
			</section>
			<div className="portfolio-section">
				{viewMode === "story" ? (
					project.imageList.length ? (
						<ProjectGallery title={project.name} images={project.imageList} />
					) : null
				) : (
					<ProjectDescription project={project} />
				)}
				<ProjectBottomNav previous={previous || ""} next={next || ""} />
			</div>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await client.fetch(getProjectSlugs)

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug = "" } = params as StaticParams
	const { next, previous, ...project } = (await client.fetch(getProjectBySlug, { slug })) as {
		next: string | null
		previous: string | null
		project: ProjectType
	}

	return {
		props: {
			project,
			next,
			previous,
		},
	}
}

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

export default Project

