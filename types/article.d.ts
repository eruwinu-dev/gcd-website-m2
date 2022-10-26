import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export type AlignMainImageType = "left" | "right"

export interface Slugtype {
	_type: string
	current: string
}

export interface ArticleItemType {
	_id: string
	publishedAt?: string
	title: string
	slug: Slugtype
	description?: string
	mainImage?: SanityImageSource
	name: string
	categories?: string[]
	otherImages?: string
	wordCount?: number
}

export interface ArticleType extends ArticleItemType {
	body?: TypedObject
	recos: ArticleItemType[]
}

