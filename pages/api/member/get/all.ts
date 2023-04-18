import type { NextApiRequest, NextApiResponse } from "next"
import { getMembers } from "../../../../lib/member/getMembers"
import { MemberLink } from "../../../../types/member"

type Data = {
    members: MemberLink[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const members = await getMembers()
    res.status(200).json({ members })
}

export default handler
