import styled from "styled-components";

export const StyledNavbar = styled.nav`
	padding-bottom: 0.5rem;

	div {
		padding-top: 0.625rem;
		background-color: #ff9933;
		height: 2.5rem;

		p {
			text-align: center;
			font-size: 0.9rem;
			text-transform: uppercase;
		}
	}

	ul {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		align-items: center;
		padding: 1.8rem 0.625rem 0.625rem 0.625rem;
		gap: 1.5rem;
	}

	a {
		text-decoration: none;
		font-size: 0.9rem;

		&:visited {
			color: inherit;
		}
	}

	.active {
		background-color: #ff9933;
		padding-inline: 0.8rem;
		padding-block: 0.3rem;
		border-radius: 8px;
	}
`;
