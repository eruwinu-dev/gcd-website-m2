import React from "react"
import { useRouter } from "next/router"

import type { ProjectLink } from "../../../types/project"

import PortfolioGalleryItem from "./PortfolioGalleryItem"

type Props = {
    projects: ProjectLink[]
}

const PortfolioGalleryGroup = ({ projects }: Props) => {
    const {
        query: { category },
    } = useRouter()

    return (
        <div
            key={(category || "all") as string}
            className="portfolio-gallery-group"
        >
            {projects.map((project) => (
                <PortfolioGalleryItem key={project._id} project={project} />
            ))}
        </div>
    )
}

export default PortfolioGalleryGroup
