import { useQuery } from "@tanstack/react-query"
import { MemberLink } from "../../types/member"

export const useGetMembers = () => {
    return useQuery<MemberLink[], Error>({
        queryKey: ["members"],
        queryFn: async () => {
            const result = await fetch(`/api/member/get/all`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({}),
            })
            const { members } = await result.json()
            return members
        },
        refetchOnWindowFocus: false,
    })
}
