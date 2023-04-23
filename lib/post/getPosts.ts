import { Category } from "../../types/category"
import { BasePost } from "../../types/post"
import { formatDateFromISO } from "../dates"
import sanityClient from "../sanityClient"
import groq from "groq"

export const getPosts = async () => {
    const { posts, categories } = (await sanityClient.fetch(groq`{
            "posts": *[_type == "post"] | order(publishedAt desc) {
                _id,
                title,
                "slug": slug.current,
                description,
                mainImage {
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
                publishedAt,
                "categories": categories[] -> slug.current,
                "wordCount": round(length(pt::text(body)) / 5),
            },
            "categories": *[_type == "category" && categoryType == "post"] {
                title,
                "slug": slug.current,
            }
        }`)) as { posts: BasePost[]; categories: Category[] }
    return {
        posts: posts.map((post) => ({
            ...post,
            publishedAt: post.publishedAt
                ? formatDateFromISO(post.publishedAt)
                : "NaN",
        })),
        categories,
    }
}
