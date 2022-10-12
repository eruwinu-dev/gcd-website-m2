import React, { ReactNode } from "react"
import useStateContext from "../../context/State"

type Props = {
	children: ReactNode
}

const CustomMain = ({ children }: Props) => {
	const { headerOpen } = useStateContext()

	return <main className={[headerOpen ? "max-h-screen overflow-hidden" : ""].join(" ")}>{children}</main>
}

export default CustomMain

