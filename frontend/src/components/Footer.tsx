import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
	return (
		<StyledFooter>
			<p>
				Turning <span>Pages</span>
			</p>
			<div>
				<small>&copy; Turning Pages, 2025</small>

				<ul>
					<a href="https://www.facebook.com/" target="_blank">
						<img src="/src/assets/img/icon-facebook.png" alt="Facebook icon" />
					</a>
					<a href="https://www.instagram.com/" target="_blank">
						<img
							src="/src/assets/img/icon-instagram.png"
							alt="Instagram icon"
						/>
					</a>
					<a href="https://www.tiktok.com/" target="_blank">
						<img src="/src/assets/img/icon-tiktok.png" alt="Tiktok icon" />
					</a>
				</ul>
			</div>
		</StyledFooter>
	);
};

export default Footer;
