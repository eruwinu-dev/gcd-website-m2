import React from "react"
import { useRouter } from "next/router"

import { motion } from "framer-motion"
import { useNextSanityImage } from "next-sanity-image"
import { ParsedUrlQuery } from "querystring"

import type { GetServerSideProps } from "next"

import type { ModeType } from "../../types/project"

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
import { useGetProject } from "../../hooks/project/useGetProject"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

type Props = {
    slug: string
    image: SanityImageSource
}

interface StaticParams extends ParsedUrlQuery {
    slug: string
}

const Project = ({ slug, image }: Props) => {
    const {
        query: { mode },
    } = useRouter()
    const imageProps = useNextSanityImage(sanityClient, image)

    const viewMode = (mode || "story") as ModeType

    const { data } = useGetProject(slug)

    if (!data) return <></>

    return (
        <>
            <MetaHead
                title={`${data.project.name} - Portfolio | ${headerTitle}`}
                description={
                    data.project.name + " - a project by G. Charles Design"
                }
                url={process.env.NEXT_PUBLIC_SITE_URL + "/portfolio/" + slug}
                siteName={`${data.project.name} | ${headerTitle}`}
                image={imageProps.src}
            />
            <section
                className={[
                    viewMode === "carousel" ? "translate-y-0" : "",
                    "generic-transition h-fit",
                ].join(" ")}
            >
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
                            <ProjectStory project={data.project} />
                        ) : data.project.images.length ? (
                            <ProjectCarousel
                                images={data.project.images}
                                title={data.project.name}
                            />
                        ) : null}
                        <ProjectViewMode />
                    </div>
                </motion.div>
            </section>
            <div className="portfolio-section">
                {viewMode === "story" ? (
                    data.project.images.length ? (
                        <ProjectGallery
                            title={data.project.name}
                            images={data.project.images}
                        />
                    ) : null
                ) : (
                    <ProjectDescription project={data.project} />
                )}
                <ProjectBottomNav previous={data.previous} next={data.next} />
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
            slug: project.slug,
            image: project.images[0],
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
