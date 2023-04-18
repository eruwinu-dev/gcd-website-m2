import { useQuery } from "@tanstack/react-query"
import { BasePost } from "../../types/post"
import { Category } from "../../types/category"

export const useGetPosts = () => {
    return useQuery<{ posts: BasePost[]; categories: Category[] }, Error>({
        queryKey: ["posts"],
        queryFn: async () => {
            const result = await fetch(`/api/post/get/some`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({}),
            })
            const { posts, categories } = await result.json()
            return { posts, categories }
        },
        refetchOnWindowFocus: false,
    })
}
