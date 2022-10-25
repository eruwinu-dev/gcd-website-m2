import sanityClient from "@sanity/client"

export default sanityClient({
	projectId: "1apv929p",
	dataset: "production",
	useCdn: true,
	apiVersion: "2021-10-21",
})

