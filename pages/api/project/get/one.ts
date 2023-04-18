import type { NextApiRequest, NextApiResponse } from "next"
import { AdjacentProject, Project } from "../../../../types/project"
import { getProject } from "../../../../lib/project/getProject"
import { getAdjacentProjects } from "../../../../lib/project/getAdjacentProjects"

type Data = {
    project: Project | null
    previous: AdjacentProject | null
    next: AdjacentProject | null
}

export interface GetProjectRequest extends NextApiRequest {
    body: { slug: string }
}

const handler = async (req: GetProjectRequest, res: NextApiResponse<Data>) => {
    const { slug } = req.body
    const project = await getProject(slug)
    const [previous, next] = await getAdjacentProjects(slug)
    res.status(200).json({ project, previous, next })
}

export default handler
