import { Project } from "../../types/project"
import sanityClient from "../sanityClient"
import groq from "groq"

export const getProject = async (slug: string) => {
    const project = (await sanityClient.fetch(
        groq`*[_type == "project" && slug.current == $slug][0] {
            _id,
            name,
            "slug": slug.current,
            "categories": categories[] -> slug.current,
            address,
            "members": members[] -> { name, role },
            "images": images[] {
                asset->{
                    _id,
                    url,
                    originalFilename,
                    metadata {
                        dimensions,
                        lqip,

                    }
                }
            },
            body,
          }`,
        { slug }
    )) as Project | null
    return project
}
