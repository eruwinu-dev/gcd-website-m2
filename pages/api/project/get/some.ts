import type { NextApiRequest, NextApiResponse } from "next"
import { ProjectLink } from "../../../../types/project"
import { getProjects } from "../../../../lib/project/getProjects"
import { Category } from "../../../../types/category"

type Data = {
    projects: ProjectLink[]
    categories: Category[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { projects, categories } = await getProjects()
    res.status(200).json({ projects, categories })
}

export default handler
