import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { PostMember } from "./member"
import { SanityImageWithMetaData } from "./image"

export interface BasePost {
    _id: string
    title: string
    slug: string
    description: string
    mainImage: SanityImageWithMetaData
    categories: string[]
    publishedAt: string
    wordCount: number
}

export interface Post extends BasePost {
    author: PostMember
    body: TypedObject
}
