import buildUrl from "cloudinary-build-url"

export const getCloudinaryImageUrl = (publicId: string) => {
	const url = buildUrl(publicId, {
		cloud: {
			cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
		},
	})
	return url
}

