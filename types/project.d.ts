import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export type ModeType = "story" | "carousel"

export interface ProjectMember {
    name: string
    role: string
}

export interface AdjacentProject {
    name: string
    slug: string
}

export interface BaseProject {
    _id: string
    name: string
    slug: string
    categories: string[]
}

export interface ProjectLink extends BaseProject {
    address: string
    members: ProjectMember[]
    mainImage: SanityImageSource
}

export interface Project extends BaseProject {
    address: string
    members: ProjectMember[]
    images: SanityImageSource[]
    body: TypedObject
}
