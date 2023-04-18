import { useQuery } from "@tanstack/react-query"
import { Member } from "../../types/member"

export const useGetMember = (slug: string) => {
    return useQuery<Member | undefined, Error>({
        queryKey: ["members", slug],
        queryFn: async () => {
            const result = await fetch(`/api/member/get/one`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ slug }),
            })
            const { member } = await result.json()
            return member
        },
        refetchOnWindowFocus: false,
    })
}
