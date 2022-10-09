import React, { forwardRef } from "react"
import ProjectGalleryItem from "./ProjectGalleryItem"

type Props = {
	photos: string[]
}

const ProjectGallery = ({ photos }: Props) => {
	return (
		<div className="project-gallery">
			<div className="project-gallery-list">
				{photos.map((photo: string, index: number) => (
					<ProjectGalleryItem photo={photo} key={index} index={index} />
				))}
			</div>
		</div>
	)
}

export default ProjectGallery

