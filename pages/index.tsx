import React, { useRef } from "react"

import Image from "next/image"

import { useRect } from "@reach/rect"

import BookConsultButton from "../components/BookConsultButton"
import LandingCollage from "../components/LandingCollage"
import ServicesList from "../components/ServicesList"

import { headerTitle } from "../lib/title"

import { sanityImageLoader } from "../lib/sanityImageLoader"
import MetaHead from "../components/MetaHead"
type Props = {}

const Home = (props: Props) => {
	const sliderRef = useRef<HTMLDivElement | null>(null)
	const sliderRect = useRect(sliderRef)

	return (
		<>
			<MetaHead
				title={`Home | ${headerTitle}`}
				description="G. Charles Design is an architecture firm licensed in California, Nevada and Arizona with authentic architecture services catered to the client's needs."
				url={process.env.NEXT_PUBLIC_SITE_URL || ""}
				siteName={`Home | ${headerTitle}`}
				image={process.env.NEXT_PUBLIC_SITE_URL + "/landing.jpg"}
			/>
			<section className="banner-section">
				<Image
					src={landingImage}
					loader={sanityImageLoader}
					alt="The landing image comes from The Farmasist, a project of G. Charles Design"
					layout="fill"
					objectFit="cover"
					objectPosition="left"
					priority
				/>
				<div className="banner-mask two-column">
					<div className="banner-title-container">
						<h1 className="banner-title">Client Focused Architecture.</h1>
						<p className="banner-subtitle">
							Whether the project is small or large, we will always passionately pursue quality.
						</p>
					</div>
					<div className="banner-spacer" />
				</div>
			</section>
			<section className="services-section">
				<div className="services-list-container" ref={sliderRef}>
					<ServicesList />
				</div>
				<div className="services-slider" style={{ height: sliderRect ? sliderRect.height : 0 }}>
					<div className="services-slider-container">
						<h2>Quality in Service.</h2>

						<p>
							Our approach is built upon the belief that the greater talent of any architect lies in their
							ability to translate a clients wishes and dreams into beautiful design solutions.
						</p>
						<p>
							Our goal is to provide a level of service that is reflective of our passion while paying
							careful attention to the individual needs of each of our clients.
						</p>
					</div>
				</div>
			</section>
			<section className="services-slider-hidden">
				<div className="services-slider-hidden-container">
					<div className="services-slider-hidden-text-container">
						<h2>Quality in Service.</h2>

						<p>
							Our approach is built upon the belief that the greater talent of any architect lies in their
							ability to translate a clients wishes and dreams into beautiful design solutions.
						</p>
						<p>
							Our goal is to provide a level of service that is reflective of our passion while paying
							careful attention to the individual needs of each of our clients.
						</p>
					</div>
				</div>
			</section>
			<section className="landing-blockquote-section">
				<div className="landing-blockquote-section-container">
					<p>
						We take our business relationships seriously. We strive for excellence in customer service &
						client satisfaction. You will see the difference.
					</p>
				</div>
			</section>
			<section className="license-section">
				<div className="license-grid">
					<div className="license-description">
						<h3>Licensed in California, Nevada & Arizona.</h3>
						<p>
							We are experienced in the unique challenges of Southern California and will help you
							navigate them expertly and efficiently. Our years of expertise have allowed us to craft an
							efficient and agile operation that saves you money on all fronts without sacrificing quality
							production.
						</p>
						<div className="license-icons-container">
							<div className="aia-icon-container">
								<Image
									src="/aia-logo.png"
									alt="AIA Logo"
									layout="fill"
									objectFit="contain"
									unoptimized
									loading="eager"
									sizes="460px, 200px, 100px"
								/>
							</div>
							<div className="ncarb-icon-container">
								<Image
									src="/ncarb.png"
									alt="NCARB Logo"
									layout="fill"
									objectFit="contain"
									unoptimized
									loading="eager"
									sizes="315px, 150px, 75px"
								/>
							</div>
						</div>
					</div>
					<LandingCollage />
				</div>
			</section>
			<section className="consult-section">
				<Image
					src={bookImage}
					loader={sanityImageLoader}
					alt="A picture of the Modern Barn, a project of G. Charles Design. Book a consult now!"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					quality="90"
					priority
					sizes="100vw"
					className="saturate-50"
				/>
				<div className="consult-backdrop">
					<div className="consult-spacer" />
					<div className="consult-border">
						<h4>Maximize your project&apos;s potential.</h4>
						<p>Let&apos;s build your dream space fit to your wishes. Set up a talk with our architects!</p>
						<BookConsultButton />
					</div>
				</div>
			</section>
		</>
	)
}

const landingImage =
	"https://cdn.sanity.io/images/1apv929p/production/d8026d1f0395c9b782bf26ca806c8684619bb943-2200x1100.jpg"

const bookImage =
	"https://cdn.sanity.io/images/1apv929p/production/e358b6cfee63720bac0e8357fe23fecf106f6e28-2048x1365.jpg"

export default Home

