import { MutableRefObject } from "react"

export type LinkType = {
	name: string
	url: string
}

export type ModeType = "story" | "carousel"

export interface MemberType {
	url: string
	name: string
	pictures: string[]
	role: string
	text: string
}

export interface TeamType {
	name: string
	role: string
}

export interface ProjectType {
	url: string
	name: string
	text: string
	photos: string[]
	address: string
	team: TeamType[]
}

export interface FormType {
	name: string
	email: string
	company: string
	message: string
}

export interface ProcessType {
	phase: string
	title: string
	description: string
	photo: string
}

export interface ServiceType {
	title: string
	description: string
	photo: string
}

export interface CollageType {
	format: string
	picture: string
}

export interface ContextType {
	storyOpen: boolean
	setStoryOpen: Dispatch<SetStateAction<boolean>>
	viewMode: ModeType
	setViewMode: (mode: ModeType) => void
	page: number
	direction: number
	setPage: Dispatch<SetStateAction<[number, number]>>
	paginate: (newDirection: number) => void
	headerOpen: boolean
	setHeaderOpen: Dispatch<SetStateAction<boolean>>
}

