export const formatDateFromISO = (ISOString: string) => {
	return new Date(ISOString).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	})
}

