import type { TechDomain } from "@/types/TechDomain";
import type { Technology } from "@/types/Technology";

export default function TechDomainList({
	techDomains,
}: {
	techDomains: TechDomain[];
}) {
	return (
		<ul>
			{techDomains.map((techDomain: TechDomain) => (
				<li key={techDomain.name}>
					<h3>{techDomain.name}</h3>
					<ul>
						{techDomain.technologies.map((technology: Technology) => (
							<li className="text-[--secondary-text]" key={technology.name}>
								{technology.name}
							</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	);
}
