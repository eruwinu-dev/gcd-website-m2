import { useQuery } from "@tanstack/react-query"
import { BasePost, Post } from "../../types/post"

export const useGetPost = (slug: string) => {
    return useQuery<
        | {
              post: Post
              recos: BasePost[]
          }
        | undefined,
        Error
    >({
        queryKey: ["posts", slug],
        queryFn: async () => {
            const result = await fetch(`/api/post/get/one`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ slug }),
            })
            const { post, recos } = await result.json()
            return { post, recos }
        },
        refetchOnWindowFocus: false,
    })
}
