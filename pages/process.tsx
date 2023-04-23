import React from "react"
import Image from "next/image"

import ProcessTimeline from "../components/ProcessTimeline"

import { headerTitle } from "../lib/title"
import { sanityImageLoader } from "../lib/sanityImageLoader"
import MetaHead from "../components/MetaHead"
import { GetStaticProps } from "next"
import { getPlaceholders } from "../lib/images/getPlaceholders"
import { processImage } from "../utils/banners"
import { steps } from "../lib/steps"

type Props = {
    placeholders: string[]
}

const Process = ({ placeholders }: Props) => {
    return (
        <>
            <MetaHead
                title={`Process | ${headerTitle}`}
                description="G. Charles Design strives to create architecture that stands as a unique and enduring representation of who our clients are."
                url={process.env.NEXT_PUBLIC_SITE_URL + "/process"}
                siteName={`Process | ${headerTitle}`}
                image={process.env.NEXT_PUBLIC_SITE_URL + "/process.jpg"}
            />

            <section className="banner-section">
                <Image
                    src={processImage}
                    loader={sanityImageLoader}
                    alt={
                        "The veranda of the building from the A Montecito Classic, a project from G. Charles Design"
                    }
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left"
                    priority
                    sizes="(max-width: 800px) 100vw, 800px"
                    placeholder="blur"
                    blurDataURL={placeholders[0]}
                />
                <div className="banner-mask lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                    <div className="banner-spacer" />
                    <div className="flex flex-col items-end justify-center w-full h-full relative border-2 px-8 lg:text-end md:text-end text-center">
                        <h1 className="banner-title">
                            Excellence in client satisfaction.
                        </h1>
                        <p className="banner-subtitle">
                            GCD strives to create architecture that stands as a
                            unique and enduring representation of who our
                            clients are.
                        </p>
                    </div>
                </div>
            </section>
            <section className="process-blockquote">
                <h2>
                    By hiring a licensed architect, you gain creative expertise
                    through the design process coupled with years of experience
                    getting plans approved by various jurisdictions.
                </h2>
            </section>
            <ProcessTimeline placeholders={placeholders.slice(0)} />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const placeholders = await getPlaceholders([
        processImage,
        ...steps.map((step) => step.photo),
    ])

    return {
        props: {
            placeholders,
        },
    }
}

export default Process
