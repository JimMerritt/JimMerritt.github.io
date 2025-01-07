import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";

import "./globals.css";

const sourceSans = Source_Sans_3({
	variable: "--font-source-sans",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Jim Merritt | Senior Frontend Developer",
	description:
		"Senior Frontend Developer specializing in React, TypeScript, and React Native. Experienced in frontend architecture, team leadership, and UI/UX development.",
	keywords:
		"Frontend Developer, React, TypeScript, React Native, Frontend Architecture, UI/UX, JavaScript",
	openGraph: {
		title: "Jim Merritt | Senior Frontend Developer",
		description:
			"Senior Frontend Developer specializing in React, TypeScript, and React Native",
		type: "profile",
		locale: "en_US",
		firstName: "Jim",
		lastName: "Merritt",
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://jimmerritt.dev",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${sourceSans.variable} antialiased font-sans min-h-screen`}
			>
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:p-4"
				>
					Skip to main content
				</a>
				{children}
			</body>
		</html>
	);
}
