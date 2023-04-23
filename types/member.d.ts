import { SanityImageWithMetaData } from "./image"

export interface BaseMember {
    _id: string
    name: string
    slug: string
    image: SanityImageWithMetaData
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
