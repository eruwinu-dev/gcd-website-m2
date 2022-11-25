import React, { useMemo } from "react"
import ProjectGalleryItem from "./ProjectGalleryItem"

type Props = {
	images: string
}

const ProjectGallery = ({ images }: Props) => {
	const imagesList = useMemo(() => images.split("\n"), [images])

	return (
		<div className="project-gallery">
			<div className="project-gallery-list">
				{imagesList.map((photo: string, index: number) => (
					<ProjectGalleryItem photo={photo} key={index} index={index} />
				))}
			</div>
		</div>
	)
}

export default ProjectGallery

