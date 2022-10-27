import Image from "next/image"
import { useRouter } from "next/router"
import React, { MouseEvent } from "react"
import useStateContext from "../../../context/State"

type Props = {
	photo: string
	index: number
}

const ProjectGalleryItem = ({ photo, index }: Props) => {
	const { setPage, direction } = useStateContext()
	const router = useRouter()
	const { asPath } = router

	const viewGalleryItem = (index: number) => (event: MouseEvent) => {
		setPage([index, direction])
		router.push(
			{
				pathname: asPath.split("?")[0],
				query: { mode: "carousel" },
			},
			undefined,
			{ shallow: true }
		)
		window.scrollTo(0, 0)
	}

	return (
		<div className="project-gallery-item" onClick={viewGalleryItem(index)}>
			<div className="relative w-full h-full overflow-hidden generic-transition hover:scale-105">
				<Image src={photo} alt={photo} layout="fill" objectFit="cover" objectPosition="center" />
			</div>
		</div>
	)
}

export default ProjectGalleryItem

