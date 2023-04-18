import { Category } from "../../types/category"
import sanityClient from "../sanityClient"
import groq from "groq"

export const getProjectCategories = async () => {
    const result =
        (await sanityClient.fetch(groq`*[_type == "category" && categoryType == "project"] {
            title,
            "slug": slug.current,
          }`)) as Category[]
    return [{ title: "All", slug: "all" }, ...result]
}
