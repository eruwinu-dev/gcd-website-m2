import { Category } from "../../types/category"
import { BasePost } from "../../types/post"
import sanityClient from "../sanityClient"
import groq from "groq"

export const getSlugs = async (type: "post" | "project" | "author") => {
    const slugs = await sanityClient.fetch(
        groq`*[_type == $type].slug.current`,
        { type }
    )
    return slugs
}
