import React, { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
import type { ContextType, ModeType } from "../types"

type Props = {
	children: ReactNode
}

const Context = createContext<ContextType | null>(null)

export const Provider = ({ children }: Props) => {
	const [storyOpen, setStoryOpen] = useState<boolean>(false)
	const [viewMode, setViewMode] = useState<ModeType>("story")
	const [[page, direction], setPage] = useState([0, 0])

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection])
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
	}

	return <Context.Provider value={value}>{children}</Context.Provider>
}

const useStateContext = () => useContext(Context) as ContextType

export default useStateContext

