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
	}

	return (
		<div
			className="w-full aspect-video inline-block group mb-8 relative cursor-pointer hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl hover:opacity-100 opacity-80"
			onClick={viewGalleryItem(index)}
		>
			<div className="relative w-full h-full">
				<Image className="rounded-xl" layout="fill" src={photo} alt={photo} />
			</div>
		</div>
	)
}

export default ProjectGalleryItem

