import React from "react"
import useStateContext from "../../context/State"
import type { ProjectType, TeamType } from "../../types"

type Props = {
	project: ProjectType
}

const ProjectTeam = ({ project }: Props) => {
	const { viewMode } = useStateContext()

	return (
		<div
			className={[
				"project-team",
				viewMode === "story" ? "items-start text-white text-left" : "items-center text-black text-center",
			].join(" ")}
		>
			<h1 className="text-5xl">{project.name}</h1>
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

