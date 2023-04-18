import { Category } from "../../types/category"
import { ProjectLink } from "../../types/project"
import sanityClient from "../sanityClient"
import groq from "groq"

export const getProjects = async () => {
    const { projects, categories } =
        (await sanityClient.fetch(groq`*[_type == "projectList" && name == "Default"][0] {
            "projects": projects[] -> {
              _id,
              name,
              "slug": slug.current,
              "categories": categories[] -> slug.current,
              address,
              "mainImage": images[0],
            },
            "categories": *[_type == "category" && categoryType == "project"] {
                title,
                "slug": slug.current,
            }
        }`)) as { projects: ProjectLink[]; categories: Category[] }
    return {
        projects,
        categories,
    }
}
