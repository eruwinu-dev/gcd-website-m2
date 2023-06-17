import React from "react"
import { useRouter } from "next/router"

import { useNextSanityImage } from "next-sanity-image"
import { ParsedUrlQuery } from "querystring"

import type { GetServerSideProps } from "next"

import type { AdjacentProject, ModeType, Project } from "../../types/project"

import ProjectStory from "../../components/ProjectStory"
import ProjectGallery from "../../components/ProjectGallery"
import ProjectViewMode from "../../components/ProjectViewMode"
import ProjectCarousel from "../../components/ProjectCarousel"
import ProjectBottomNav from "../../components/ProjectBottomNav"
import ProjectDescription from "../../components/ProjectDescription"
import MetaHead from "../../components/MetaHead"

import { headerTitle } from "../../lib/title"

import sanityClient from "../../lib/sanityClient"

import { getProject } from "../../lib/project/getProject"
import { getAdjacentProjects } from "../../lib/project/getAdjacentProjects"
import { QueryClient, dehydrate } from "@tanstack/react-query"

type Props = {
    project: Project
    next: AdjacentProject
    previous: AdjacentProject
}

interface StaticParams extends ParsedUrlQuery {
    slug: string
}

const Project = ({ project, next, previous }: Props) => {
    const {
        query: { mode },
    } = useRouter()
    const imageProps = useNextSanityImage(sanityClient, project.images[0])

    const viewMode = (mode || "story") as ModeType

    return (
        <>
            <MetaHead
                title={`${project.name} - Portfolio | ${headerTitle}`}
                description={project.name + " - a project by G. Charles Design"}
                url={
                    process.env.NEXT_PUBLIC_SITE_URL +
                    "/portfolio/" +
                    project.slug
                }
                siteName={`${project.name} | ${headerTitle}`}
                image={imageProps.src}
            />
            <section
                className={[
                    viewMode === "carousel" ? "translate-y-0" : "",
                    "h-fit",
                ].join(" ")}
            >
                <div className={["w-full h-fit"].join(" ")}>
                    {viewMode === "story" && <ProjectStory project={project} />}
                    {viewMode === "carousel" && project.images.length && (
                        <ProjectCarousel
                            images={project.images}
                            title={project.name}
                        />
                    )}
                    <ProjectViewMode />
                </div>
            </section>
            <div className="portfolio-section">
                {viewMode === "story" ? (
                    project.images.length ? (
                        <ProjectGallery
                            title={project.name}
                            images={project.images}
                        />
                    ) : null
                ) : (
                    <ProjectDescription project={project} />
                )}
                <ProjectBottomNav previous={previous} next={next} />
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug = "" } = params as StaticParams

    const project = await getProject(slug)
    const [previous, next] = await getAdjacentProjects(slug)

    if (!project) {
        return {
            notFound: true,
        }
    }

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ["projects", slug],
        queryFn: async () => ({ project, next, previous }),
    })

    return {
        props: {
            project,
            previous,
            next,
            dehydratedState: dehydrate(queryClient),
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
