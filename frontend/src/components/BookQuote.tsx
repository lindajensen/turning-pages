import { StyledBookQuote } from "./styles/BookQuote.styled";

export interface Quote {
	bookQuote: string;
}

const BookQuote = (props: Quote) => {
	return (
		<StyledBookQuote>
			<h3>Quote</h3>
			<blockquote>{props.bookQuote}</blockquote>
		</StyledBookQuote>
	);
};

export default BookQuote;
