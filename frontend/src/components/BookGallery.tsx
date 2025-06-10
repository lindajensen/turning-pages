import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Book } from "../App";
import RatingBadge from "./RatingBadge";
import { StyledEmptyMessage } from "./styles/ReadingList.styled";

import {
	StyledBookGallery,
	StyledCard,
	StyledReadingListButton,
	StyledForm
} from "./styles/BookGallery.styled";

const BookGallery = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const [searchTerm, setSearchTerm] = useState("");

	const [readingList, setReadingList] = useState<Book[]>(
		JSON.parse(localStorage.getItem("readingList") || "[]")
	);

	useEffect(() => {
		fetch("http://localhost:8080/books")
			.then((response) => response.json())
			.then((data) => setBooks(data))
			.catch((error) => console.error("Error fetching books:", error));
	}, []);

	// Check if book is in reading list
	const isBookInReadingList = (id: number) => {
		const storedList: Book[] = JSON.parse(
			localStorage.getItem("readingList") || "[]"
		);
		return storedList.some((book: Book) => book.id === id);
	};

	// Toggle function to add/remove books from reading list
	function toggleReadingList(book: Book): void {
		const updatedReadingList = [...readingList];
		const bookIndex = updatedReadingList.findIndex(
			(item) => item.id === book.id
		);

		if (bookIndex === -1) {
			updatedReadingList.push(book);
		} else {
			updatedReadingList.splice(bookIndex, 1);
		}

		setReadingList(updatedReadingList);
		localStorage.setItem("readingList", JSON.stringify(updatedReadingList));
	}

	// Filter by title
	let filteredGallery = [...books];

	if (searchTerm) {
		filteredGallery = filteredGallery.filter((book) =>
			book.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}

	function handleGenreChange(e: React.ChangeEvent<HTMLSelectElement>) {
		const genre = e.target.value;

		fetch(`http://localhost:8080/books/search?genre=${genre}`)
			.then((response) => response.json())
			.then((result) => {
				setBooks(result);
			});
	}

	return (
		<>
			<StyledForm>
				<label htmlFor="title-search">Search by title</label>
				<input
					onChange={(event) => setSearchTerm(event.target.value)}
					id="title-search"
					type="text"
					placeholder="Filter by title"
				/>

				<label htmlFor="genre">Search by genre</label>
				<select id="genre" onChange={handleGenreChange}>
					<option value="">Select a genre</option>
					<option value="Fiction">Fiction</option>
					<option value="Classic">Classic</option>
					<option value="Dystopian">Dystopian</option>
					<option value="Science Fiction">Science Fiction</option>
					<option value="Romance">Romance</option>
					<option value="Fantasy">Fantasy</option>
					<option value="Adventure">Adventure</option>
					<option value="Young Adult">Young Adult</option>
					<option value="Epic">Epic</option>
					<option value="Historical Fiction">Historical Fiction</option>
					<option value="Drama">Drama</option>
					<option value="Philosophical Fiction">Philosophical Fiction</option>
					<option value="War Fiction">War Fiction</option>
					<option value="Coming of Age">Coming of age</option>
					<option value="Literary Fiction">Literary Fiction</option>
					<option value="Children's Literature">Children's Literature</option>
					<option value="Horror">Horror</option>
					<option value="Psychological Thriller">Psychological Thriller</option>
					<option value="Mystery">Mystery</option>
					<option value="Humor">Humor</option>
					<option value="Gothic">Gothic</option>
					<option value="Post-apocalyptic">Post-apocalyptic</option>
					<option value="Satire">Satire</option>
				</select>
			</StyledForm>

			{filteredGallery.length === 0 ? (
				<StyledEmptyMessage>
					We couldn't find any books that match your search.
				</StyledEmptyMessage>
			) : (
				<StyledBookGallery>
					{filteredGallery.map((book) => (
						<StyledCard key={book.id}>
							{book.rating > 4 && <RatingBadge />}
							<Link to={`/${book.id}`}>
								<img
									src={`http://localhost:8080/${book.cover}`}
									alt={book.title}
								/>
								<h2>{book.title}</h2>
							</Link>
							<p>{book.author}</p>
							<p>{book.pages} pages</p>
							<StyledReadingListButton onClick={() => toggleReadingList(book)}>
								{isBookInReadingList(book.id)
									? "Remove from List"
									: "Add to Reading List"}
							</StyledReadingListButton>
						</StyledCard>
					))}
				</StyledBookGallery>
			)}
		</>
	);
};

export default BookGallery;
