import fs from "fs"
import { join } from "path"
import { TeamType } from "./team"

const directory = join(process.cwd(), "markdown")

export const getMemberText = (member: TeamType) => {
	try {
		const realSlug = member.text.replace(/\.md$/, "")
		const fullPath = join(directory, `${realSlug}.md`)
		const fileContents = fs.readFileSync(fullPath, "utf8")
		return `
			## ${member.name}
			
			### ${member.role}

			${fileContents}
			`
	} catch (error) {
		return `
			## ${member.name}
			
			### ${member.role}
		`
	}
}

