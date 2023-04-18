import groq from "groq"
import sanityClient from "../sanityClient"
import { BasePost, Post } from "../../types/post"
import { formatDateFromISO } from "../dates"

export const getPost = async (slug: string) => {
    const { post, recos } = (await sanityClient.fetch(
        groq`{
        "post": *[_type == "post" && slug.current == $slug][0]{
            _id,
            publishedAt,
            title,
            "slug": slug.current,
            description,
            mainImage,
            "author": author -> {name, "slug": slug.current, image, blogBio},
            "categories": categories[] -> slug.current,
            "wordCount": round(length(pt::text(body)) / 5),
            body,
        },
        "recos": *[_type == "post" && slug.current != $slug][0..10] {
            _id,
            title,
            "slug": slug.current,
            description,
            mainImage,
            publishedAt,
            "categories": categories[] -> slug.current,
            "wordCount": round(length(pt::text(body)) / 5),
        },
      }`,
        { slug }
    )) as { post: Post; recos: BasePost[] }
    return {
        post: {
            ...post,
            publishedAt: post.publishedAt
                ? formatDateFromISO(post.publishedAt)
                : "NaN",
        },
        recos: recos
            .filter((reco, index) => index < 3)
            .map((reco) => ({
                ...reco,
                publishedAt: reco.publishedAt
                    ? formatDateFromISO(reco.publishedAt)
                    : "NaN",
            })),
    }
}
