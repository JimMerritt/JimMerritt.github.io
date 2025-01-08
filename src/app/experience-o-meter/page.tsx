import Header from "@/components/Header";
import TechDomainList from "@/components/TechDomain/TechDomainList";
import { techDomains } from "@/lib/data/techDomains";
import type { Metadata } from "next";

export const metadata: Metadata = {
	alternates: {
		canonical: "https://jimmerritt.dev",
	},
};

export default function ExperienceOmeter() {
	return (
		<main id="main-content">
			<Header />
			<section
				className="mt-6 max-w-lg md:row-start-2 md:row-span-2"
				aria-labelledby="experience-o-meter"
			>
				<h2 id="experience-o-meter">Experience-O-Meter</h2>
				<TechDomainList techDomains={techDomains} />
			</section>
		</main>
	);
}
