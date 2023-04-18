import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export interface BaseMember {
    _id: string
    name: string
    slug: string
    image: SanityImageSource
}

export interface MemberLink extends BaseMember {
    role: string
    licenses: string[]
}

export interface PostMember extends BaseMember {
    blogBio: TypedObject
}

export interface Member extends MemberLink {
    bio: TypedObject
}
