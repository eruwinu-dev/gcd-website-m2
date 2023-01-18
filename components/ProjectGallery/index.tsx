import React from "react"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

import ProjectGalleryItem from "./ProjectGalleryItem"

type Props = {
	images: SanityImageSource[]
	title: string
}

const ProjectGallery = ({ images, title }: Props) => {
	return (
		<div className="project-gallery">
			<div className="project-gallery-list">
				{images.map((photo: SanityImageSource, index: number) => (
					<ProjectGalleryItem title={title} photo={photo} key={index} index={index} />
				))}
			</div>
		</div>
	)
}

export default ProjectGallery

