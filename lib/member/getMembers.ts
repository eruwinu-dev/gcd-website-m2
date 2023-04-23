import { MemberLink } from "../../types/member"
import sanityClient from "../sanityClient"
import groq from "groq"

export const getMembers = async () => {
    const result =
        (await sanityClient.fetch(groq`*[_type == "authorList" && name == "Default"][0] {
        "authors": authors[] -> {
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
            },        }
    }`)) as Partial<{ authors: MemberLink[] }>
    return result?.authors || []
}
