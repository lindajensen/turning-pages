import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledToastContainer = styled(ToastContainer)`
	.Toastify__toast--success {
		color: #4caf50;
	}

	.Toastify__progress-bar--success {
		background-color: #4caf50;
	}

	.Toastify__toast--error {
		color: #d32f2f;
	}

	.Toastify__progress-bar--error {
		background-color: #d32f2f;
	}
`;
