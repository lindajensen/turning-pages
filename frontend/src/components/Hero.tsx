import { StyledHero } from "./styles/Hero.styled";

const Hero = () => {
	return (
		<StyledHero>
			<img src="/src/assets/img/hero.svg" alt="" />
			<div>
				<h1>Every book is a new adventure.</h1>
				<p>
					Turning Pages is your personal library for tracking reads, setting
					goals, and finding your next great book.
				</p>
			</div>
		</StyledHero>
	);
};

export default Hero;
