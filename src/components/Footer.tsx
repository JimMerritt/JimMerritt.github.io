import Link from "next/link";

export default function Footer() {
	const githubUsername = "JimMerritt";

	return (
		<footer className="site-footer">
			<div className="wrapper">
				<div className="footer-col-wrapper">
					<div className="footer-col footer-col-1">
						<ul className="contact-list">
							<li className="name-with-line">
								<strong>Jim Merritt</strong>
							</li>
							<li>Designer &amp; Front End Developer</li>
						</ul>
					</div>

					<div className="footer-col footer-col-2">
						<ul className="social-media-list">
							<li>
								<Link href={`https://github.com/${githubUsername}`}>
									<span className="username">@{githubUsername}</span>
								</Link>
							</li>
						</ul>
					</div>

					<div className="footer-col footer-col-3">
						<p>
							Jim Merritt&apos;s resume website, built with Next.js and hosted
							through GitHub pages.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
