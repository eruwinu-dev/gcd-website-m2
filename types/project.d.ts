export type ModeType = "story" | "carousel"

export type ProjectCategoryType = "single" | "retail" | "multi"

export type ProjectCategoryOptionsType = ProjectCategoryType | "all"

export interface CategoryType {
	name: string
	category: ProjectCategoryType | "all"
}

export interface ProjectType {
	url: string
	name: string
	text: string
	photos: string[]
	address: string
	team: TeamType[]
	category: ProjectCategoryType
}

