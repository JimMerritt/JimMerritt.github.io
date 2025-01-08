import fs from "node:fs";
import path from "node:path";
import type { PortfolioItem } from "@/types/PortfolioItem";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export function getAllPortfolioItems(): PortfolioItem[] {
	const files = fs.readdirSync(path.join(contentDirectory, "portfolio"));

	return files
		.filter((file) => file.endsWith(".mdx"))
		.map((file) => {
			const source = fs.readFileSync(
				path.join(contentDirectory, "portfolio", file),
				"utf8",
			);

			const { data, content } = matter(source);

			return {
				...data,
				slug: file.replace(/\.mdx$/, ""),
				content,
			} as PortfolioItem;
		})
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
