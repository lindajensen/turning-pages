import styled from "styled-components";

export const StyledEditBook = styled.section`
	max-width: 37.5rem;
	margin: 0 auto;
	border-radius: 8px;

	h2 {
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
		text-align: center;
	}

	form {
		background: #fff;
		border: 1px solid #ccc;
		padding: 2rem;
		border-radius: 8px;
		max-width: 37.5rem;
		margin: auto;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	label {
		display: block;
		margin-top: 1rem;
		font-weight: bold;
		font-size: 0.9rem;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.6rem;
		margin-top: 0.4rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 0.9rem;
		font-family: "Poppins", sans-serif;
	}

	input:focus,
	textarea:focus {
		border: 2px solid #ff9933;
		outline: none;
	}

	p {
		font-size: 0.8rem;
		color: #1a1a1a;
		margin-top: 0.2rem;
		margin-bottom: 0.4rem;
	}

	div {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
		margin-top: 2rem;
	}

	button {
		padding: 0.8rem;
		width: 8rem;
		font-size: 0.9rem;
		border: none;
		border-radius: 4px;
		color: #1a1a1a;
		cursor: pointer;
		text-transform: uppercase;
	}
`;

export const StyledCoverUploadSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	max-width: 20rem;
	margin-top: 0 !important;

	div {
		position: relative;
		margin: 0;
		width: 100%;
	}

	div img {
		width: 100%;
		border-radius: 8px;
		object-fit: cover;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	}

	span {
		position: absolute;
		top: -0.75rem;
		right: -0.75rem;
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		background-color: #ff9933;
		color: #1a1a1a;
		font-size: 0.9rem;
		font-weight: bold;
		padding: 0.5rem 0.9rem;
		border-radius: 6px;
		cursor: pointer;
		transition:
			background-color 0.3s ease,
			transform 0.2s ease;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	}

	span:hover {
		background-color: #ffb366;
	}

	span svg {
		width: 1.125rem;
		margin-right: 0.125rem;
		margin-bottom: 0.188rem;
	}
`;

export const StyledSaveButton = styled.button`
	background-color: #ff9933;
	color: #1a1a1a;
	text-transform: uppercase;
	font-size: 0.9rem;

	&:hover {
		background-color: #ffb366;
	}
`;

export const StyledCancelButton = styled.button`
	background-color: #ddd;
	color: #1a1a1a;
	font-size: 0.9rem;

	&:hover {
		background-color: #ccc;
	}
`;
