import React, { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
import type { ContextType } from "../types/state"
import type { FormType } from "../types/form"
import Parse from "parse"
import { initializeParse } from "@parse/react-ssr"
import emailjs from "@emailjs/browser"
import { ArticleCategoryType, ArticleItemType } from "../types/article"
import client from "../lib/client"
import { ParsedUrlQuery } from "querystring"
import { getMoreArticlesByCategoryQuery, getMoreArticlesQuery } from "../lib/grocQueries"

type Props = {
	children: ReactNode
}

interface ArticleStaticParams extends ParsedUrlQuery {
	currentSlugs: string[]
	category?: string
}

const Context = createContext<ContextType | null>(null)

export const Provider = ({ children }: Props) => {
	const [storyOpen, setStoryOpen] = useState<boolean>(false)
	const [headerOpen, setHeaderOpen] = useState<boolean>(false)

	const [contactLoading, setContactLoading] = useState<boolean>(false)
	const [modalOpen, setModalOpen] = useState<boolean>(false)

	const [load, setLoad] = useState<boolean>(false)

	const [articlesLoading, setArticlesLoading] = useState<boolean>(false)
	const [articles, setArticles] = useState<ArticleItemType[]>([])

	const [categories, setCategories] = useState<ArticleCategoryType[]>([])

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

	const getMoreArticles = async (categoryString: string | undefined) => {
		try {
			setArticlesLoading(true)
			const { currentSlugs = [], category = undefined } = {
				currentSlugs: articles.map((article: ArticleItemType) => article.slug.current),
				category: categoryString,
			} as ArticleStaticParams
			const moreArticles = !category
				? await client.fetch(getMoreArticlesQuery, { currentSlugs })
				: ((await client.fetch(getMoreArticlesByCategoryQuery, {
						currentSlugs,
						category,
				  })) as ArticleItemType[])
			if (!moreArticles.length) return
			setArticles([...articles, ...moreArticles])
		} finally {
			setArticlesLoading(false)
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
		articles,
		setArticles,
		articlesLoading,
		getMoreArticles,
		categories,
		setCategories,
		load,
		setLoad,
	}

	return <Context.Provider value={value}>{children}</Context.Provider>
}

const useStateContext = () => useContext(Context) as ContextType

export default useStateContext

