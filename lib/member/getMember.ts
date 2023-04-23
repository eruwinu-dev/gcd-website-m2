import { Member } from "../../types/member"
import sanityClient from "../sanityClient"
import groq from "groq"

export const getMember = async (slug: string) => {
    const member = (await sanityClient.fetch(
        groq`*[_type == "author" && slug.current == $slug][0] {
            _id,
            name,
            "slug": slug.current,
            "licenses": licenses[],
            role,
            image {
                ...,
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
            blogBio,
            bio
          }`,
        { slug }
    )) as Member | null
    return member
}
