import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { SlugType } from "./slug"

export type ModeType = "story" | "carousel"

export interface CategoryType {
	_id: string
	name: string
	slug: SlugType
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

export interface ProjectLinkType {
	name: string
	slug: SlugType
}

export interface ProjectTeamType {
	name: string
	position: string
}

