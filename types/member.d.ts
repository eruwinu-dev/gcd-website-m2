import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { SlugType } from "./slug"

export interface MemberType {
	_id: string
	name: string
	slug: SlugType
	order: number
	role?: string
	image: SanityImageSource
	otherImages?: string
	bio?: TypedObject
	blogBio?: string
}

export interface TeamType {
	name: string
	role: string
}

