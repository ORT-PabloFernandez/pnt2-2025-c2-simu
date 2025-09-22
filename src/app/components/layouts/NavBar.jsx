"use client";

import { useState } from "react";
import styles from "./navbar.css";

import Logo from "./Logo";
import Menu from "./Menu";
import Notifications from "./Notifications";
import CurrentUser from "./CurrentUser";

export default function Navbar() {
	const { currentUser, logout } = {
		currentUser: {
			id: "15",
			name: "Grady Archie",
			avatar:
				"https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/public/img/Grady%20Archie.jpg",
			email: "Grady.Archie@ejemplo.com",
			status: "completed",
		},
		logout: () => {},
	};
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [notificationIndicator, setNotificationIndicator] = useState(true);

	if (!currentUser) return null;

	return (
		<nav className="navbar">
			<div className="navbar-content">
				{/* Logo and Menu */}
				<div className="navbar-left">
					<Logo />
					<Menu />
				</div>

				{/* User Menu */}
				<div className="navbar-right">
					<Notifications notificationIndicator={notificationIndicator} />
					<CurrentUser currentUser={currentUser} logout={logout} />
				</div>
			</div>
		</nav>
	);
}
