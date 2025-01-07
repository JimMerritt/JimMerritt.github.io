import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="site-header">
			<Link href="/" className="site-title">
				Jim Merritt
				<span>Design &amp; Development</span>
			</Link>

			<nav className={`site-nav ${isMenuOpen ? "open" : ""}`}>
				<button
					className="menu-icon"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					type="button"
				>
					{/* Convert your SVG menu icon */}
				</button>

				<div className="nav-links">
					<Link href="/portfolio">Portfolio</Link>
					<Link href="/about">About</Link>
					<Link href="/blog">Blog</Link>
				</div>
			</nav>
		</header>
	);
}
