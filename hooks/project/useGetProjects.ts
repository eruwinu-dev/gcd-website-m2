import { useQuery } from "@tanstack/react-query"
import { ProjectLink } from "../../types/project"
import { Category } from "../../types/category"

export const useGetProjects = () => {
    return useQuery<{ projects: ProjectLink[]; categories: Category[] }, Error>(
        {
            queryKey: ["projects"],
            queryFn: async () => {
                const result = await fetch(`/api/project/get/some`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({}),
                })
                const { projects, categories } = await result.json()
                return { projects, categories }
            },
            refetchOnWindowFocus: false,
        }
    )
}
