import { useRouter } from "next/router"
import React, { useMemo } from "react"
import type { ModeType, ProjectTeamType } from "../../types/project"

type Props = {
	name: string
	address?: string
	team?: string
}

const ProjectTeam = ({ name, address, team }: Props) => {
	const router = useRouter()
	const { mode } = router.query

	const viewMode = (mode || "story") as ModeType

	const teamMembers = useMemo(
		() =>
			team?.split("\n").map((line: string) => {
				const info = line?.split(" - ") || []
				return {
					name: line ? info[0] : "",
					position: line ? info[1] : "",
				}
			}) || [],
		[team]
	)

	return (
		<div
			className={[
				"project-team",
				viewMode === "story" ? "items-start text-white text-left" : "items-center text-black text-center",
			].join(" ")}
		>
			<h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl">{name}</h1>
			<h2 className="text-base font-normal italic tracking-wider">{address || "Project Address"}</h2>
			<div className="project-members">
				{teamMembers.length ? (
					teamMembers.map((member: ProjectTeamType, index: number) => (
						<div
							key={index}
							className={[
								teamMembers.length % 2 !== 0 && index === teamMembers.length - 1 ? "odd-child" : "",
							].join(" ")}
						>
							<h3 className="text-lg font-semibold">{member.name}</h3>
							<span className="italic text-center">{member.position}</span>
						</div>
					))
				) : (
					<div className={[].join(" ")}>
						<h3 className="text-lg font-semibold">G. Charles Design</h3>
						<span className="italic text-center">Project</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default ProjectTeam

