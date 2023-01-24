import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export interface MemberListType {
	_id: string
	name: string
	slug: string
	role: string
	blogBio: string
	image: SanityImageSource
}

export interface MemberType extends MemberListType {
	otherImages?: string
	bio?: TypedObject
}

export interface TeamType {
	name: string
	role: string
}

