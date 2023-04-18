import { useQuery } from "@tanstack/react-query"
import { AdjacentProject, Project } from "../../types/project"

export const useGetProject = (slug: string) => {
    return useQuery<
        | {
              project: Project
              previous: AdjacentProject | null
              next: AdjacentProject | null
          }
        | undefined,
        Error
    >({
        queryKey: ["members", slug],
        queryFn: async () => {
            const result = await fetch(`/api/project/get/one`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ slug }),
            })
            const { project, next, previous } = await result.json()
            return { project, next, previous }
        },
        refetchOnWindowFocus: false,
    })
}
