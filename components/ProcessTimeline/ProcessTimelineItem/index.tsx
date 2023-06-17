import React from "react"
import Image from "next/image"

import { motion } from "framer-motion"

import type { ProcessType } from "../../../types/process"
import { sanityImageLoader } from "../../../lib/sanityImageLoader"

type Props = {
    process: ProcessType
    placeholder: string
}

const ProcessTimelineItem = ({ process, placeholder }: Props) => {
    return (
        <motion.div
            className="process-timeline-item"
            key={process ? process.phase : "0"}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <div className="process-timeline-item-text-container">
                <h3 className="process-timeline-item-text text-center">
                    {process.title}
                </h3>
                <p className="process-timeline-item-text text-justify leading-relaxed">
                    {process.description}
                </p>
            </div>
            <motion.div
                className="process-timeline-item-image-container"
                variants={imageVariants}
            >
                <div>
                    <Image
                        src={process.photo}
                        loader={sanityImageLoader}
                        alt={`${process.title} - ${process.description} | G. Charles Design`}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        sizes="(max-width: 600px) 50vw, 100vw"
                        blurDataURL={placeholder}
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}

const stepVariants = {
    hidden: {
        y: 10,
        opacity: 0,
        transition: {
            duration: 0,
            ease: "easeInOut",
            type: "spring",
        },
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            type: "spring",
        },
    },
}

const imageVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.2,
        },
    },
}

export default ProcessTimelineItem
