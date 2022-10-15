import React, { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
import type { ContextType, FormType, ModeType } from "../types"
import Parse from "parse"
import { initializeParse } from "@parse/react-ssr"

type Props = {
	children: ReactNode
}

const Context = createContext<ContextType | null>(null)

export const Provider = ({ children }: Props) => {
	const [storyOpen, setStoryOpen] = useState<boolean>(false)
	const [viewMode, setViewMode] = useState<ModeType>("story")
	const [[page, direction], setPage] = useState([0, 0])
	const [headerOpen, setHeaderOpen] = useState<boolean>(false)

	const [contactLoading, setContactLoading] = useState<boolean>(false)
	const [modalOpen, setModalOpen] = useState<boolean>(false)

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection])
	}

	const addContact = async (values: FormType) => {
		initializeParse(
			process!.env!.NEXT_PUBLIC_CUSTOM_URL || "",
			process.env.NEXT_PUBLIC_APP_ID || "",
			process.env.NEXT_PUBLIC_JS_KEY || ""
		)
		try {
			setContactLoading(true)
			setModalOpen(true)
			const contact = new Parse.Object("Contact")
			await contact.save(values)
		} catch (error) {
			console.log(error)
		} finally {
			setContactLoading(false)
		}
	}

	const value: ContextType = {
		storyOpen,
		setStoryOpen,
		viewMode,
		setViewMode,
		page,
		direction,
		setPage,
		paginate,
		headerOpen,
		setHeaderOpen,
		addContact,
		modalOpen,
		setModalOpen,
		contactLoading,
		setContactLoading,
	}

	return <Context.Provider value={value}>{children}</Context.Provider>
}

const useStateContext = () => useContext(Context) as ContextType

export default useStateContext

