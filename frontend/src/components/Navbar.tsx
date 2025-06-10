import { NavLink } from "react-router-dom";
import { StyledNavbar } from "./styles/Navbar.styled";

const Navbar = () => {
	const linkClass = ({ isActive }: { isActive: boolean }) =>
		isActive ? "active" : "inactive";

	return (
		<StyledNavbar>
			<div>
				<p>The best stories are yet to be discovered!</p>
			</div>
			<ul>
				<NavLink aria-label="Go to homepage" to="/" className={linkClass}>
					Home
				</NavLink>
				<NavLink
					aria-label="View your reading challenge"
					to="/reading-challenge">
					Reading Challenge
				</NavLink>
				<NavLink aria-label="Access your reading list" to="/readinglist">
					Reading List
				</NavLink>
				<NavLink aria-label="Go to admin panel" to="/admin">
					Admin
				</NavLink>
			</ul>
		</StyledNavbar>
	);
};

export default Navbar;
