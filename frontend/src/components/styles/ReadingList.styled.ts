import styled from "styled-components";

export const StyledReadingList = styled.section`
	list-style: none;
	padding: 0;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	max-width: 56.25rem;

	li {
		display: flex;
		align-items: center;
		background-color: transparent;
		border: 1px solid #ccc;
		padding: 1rem;
		border-radius: 8px;
		background-color: transparent;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

		div {
			flex-grow: 1;

			h3 {
				margin: 0;
				font-size: 1.1rem;
			}

			p {
				margin: 0;
				font-size: 0.9rem;
			}
		}

		button {
			background: none;
			border: none;
			font-size: 1.2rem;
			cursor: pointer;
			transition: color 0.2s;

			&:hover {
				color: #ff9933;
			}
		}
	}
`;

export const StyledEmptyMessage = styled.p`
	text-align: center;
	font-size: 0.9rem;
	font-style: italic;
	padding: 0.625rem;
	height: 62vh;
`;
