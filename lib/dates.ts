export const formatDateFromISO = (ISOString: string | undefined) => {
	return typeof ISOString === "undefined"
		? "NaN"
		: new Date(ISOString).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric",
		  })
}

