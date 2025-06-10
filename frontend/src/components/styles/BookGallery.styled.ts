import styled from "styled-components";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding-inline: 1.2rem;
	padding-bottom: 1.2rem;
	max-width: 38rem;
	margin: 0 auto;

	label {
		font-size: 0.9rem;
	}

	input::placeholder {
		font-size: 0.8rem;
		color: #1a1a1a;
	}

	input,
	select {
		padding: 1rem;
		border-radius: 4px;
		padding: 0.75rem;
		font-size: 0.9rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 100%;
		background-color: #fff;
		color: #1a1a1a;
		margin-bottom: 0.4rem;

		&:focus {
			border: 2px solid #ff9933;
			outline: none;
		}
	}

	select {
		padding: 1rem;
		font-size: 0.8rem;
		border: 1px solid #ccc;
		border-radius: 8px;
		background-color: #fff;
		color: #1a1a1a;
		cursor: pointer;

		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;

		background-image: url("data:image/svg+xml,%3Csvg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: calc(100% - 0.5rem) center;
		background-size: 1rem;
	}
`;

export const StyledBookGallery = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(14.375rem, 1fr));
	justify-content: center;
	gap: 1.5rem;
	padding: 1.25rem;
	margin: 0 auto;
	margin-bottom: 1rem;
`;

export const StyledCard = styled.article`
	position: relative;
	background: #fff;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	padding: 2rem 0 0.5rem 0;
	text-align: center;
	transition:
		transform 0.2s,
		box-shadow 0.2s;
	width: 100%;
	margin: 0 auto;
	max-width: 15rem;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	img {
		border-radius: 4px;
		height: 18rem;
		margin: 0 auto;
	}

	a {
		text-decoration: none;
		color: #1a1a1a;
	}

	h2 {
		margin-top: 1rem;
		padding-inline: 0.9rem;
		font-size: 1.3rem;
	}

	p {
		margin: 0.313rem 0;
	}

	p:nth-last-of-type(2),
	p:nth-last-of-type(1) {
		font-size: 0.9rem;
	}
`;

export const StyledReadingListButton = styled.button`
	margin-top: 0.625rem;
	padding: 0.625rem 0.875rem;
	background-color: transparent;
	border: 2px solid #ff9933;
	text-transform: uppercase;
	color: #1a1a1a;
	border-radius: 4px;
	cursor: pointer;
	margin-bottom: 0.8rem;
	font-size: 0.9rem;

	&:hover {
		background-color: #ff9933;
	}

	&:active {
		background-color: #f68151;
	}
`;
