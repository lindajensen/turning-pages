import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Book } from "../App";
import BookQuote from "../components/BookQuote";
import { Review } from "../App";
import { FaRegStar } from "react-icons/fa";
import {
	StyledBookDetails,
	StyledReviews,
	StyledReviewCard,
	StyledReviewForm,
	StyledGenres
} from "../components/styles/BookDetails.styled";

interface NewReview {
	book_id: number;
	user: string;
	text: string;
}

const BookDetails = () => {
	const { id } = useParams();

	const [book, setBook] = useState<Book>(null);
	const [reviewData, setReviewData] = useState<Review[]>([]);

	const [username, setUsername] = useState("");
	const [reviewText, setReviewText] = useState("");

	// Scroll when loading component
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	useEffect(() => {
		fetch(`http://localhost:8080/books/${id}`)
			.then((response) => response.json())
			.then((data) => setBook(data))
			.catch((error) => console.error("Error loading book:", error));
	}, []);

	useEffect(() => {
		fetch(`http://localhost:8080/reviews/${id}`)
			.then((response) => response.json())
			.then((result) => {
				setReviewData(result);
			})
			.catch((error) => console.error("Error loading JSON:", error));
	}, []);

	if (!book) {
		return <p>Book not found</p>;
	}

	// Submit new review
	function handleReviewSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const newReview: NewReview = {
			book_id: book.id,
			user: username,
			text: reviewText
		};

		fetch(`http://localhost:8080/reviews`, {
			method: "POST",
			body: JSON.stringify(newReview),
			headers: {
				"Content-Type": "application/json"
			}
		});

		setReviewData((prevReviews) => [
			...prevReviews,
			{ user: username, text: reviewText }
		]);

		setUsername("");
		setReviewText("");
	}

	return (
		<StyledBookDetails>
			<img src={`http://localhost:8080/${book.cover}`} alt={book.title} />

			<article>
				<h2>{book.title}</h2>
				<p>{book.author}</p>
				<p>
					{" "}
					<FaRegStar />
					{book.rating.toFixed(1)}
				</p>

				<p>{book.description}</p>

				<BookQuote bookQuote={book.quote} />

				<p>First published {book.publication_date}</p>
				<p>{book.pages} pages</p>

				<StyledReviews>
					<h3>Reviews</h3>
					{reviewData.length === 0 ? (
						<p>Looks like no one has reviewed this book yet.</p>
					) : (
						<ul>
							{reviewData.map((review, index) => (
								<StyledReviewCard key={index}>
									<p>{review.text}</p>
									<p>- {review.user}</p>
								</StyledReviewCard>
							))}
						</ul>
					)}
				</StyledReviews>

				<StyledReviewForm>
					<h4>Leave a Review</h4>
					<form onSubmit={handleReviewSubmit}>
						<label htmlFor="username">Your name</label>
						<input
							type="text"
							id="username"
							name="username"
							value={username}
							placeholder="Enter your name"
							aria-label="Your name"
							required
							onChange={(e) => setUsername(e.target.value)}
						/>
						<label htmlFor="review">Your Review</label>
						<textarea
							name="review"
							id="review"
							cols={48}
							rows={10}
							value={reviewText}
							placeholder="Write your thoughts about the book"
							aria-label="Your review"
							required
							onChange={(e) => setReviewText(e.target.value)}></textarea>

						<button aria-label="Submit your review" type="submit">
							Submit Review
						</button>
					</form>
				</StyledReviewForm>

				<StyledGenres>
					<h3>Genres</h3>
					<p>
						{book.genres.split(" ").map((genre: string, index: number) => (
							<span key={index}>{genre}</span>
						))}
					</p>
				</StyledGenres>
			</article>
		</StyledBookDetails>
	);
};

export default BookDetails;
