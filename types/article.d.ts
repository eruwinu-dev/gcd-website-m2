import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { SlugType } from "./slug"

export type AlignMainImageType = "left" | "right"

export interface AuthorType {
	name: string
	slug: string
	image: SanityImageSource
	blogBio?: string
}

export interface ArticleItemType {
	_id: string
	publishedAt?: string
	title: string
	slug: string
	description?: string
	mainImage: SanityImageSource
	author: AuthorType
	categories: string[]
	wordCount: number
}

export interface ArticleType extends ArticleItemType {
	body?: TypedObject
	recos: ArticleItemType[]
}

export interface ArticleCategoryType {
	title: string
	description?: string
	count: number
}

