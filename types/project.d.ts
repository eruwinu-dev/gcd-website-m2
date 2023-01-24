import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export type ModeType = "story" | "carousel"

export interface CategoryType {
	_id: string
	name: string
	slug: string
	description?: string
}

export interface PortfolioProjectType {
	_id: string
	name: string
	slug: string
	address: string
	imageList: SanityImageSource[]
	categories: string[]
}

export interface ProjectType extends PortfolioProjectType {
	team?: string
	body?: TypedObject
}

export interface ProjectTeamType {
	name: string
	position: string
}

