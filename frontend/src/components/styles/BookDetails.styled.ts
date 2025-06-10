import styled from "styled-components";
import { theme } from "./theme";

export const StyledBookDetails = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	max-width: 50rem;
	margin: auto;

	article {
		margin: 0 auto;
		text-align: center;

		p:nth-of-type(1) {
			margin-bottom: 0.3rem;
		}

		p:nth-of-type(3) {
			text-align: justify;
			margin-block: 1rem;
		}
		p:nth-of-type(4) {
			text-align: left;
			font-size: 0.9rem;
			margin-bottom: 0.2rem;
		}

		p:nth-of-type(5) {
			text-align: left;
			font-size: 0.9rem;
			font-style: italic;
		}

		p:nth-of-type(6) {
			text-align: left;
			font-style: italic;
		}
	}

	img {
		width: 15.6rem;
		margin: 0 auto;
	}

	h2 {
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}

	h3 {
		text-align: left;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}

	svg {
		margin-right: 0.1rem;
		padding-top: 0.188rem;
	}

	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 1rem;

		li {
			background-color: #fce8e0;
			font-size: 0.9rem;
			padding: 0.5rem;
			border-radius: 4px;
			text-transform: uppercase;
		}
	}

	@media (min-width: ${theme.breakpoints.tablet}) {
		grid-template-columns: 1fr 1fr;

		img {
			padding-top: 1.2rem;
		}

		article {
			text-align: left;
		}

		p:nth-of-type(2) {
			margin-bottom: 1rem;
		}
	}
`;

export const StyledReviews = styled.div`
	ul {
		display: flex;
		flex-direction: column;
	}
`;

export const StyledReviewCard = styled.div`
	border: 2px solid #ff9933;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	padding-top: 1rem;
	padding-inline: 1rem;
	border-radius: 8px;
	font-size: 0.9rem;
	text-align: left;

	p:last-of-type {
		text-align: right;
		font-weight: 600;
		padding-bottom: 1rem;
	}
`;

export const StyledReviewForm = styled.div`
	h4 {
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		max-width: 31.25rem;
	}

	label {
		font-size: 0.9rem;
	}

	input,
	textarea {
		padding: 0.6rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 0.9;
		font-family: inherit;

		&:focus {
			border: 2px solid #ff9933;
			outline: none;
		}
	}

	input::placeholder,
	textarea::placeholder {
		font-size: 0.8rem;
	}

	button {
		padding: 1rem;
		margin-top: 0.5rem;
		background-color: #ff9933;
		color: #1a1a1a;
		text-transform: uppercase;
		border: none;
		border-radius: 6px;
		font-size: 0.9rem;
		cursor: pointer;

		&:hover {
			background-color: #ffb366;
		}

		&:active {
			background-color: #f68151;
		}
	}
`;

export const StyledGenres = styled.div`
	margin-bottom: 1rem;

	p {
		text-align: left;
		margin-top: 0.8rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}
	span {
		padding: 0.7rem;
		background-color: #faf0e6;
		color: #fff;
		border: none;
		border-radius: 4px;
		font-size: 0.9rem;
		color: #1a1a1a;
		text-transform: uppercase;
	}
`;
