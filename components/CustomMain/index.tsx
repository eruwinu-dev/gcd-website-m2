import { useRouter } from "next/router"
import React, { ReactNode } from "react"
import useStateContext from "../../context/State"

type Props = {
	children: ReactNode
}

const CustomMain = ({ children }: Props) => {
	const { headerOpen, load } = useStateContext()
	const { pathname } = useRouter()

	return (
		<main className={[headerOpen || (pathname === "/" && load) ? "max-h-screen overflow-hidden" : ""].join(" ")}>
			{children}
		</main>
	)
}

export default CustomMain

