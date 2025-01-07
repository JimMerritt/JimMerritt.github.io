import type { Metadata } from "next";

export const metadata: Metadata = {
	alternates: {
		canonical: "https://jimmerritt.dev",
	},
};

export default function Home() {
	return (
		<main id="main-content" className="py-12 px-16">
			<header className="mb-6">
				<h1 className="m-0 ml-[-1.65rem] p-0 leading-none">Jim Merritt</h1>
				<p className="m-0 p-0 leading-none uppercase text-brand">
					Senior Frontend Developer
				</p>
			</header>
			<section className="mb-6 max-w-lg" aria-labelledby="contact">
				<h2 id="contact">Contact</h2>
				<nav>
					<ul className="m-0 p-0 list-none">
						<li>
							<a
								href="https://github.com/JimMerritt"
								aria-label="Jim Merritt on GitHub"
							>
								GitHub
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/jim-merritt-b3240a65/"
								aria-label="Jim Merritt on LinkedIn"
							>
								LinkedIn
							</a>
						</li>
					</ul>
				</nav>
			</section>
			<section className="mb-6 max-w-lg" aria-labelledby="education">
				<h2 id="education">Education</h2>
				<h3>Northern Kentucky University</h3>
				<p>Visual Communications Design</p>
				<p>Minor in Computer Science</p>
			</section>
			<section className="mb-6 max-w-lg" aria-labelledby="core-technical">
				<h2 id="core-technical">Core Technical</h2>
				<ul className="m-0 p-0 list-none">
					<li>TypeScript</li>
					<li>JavaScript</li>
					<li>React</li>
					<li>React Native</li>
					<li>Node</li>
					<li>PWA Architecture</li>
					<li>CI/CD</li>
					<li>UI/UX</li>
					<li>Next</li>
					<li>HTML5</li>
					<li>CSS3</li>
				</ul>
			</section>
			<section
				className="mb-6 max-w-lg"
				aria-labelledby="team-and-architectural"
			>
				<h2 id="team-and-architectural">Team & Architectural</h2>
				<ul className="m-0 p-0 list-none">
					<li>Frontend Architecture</li>
					<li>Agile Development</li>
					<li>Team Development</li>
					<li>Cross-Functional Collaboration</li>
					<li>Code Mentoring</li>
				</ul>
			</section>
			<section className="mb-6 max-w-lg" aria-labelledby="experience">
				<h2 id="experience">Experience</h2>
				<h3>BrewLogix</h3>
				<p className="text-[--secondary-text]">2024</p>
				<p>
					<b>Senior Frontend Developer</b>
				</p>
				<p className="mb-4">
					Led feature planning, GitHub Actions setup, team patterns, tech
					adoption, mentoring juniors, mono-repo architecture, React Native via
					Expo, and cross-team collaboration.
				</p>
				<h3>Mach One Digital</h3>
				<p className="text-[--secondary-text]">2021&ndash;2024</p>
				<p>
					<b>Senior Frontend Developer</b>
				</p>
				<p className="mb-4">
					Led frontend architecture, UX/UI decisions, design systems, React
					Native (Expo) app development, web app builds, API integrations, and
					backend/frontend planning in small teams.
				</p>
				<h3>Kroger</h3>
				<p className="text-[--secondary-text]">2018&ndash;2021</p>
				<p>
					<b>Frontend Developer</b>
				</p>
				<p className="mb-4">
					Led technical efforts for a smaller team, planned core shopping
					features, championed TypeScript adoption, collaborated with UX/UI on
					discovery flows.
				</p>
				<h3>Pure Romance</h3>
				<p className="text-[--secondary-text]">2016&ndash;2018</p>
				<p>
					<b>Software Engineer</b>
				</p>
				<p className="mb-4">
					Angular development, front end design and development for multiple
					platforms, UX/UI, site planning and testing, HTML email production,
					managing and coaching junior level designers.
				</p>
				<h3>Intrinzic</h3>
				<p className="text-[--secondary-text]">2013&ndash;2016</p>
				<p>
					<b>Digital Designer, Front End Developer</b>
				</p>
				<p className="mb-4">
					Front end design and development, UX/UI, site planning and testing,
					graphic design, logo design and brand development.
				</p>
			</section>
		</main>
	);
}
