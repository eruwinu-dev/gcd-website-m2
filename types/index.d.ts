import { MutableRefObject } from "react"

export type ModeType = "story" | "carousel"

export interface TeamType {
	url: string
	name: string
	pictures: string[]
	role: string
	text: string
}

export interface TeamMemberType {
	name: string
	role: string
}

export interface ProjectType {
	url: string
	name: string
	text: string
	photos: string[]
	address: string
	team: TeamMemberType[]
}

interface FormType {
	name: string
	email: string
	company: string
	message: string
}

export interface ContextType {
	storyOpen: boolean
	setStoryOpen: Dispatch<SetStateAction<boolean>>
	viewMode: ModeType
	setViewMode: (mode: ModeType) => void
	page: number
	direction: number
	setPage: Dispatch<SetStateAction<[number, number]>>
}

