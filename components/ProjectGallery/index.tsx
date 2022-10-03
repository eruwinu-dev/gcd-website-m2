import React from "react"
import ProjectGalleryItem from "./ProjectGalleryItem"

type Props = {
	projectName: string
	photos: string[]
}

const ProjectGallery = ({ projectName, photos }: Props) => {
	return (
		<div className="project-gallery">
			<h1>{projectName}</h1>
			<h3>Gallery</h3>
			<div className="project-gallery-list">
				{photos.map((photo: string, index: number) => (
					<ProjectGalleryItem photo={photo} key={index} index={index} />
				))}
			</div>
		</div>
	)
}

export default ProjectGallery

