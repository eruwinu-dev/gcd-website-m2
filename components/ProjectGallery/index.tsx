import React from "react"

import ProjectGalleryItem from "./ProjectGalleryItem"
import { SanityImageWithMetaData } from "../../types/image"

type Props = {
    images: SanityImageWithMetaData[]
    title: string
}

const ProjectGallery = ({ images, title }: Props) => {
    return (
        <div className="project-gallery">
            <div className="project-gallery-list">
                {images.map((image, index) => (
                    <ProjectGalleryItem
                        title={title}
                        image={image}
                        key={index}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectGallery
