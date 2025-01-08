import type { TechDomain } from "@/types/TechDomain";

export const techDomains: TechDomain[] = [
	{
		name: "Web Fundamentals",
		description: "Core web technologies",
		technologies: [
			{ name: "HTML", description: "Structure and semantics" },
			{ name: "CSS", description: "Styling and layouts" },
			{ name: "JavaScript", description: "Core language" },
			{ name: "TypeScript", description: "Typed JavaScript" },
			{ name: "Web Accessibility", description: "A11Y practices" },
			{ name: "Web Performance", description: "Optimization techniques" },
			{ name: "Browser DevTools", description: "Development debugging" },
		],
	},
	{
		name: "Frontend Frameworks",
		description: "UI frameworks and libraries",
		technologies: [
			{ name: "React", description: "UI library" },
			{ name: "Vue", description: "Progressive framework" },
			{ name: "Angular", description: "Full-featured framework" },
			{ name: "Svelte", description: "Compiled framework" },
			{ name: "Next.js", description: "React framework" },
			{ name: "Nuxt", description: "Vue framework" },
			{ name: "Astro", description: "Static site builder" },
		],
	},
	{
		name: "Styling Solutions",
		description: "CSS and design tools",
		technologies: [
			{ name: "Tailwind", description: "Utility-first CSS" },
			{ name: "Sass/SCSS", description: "CSS preprocessor" },
			{ name: "CSS-in-JS", description: "Styled-components/Emotion" },
			{ name: "CSS Modules", description: "Scoped styling" },
			{ name: "Design Systems", description: "Component libraries" },
		],
	},
	{
		name: "State Management",
		description: "Data flow solutions",
		technologies: [
			{ name: "Redux", description: "Global state container" },
			{ name: "MobX", description: "Simple state management" },
			{ name: "Zustand", description: "Lightweight state" },
			{ name: "React Query", description: "Server state management" },
			{ name: "Context API", description: "React built-in state" },
		],
	},
	{
		name: "Backend Development",
		description: "Server-side technologies",
		technologies: [
			{ name: "Node.js", description: "JavaScript runtime" },
			{ name: "Express", description: "Node.js framework" },
			{ name: "Deno", description: "JavaScript/TypeScript runtime" },
			{ name: "Python", description: "Server-side language" },
			{ name: "Django", description: "Python framework" },
			{ name: "Ruby on Rails", description: "Ruby framework" },
		],
	},
	{
		name: "Databases",
		description: "Data storage solutions",
		technologies: [
			{ name: "PostgreSQL", description: "Relational database" },
			{ name: "MongoDB", description: "Document database" },
			{ name: "Redis", description: "In-memory data store" },
			{ name: "GraphQL", description: "Query language" },
			{ name: "Prisma", description: "ORM" },
		],
	},
	{
		name: "DevOps & Deployment",
		description: "Development operations",
		technologies: [
			{ name: "Git", description: "Version control" },
			{ name: "Docker", description: "Containerization" },
			{ name: "CI/CD", description: "Continuous integration" },
			{ name: "AWS", description: "Cloud platform" },
			{ name: "Vercel", description: "Deployment platform" },
			{ name: "Netlify", description: "Deployment platform" },
		],
	},
	{
		name: "Testing",
		description: "Quality assurance",
		technologies: [
			{ name: "Jest", description: "Testing framework" },
			{ name: "React Testing Library", description: "Component testing" },
			{ name: "Cypress", description: "E2E testing" },
			{ name: "Playwright", description: "Browser automation" },
			{ name: "Vitest", description: "Unit testing" },
		],
	},
	{
		name: "AI Integration",
		description: "AI tools and development",
		technologies: [
			{ name: "AI Prompt Engineering", description: "LLM interaction" },
			{ name: "AI API Integration", description: "OpenAI, Claude, etc." },
			{ name: "Machine Learning", description: "TensorFlow.js" },
			{ name: "AI Model Training", description: "Custom models" },
			{ name: "AI Tools Usage", description: "Copilot, ChatGPT" },
		],
	},
	{
		name: "Mobile & Cross-Platform",
		description: "Multi-platform development",
		technologies: [
			{ name: "React Native", description: "Mobile development" },
			{ name: "Progressive Web Apps", description: "PWA development" },
			{ name: "Electron", description: "Desktop apps" },
			{ name: "Tauri", description: "Desktop apps" },
			{ name: "Flutter", description: "Cross-platform UI" },
		],
	},
	{
		name: "Build Tools",
		description: "Development tooling",
		technologies: [
			{ name: "Webpack", description: "Module bundler" },
			{ name: "Vite", description: "Build tool" },
			{ name: "esbuild", description: "JavaScript bundler" },
			{ name: "Rollup", description: "Module bundler" },
			{ name: "Babel", description: "JavaScript compiler" },
		],
	},
];
