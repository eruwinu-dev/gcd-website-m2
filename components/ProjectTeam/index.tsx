import { useRouter } from "next/router"
import React from "react"
import type { ModeType, ProjectMember } from "../../types/project"

type Props = {
    name: string
    address?: string
    team: ProjectMember[]
}

const ProjectTeam = ({ name, address, team }: Props) => {
    const router = useRouter()
    const { mode } = router.query

    const viewMode = (mode || "story") as ModeType

    return (
        <div
            className={[
                "project-team",
                viewMode === "story"
                    ? "items-center text-white text-center"
                    : "items-center text-black text-center",
            ].join(" ")}
        >
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
                {name}
            </h1>
            <h2 className="text-base font-normal italic tracking-wider">
                {address}
            </h2>
            <div className="project-members">
                {team.length ? (
                    team.map((member, index) => (
                        <div
                            key={index}
                            className={[
                                team.length % 2 !== 0 &&
                                index === team.length - 1
                                    ? "odd-child"
                                    : "",
                            ].join(" ")}
                        >
                            <h3 className="text-lg font-semibold">
                                {member.name}
                            </h3>
                            <span className="italic text-center">
                                {member.role}
                            </span>
                        </div>
                    ))
                ) : (
                    <div className={[].join(" ")}>
                        <h3 className="text-lg font-semibold">
                            G. Charles Design
                        </h3>
                        <span className="italic text-center">Project</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectTeam
