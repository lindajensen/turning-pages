import styled from "styled-components";

export const StyledFooter = styled.footer`
	background-color: #ff9933;
	padding: 1.2rem 1.2rem;

	p {
		font-family: "Montserrat", sans-serif;
		text-align: center;
		text-transform: uppercase;
		font-size: 2.4rem;
		font-weight: 700;
	}

	span {
		font-style: italic;
	}

	div {
		display: flex;
		justify-content: space-between;
	}

	ul {
		display: flex;
		gap: 0.2rem;
	}

	img {
		width: 1.563rem;
	}
`;
