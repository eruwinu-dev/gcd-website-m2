import fs from "fs"
import { join } from "path"
import type { ProjectType, MemberType } from "../types"

const directory = join(process.cwd(), "markdown")

export const getMemberText = (member: MemberType) => {
	try {
		const realSlug = member.text.replace(/\.md$/, "")
		const fullPath = join(directory, `${realSlug}.md`)
		const fileContents = fs.readFileSync(fullPath, "utf8")
		return fileContents
	} catch (error) {
		return ``
	}
}

export const getProjectText = (project: ProjectType) => {
	try {
		const realSlug = project.text.replace(/\.md$/, "")
		const fullPath = join(directory, `${realSlug}.md`)
		const fileContents = fs.readFileSync(fullPath, "utf8")
		return fileContents
	} catch (error) {
		return ``
	}
}

