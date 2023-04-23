import { SanityImageWithMetaData } from "./image"

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
    mainImage: SanityImageWithMetaData
}

export interface Project extends BaseProject {
    address: string
    members: ProjectMember[]
    images: SanityImageWithMetaData[]
    body: TypedObject
}
