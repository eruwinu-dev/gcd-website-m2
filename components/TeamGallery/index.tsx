import React, { memo, useRef } from "react"
import { useRect } from "@reach/rect"

import TeamGalleryItem from "./TeamGalleryItem"
import TeamGalleryText from "./TeamGalleryText"
import { getMediaSize } from "../../lib/media"
import { useGetMembers } from "../../hooks/member/useGetMembers"

type Props = {
    width: number
}

const TeamGallery = ({ width }: Props) => {
    const boxRef = useRef<HTMLDivElement | null>(null)
    const boxRect = useRect(boxRef)

    let breakpoint = getMediaSize(width)

    const { data: members } = useGetMembers()

    if (!members) return <></>

    return (
        <section className="team-gallery-container">
            {breakpoint !== "sm" ? (
                <>
                    <div
                        style={{
                            height: boxRect ? boxRect.height : 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    >
                        <TeamGalleryText sticky />
                    </div>
                    <div className="team-gallery" ref={boxRef}>
                        {members.map((member, index) => (
                            <TeamGalleryItem
                                member={member}
                                order={index + 1}
                                key={member.slug}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <TeamGalleryText />
                    <div className="team-gallery" ref={boxRef}>
                        {members.map((member, index) => (
                            <TeamGalleryItem
                                member={member}
                                order={index + 1}
                                key={member._id}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    )
}

export default memo(TeamGallery)
