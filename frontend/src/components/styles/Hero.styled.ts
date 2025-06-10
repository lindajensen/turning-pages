import styled from "styled-components";
import { theme } from "./theme";

export const StyledHero = styled.section`
	text-align: center;
	width: 100%;
	margin: 0 auto;
	padding: 1.2rem;
	max-width: 50rem;

	img {
		display: none;
	}

	h1 {
		font-size: 3.125rem;
		line-height: 1.1;
		margin-bottom: 1rem;
	}

	p {
		margin-bottom: 1rem;
		font-size: 0.9rem;
	}

	@media (min-width: ${theme.breakpoints.tablet}) {
		display: grid;
		grid-template-columns: 1fr 2fr;
		align-items: center;
		gap: 1rem;

		img {
			display: block;
			height: 18.75rem;
		}
	}
`;
