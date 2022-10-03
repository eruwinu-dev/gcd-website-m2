import React from "react"
import type { ProjectType, TeamMemberType } from "../../types"

type Props = {
	project: ProjectType
}

const ProjectTeam = ({ project }: Props) => {
	return (
		<div className="project-team w-[75%]">
			<h1>{project.name}</h1>
			<span className="italic tracking-wider">{project.address}</span>
			<div className="project-members">
				{project.team.map((team: TeamMemberType, index: number) => (
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

