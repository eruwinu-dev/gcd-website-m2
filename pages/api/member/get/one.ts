import type { NextApiRequest, NextApiResponse } from "next"
import { getMember } from "../../../../lib/member/getMember"
import { Member } from "../../../../types/member"

type Data = {
    member: Member | null
}

export interface GetMemberRequest extends NextApiRequest {
    body: { slug: string }
}

const handler = async (req: GetMemberRequest, res: NextApiResponse<Data>) => {
    const { slug } = req.body
    const member = await getMember(slug)
    res.status(200).json({ member })
}

export default handler
