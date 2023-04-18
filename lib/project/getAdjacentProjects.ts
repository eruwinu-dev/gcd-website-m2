import { AdjacentProject } from "../../types/project"
import sanityClient from "../sanityClient"
import groq from "groq"

export const getAdjacentProjects = async (slug: string) => {
    const result = (await sanityClient.fetch(
        groq`*[_type == "projectList" && name == "Default"][0] {
            "projects": projects[] -> {
              name,
              "slug": slug.current,
            }
        }`,
        { slug }
    )) as { projects: AdjacentProject[] }

    const projects = result?.projects || []

    if (!projects.length) return [null, null]

    const currentProject = projects.find((project) => project.slug === slug)

    const slugIndex = currentProject ? projects.indexOf(currentProject) : -1

    return slugIndex === -1
        ? [null, null]
        : [projects[slugIndex - 1] || null, projects[slugIndex + 1] || null]
}
