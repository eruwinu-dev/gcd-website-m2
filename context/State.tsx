import React, { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
import type { ContextType } from "../types/state"
import type { FormType } from "../types/form"
import Parse from "parse"
import { initializeParse } from "@parse/react-ssr"
import emailjs from "@emailjs/browser"
import { ModeType } from "../types/project"

type Props = {
	children: ReactNode
}

const Context = createContext<ContextType | null>(null)

export const Provider = ({ children }: Props) => {
	const [storyOpen, setStoryOpen] = useState<boolean>(false)
	const [[page, direction], setPage] = useState([0, 0])
	const [headerOpen, setHeaderOpen] = useState<boolean>(false)

	const [contactLoading, setContactLoading] = useState<boolean>(false)
	const [modalOpen, setModalOpen] = useState<boolean>(false)

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection])
	}

	const addContact = async (values: FormType) => {
		let contactId
		let emailStatus
		initializeParse(
			process!.env!.NEXT_PUBLIC_CUSTOM_URL || "",
			process.env.NEXT_PUBLIC_APP_ID || "",
			process.env.NEXT_PUBLIC_JS_KEY || ""
		)
		try {
			setContactLoading(true)
			setModalOpen(true)
			const contact = new Parse.Object("Contact")
			const { id } = await contact.save(values)
			contactId = id
			const { status } = await emailjs.send(
				process!.env!.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
				process!.env!.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
				{ ...values, id },
				process!.env!.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
			)
			emailStatus = status
		} catch (error) {
			console.log(error)
		} finally {
			if (!contactId || !emailStatus) return
			setContactLoading(false)
		}
	}

	const value: ContextType = {
		storyOpen,
		setStoryOpen,
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

