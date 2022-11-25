import Image from "next/image"
import { useRouter } from "next/router"
import React, { MouseEvent } from "react"
import { getOptimizedImageUrl } from "../../../lib/cloudinaryImage"

type Props = {
	photo: string
	index: number
}

const ProjectGalleryItem = ({ photo, index }: Props) => {
	const router = useRouter()
	const { asPath } = router

	const viewGalleryItem = (index: number) => (event: MouseEvent) => {
		router.push(
			{
				pathname: asPath.split("?")[0],
				query: { mode: "carousel", photo: index },
			},
			undefined,
			{ shallow: true }
		)
		window.scrollTo(0, 0)
	}

	return (
		<div className="project-gallery-item" onClick={viewGalleryItem(index)}>
			<div className="relative w-full h-full overflow-hidden generic-transition hover:scale-105">
				<Image
					src={getOptimizedImageUrl(photo)}
					alt={photo}
					layout="fill"
					objectFit="cover"
					objectPosition="center"
				/>
			</div>
		</div>
	)
}

export default ProjectGalleryItem

