import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footerContainer">
				<div className="footerSimpleContent">
					<p className="footerCopyright">
						© {currentYear} Todos los derechos reservados.
					</p>
					<Link href="https://github.com/LicFuraca/pnt2-2025-c2-simu">
						<FaGithub />
					</Link>
				</div>
			</div>
		</footer>
	);
}
