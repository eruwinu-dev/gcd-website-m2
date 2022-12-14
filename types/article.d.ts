import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { SlugType } from "./slug"

export type AlignMainImageType = "left" | "right"

export interface AuthorType {
	name: string
	slug: SlugType
	image: SanityImageSource
	blogBio?: string
}

export interface ArticleItemType {
	_id: string
	publishedAt?: string
	title: string
	slug: SlugType
	description?: string
	mainImage: SanityImageSource
	author: AuthorType
	categories?: ArticleCategoryType[]
	otherImages?: string
	wordCount?: number
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

