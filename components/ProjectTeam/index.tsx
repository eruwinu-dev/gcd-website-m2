import { useRouter } from "next/router"
import React from "react"
import type { ModeType, ProjectType } from "../../types/project"
import type { TeamType } from "../../types/member"

type Props = {
	project: ProjectType
}

const ProjectTeam = ({ project }: Props) => {
	const router = useRouter()
	const { mode } = router.query

	const viewMode = (mode || "story") as ModeType

	return (
		<div
			className={[
				"project-team",
				viewMode === "story" ? "items-start text-white text-left" : "items-center text-black text-center",
			].join(" ")}
		>
			<h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl">{project.name}</h1>
			<span className="italic tracking-wider">{project.address}</span>
			<div className="project-members">
				{project.team.map((team: TeamType, index: number) => (
					<div
						key={index}
						className={[
							project.team.length % 2 !== 0 && index === project.team.length - 1 ? "odd-child" : "",
						].join(" ")}
					>
						<h6>{team.name}</h6>
						<i>{team.role}</i>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProjectTeam

