import React, { useRef } from "react"

import { useRect } from "@reach/rect"

import ContactForm from "../components/ContactForm"
import ContactList from "../components/ContactList"
import ContactModal from "../components/ContactModal"
import SocialsList from "../components/SocialsList"

import { headerTitle } from "../lib/title"
import MetaHead from "../components/MetaHead"
import { getMediaSize } from "../lib/media"

type Props = {}

const Contact = (props: Props) => {
    const sliderRef = useRef<HTMLDivElement | null>(null)
    const sliderRect = useRect(sliderRef)
    const widthRef = useRef<HTMLDivElement | null>(null)
    const widthRect = useRect(widthRef)

    let breakpoint = getMediaSize(widthRect ? widthRect.width : 0)

    return (
        <>
            <MetaHead
                title={ `Contact | ${headerTitle}` }
                description="Get in touch with G. Charles Design at inquiry@gcharlesdesign.com. Book a consult now!"
                url={ process.env.NEXT_PUBLIC_SITE_URL + "/contact" }
                siteName={ `Contact | ${headerTitle}` }
            />
            <section className="contact-landing-section" ref={ widthRef }>
                { breakpoint !== "sm" ? (
                    <>
                        <div
                            className="contact-landing-list-sticky-container"
                            style={ { height: sliderRect ? sliderRect.height : 0 } }
                        >
                            <div className="contact-landing-list-container">
                                <h1>Get In Touch</h1>
                                <ContactList size="large" />
                                <SocialsList />
                                <div className="contact-language">
                                    We speak{ " " }
                                    <span className="font-semibold">
                                        English
                                    </span>
                                    ,{ " " }
                                    <span className="font-semibold">
                                        Tagalog
                                    </span>
                                    , and{ " " }
                                    <span className="font-semibold">
                                        Spanish
                                    </span>
                                    .
                                </div>
                            </div>
                        </div>
                        <div
                            className="contact-landing-scroll-container"
                            ref={ sliderRef }
                        >
                            <ContactForm />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="contact-landing-mobile-container">
                            <h1>Get In Touch</h1>
                            <ContactList size="large" />
                            <SocialsList />
                            <div className="contact-language">
                                We speak{ " " }
                                <span className="font-semibold">
                                    English
                                </span>
                                ,{ " " }
                                <span className="font-semibold">
                                    Tagalog
                                </span>
                                , and{ " " }
                                <span className="font-semibold">
                                    Spanish
                                </span>
                                .
                            </div>
                        </div>
                        <ContactForm />
                        {/* 
                        <div>
                            <div className="contact-landing-list-container">
                                <h1>Get In Touch</h1>
                                <ContactList size="large" />
                                <SocialsList />
                                <div className="contact-language">
                                    We speak{ " " }
                                    <span className="font-semibold">
                                        English
                                    </span>
                                    ,{ " " }
                                    <span className="font-semibold">
                                        Tagalog
                                    </span>
                                    , and{ " " }
                                    <span className="font-semibold">
                                        Spanish
                                    </span>
                                    .
                                </div>
                            </div>
                        </div> */}
                    </>
                ) }
            </section>
            <input type="password" className="hidden" id="contact-gclid" placeholder="Google Click Identifier" />
        </>
    )
}

export default Contact
