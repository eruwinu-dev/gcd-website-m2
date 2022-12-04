import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { SlugType } from "./slug"

export type ModeType = "story" | "carousel"

export interface CategoryType {
	_id: string
	name: string
	slug: SlugType
	description?: string
}

export interface ProjectType {
	_id: string
	name: string
	slug: SlugType
	address?: string
	team?: string
	imageList: SanityImageSource[]
	body?: TypedObject
	category: CategoryType
}

export interface ProjectLinkType {
	name: string
	slug: SlugType
}

export interface ProjectTeamType {
	name: string
	position: string
}

