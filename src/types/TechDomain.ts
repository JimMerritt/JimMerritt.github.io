import type { Technology } from "@/types/Technology";

export interface TechDomain {
	name: string;
	description: string;
	technologies: Technology[];
}
