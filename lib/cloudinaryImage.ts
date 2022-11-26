import { buildImageUrl, buildVideoUrl } from "cloudinary-build-url"

export const getCloudinaryImageUrl = (publicId: string) => {
	const url = buildImageUrl(publicId, {
		cloud: {
			cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
		},
	})
	return url
}

export const getOptimizedImageUrl = (link: string) => {
	const publicId = link.split("/image/upload/")[1] || ""
	return getCloudinaryImageUrl(publicId)
}

export const getCloudinaryVideoUrl = (publicId: string) => {
	const url = buildVideoUrl(publicId, {
		cloud: {
			cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
		},
		transformations: {
			quality: "auto",
		},
	})
	return url
}

export const getOptimizedVideoUrl = (link: string) => {
	const publicId = link.split("/video/upload/")[1] || ""
	return getCloudinaryVideoUrl(publicId)
}

