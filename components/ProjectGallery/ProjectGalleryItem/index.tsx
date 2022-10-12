import Image from "next/image"
import React, { MouseEvent } from "react"
import useStateContext from "../../../context/State"

type Props = {
	photo: string
	index: number
}

const ProjectGalleryItem = ({ photo, index }: Props) => {
	const { setViewMode, setPage, direction } = useStateContext()

	const viewGalleryItem = (index: number) => (event: MouseEvent) => {
		setPage([index, direction])
		setViewMode("carousel")
		window.scrollTo(0, 0)
	}

	return (
		<div className="project-gallery-item" onClick={viewGalleryItem(index)}>
			<div className="relative w-full h-full overflow-hidden generic-transition hover:scale-110">
				<Image layout="fill" src={photo} alt={photo} />
			</div>
		</div>
	)
}

export default ProjectGalleryItem

