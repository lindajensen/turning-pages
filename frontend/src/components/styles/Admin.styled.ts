import styled from "styled-components";

export const StyledAdminLogin = styled.section`
	max-width: 37.5rem;
	max-width: 56.25rem;
	margin: 0 auto;
	text-align: center;

	h2 {
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin-bottom: 1.5rem;
	}

	label {
		text-align: left;
		font-size: 0.9rem;
	}

	input[type="text"],
	input[type="password"] {
		padding: 1rem;
		border-radius: 4px;
		border: 1px solid #ccc;
		font-size: 0.9rem;
		width: 100%;

		&:focus {
			border: 2px solid #ff9933;
			outline: none;
		}
	}

	input[type="password"] {
		margin-bottom: 1rem;
	}

	input[type="submit"] {
		padding: 1rem;
		background-color: #ff9933;
		color: #fff;
		border: none;
		border-radius: 4px;
		font-size: 0.9rem;
		color: #1a1a1a;
		text-transform: uppercase;
		cursor: pointer;
	}

	input[type="submit"]:hover {
		background-color: #ffb366;
	}

	input::placeholder {
		font-size: 0.8rem;
	}

	button {
		margin-top: 0.625rem;
		font-size: 0.9rem;
		padding: 0.625rem 0.875rem;
		background-color: transparent;
		border: 2px solid #ff9933;
		text-transform: uppercase;
		color: #1a1a1a;
		border-radius: 4px;
		cursor: pointer;
		margin-bottom: 0.8rem;

		&:hover {
			background-color: #ff9933;
		}
	}
`;

export const StyledBookList = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	max-width: 37.5rem;
	margin: 0 auto;
	padding-block: 1rem;
`;

export const StyledBookItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #ccc;
	padding: 1rem;
	border-radius: 8px;
	background-color: transparent;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const StyledBookInfo = styled.div`
	flex-grow: 1;

	h3 {
		margin: 0;
		font-size: 0.9rem;
	}

	p {
		margin: 0;
		color: #555;
		font-size: 0.8rem;
	}
`;

export const StyledActionButtons = styled.div`
	display: flex;
	gap: 0.5rem;

	button {
		padding: 0.4rem 0.8rem;
		background-color: #d32f2f;
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.9rem;

		&:hover {
			background-color: #c62828;
		}
	}

	.add-book-link {
		padding: 0.4rem 0.8rem;
		background-color: transparent;
		color: #1a1a1a;
		border: 2px solid #ff9933;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.8rem;
		text-decoration: none;

		&:hover {
			background-color: #ff9933;
		}
	}

	a {
		padding: 0.4rem 0.8rem;
		background-color: #4caf50;
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.8rem;
		text-decoration: none;

		&:hover:not(.add-book-link) {
			background-color: #45a049;
		}
	}
`;
