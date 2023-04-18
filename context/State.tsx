import React, { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
import type { ContextType } from "../types/state"
import type { FormType } from "../types/form"
import emailjs from "@emailjs/browser"

type Props = {
    children: ReactNode
}

const Context = createContext<ContextType | null>(null)

export const Provider = ({ children }: Props) => {
    const [storyOpen, setStoryOpen] = useState<boolean>(false)
    const [headerOpen, setHeaderOpen] = useState<boolean>(false)

    const [contactLoading, setContactLoading] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const [load, setLoad] = useState<boolean>(false)

    const [articlesLoading, setArticlesLoading] = useState<boolean>(false)

    const addContact = async (values: FormType) => {
        let emailStatus
        try {
            setContactLoading(true)
            setModalOpen(true)

            const { status } = await emailjs.send(
                process!.env!.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process!.env!.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                { ...values, id: Math.floor(Math.random() * 1000) },
                process!.env!.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            )
            emailStatus = status
        } catch (error) {
            console.log(error)
        } finally {
            if (!emailStatus) return
            setContactLoading(false)
        }
    }

    const value: ContextType = {
        storyOpen,
        setStoryOpen,
        headerOpen,
        setHeaderOpen,
        addContact,
        modalOpen,
        setModalOpen,
        contactLoading,
        setContactLoading,
        articlesLoading,
        load,
        setLoad,
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

const useStateContext = () => useContext(Context) as ContextType

export default useStateContext
