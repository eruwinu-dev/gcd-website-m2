import { format, parseISO } from "date-fns"

export const formatDateFromISO = (ISOString: string | undefined) => {
	if (typeof ISOString === "undefined") return "Invalid Date"
	return format(parseISO(ISOString), "LLL d, yyyy")
}

