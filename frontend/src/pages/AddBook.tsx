import { useState, useEffect, useRef } from "react";
import { Book } from "../App";
import { FaCircleCheck } from "react-icons/fa6";
import { toast } from "react-toastify";

import {
	StyledEditBook,
	StyledCoverUploadSection,
	StyledSaveButton
} from "../components/styles/EditBook.styled";

interface NewBook {
	title: string;
	author: string;
	description: string;
	quote: string;
	cover: string;
	genres: string;
	publication_date: string;
	rating: number;
	pages: number;
	isbn: string;
}

const AddBook = () => {
	const [bookData, setBookData] = useState<Book[]>([]);
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [description, setDescription] = useState("");
	const [quote, setQuote] = useState("");
	const [genres, setGenres] = useState("");
	const [publication_date, setPublicationDate] = useState("");
	const [rating, setRating] = useState("");
	const [pages, setPages] = useState("");
	const [isbn, setIsbn] = useState("");

	const [preview, setPreview] = useState("");

	const fileInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		fetch("http://localhost:8080/books/")
			.then((response) => response.json())
			.then((result: Book[]) => {
				setBookData(result);
			})
			.catch((error) => console.error("Error loading JSON:", error));
	}, []);

	// Submit form
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const book = bookData.find(
			(book) => book.title.toLowerCase() === title.toLowerCase()
		);

		if (book) {
			toast.error("Book is already in database", {
				icon: <FaCircleCheck style={{ color: "#d32f2f" }} />
			});
			setTitle("");
			setAuthor("");
			setDescription("");
			setQuote("");
			setGenres("");
			setPublicationDate("");
			setRating("");
			setPages("");
			setIsbn("");
			setPreview("");

			fileInput.current.value = "";

			return;
		}

		const newBook: NewBook = {
			title,
			author,
			description,
			quote,
			cover: "",
			genres,
			publication_date,
			rating: Number(rating),
			pages: Number(pages),
			isbn
		};

		const formData = new FormData();

		formData.append("title", newBook.title);
		formData.append("author", newBook.author);
		formData.append("description", newBook.description);
		formData.append("quote", newBook.quote);
		formData.append("genres", newBook.genres);
		formData.append("publication_date", newBook.publication_date);
		formData.append("rating", newBook.rating.toString());
		formData.append("pages", newBook.pages.toString());
		formData.append("isbn", newBook.isbn);

		const file = fileInput.current?.files?.[0];

		if (file) {
			formData.append("cover", file);
		} else {
			formData.append("cover", "");
		}

		fetch("http://localhost:8080/books", {
			method: "POST",
			body: formData
		});

		setTitle("");
		setAuthor("");
		setDescription("");
		setQuote("");
		setGenres("");
		setPublicationDate("");
		setRating("");
		setPages("");
		setIsbn("");

		setPreview("");

		fileInput.current.value = "";

		toast.success("Book Added Successfully", {
			icon: <FaCircleCheck style={{ color: "#4caf50" }} />
		});
	}

	// function handleRemoveCover() {
	// 	setPreview(`http://localhost:8080/no-cover.png`);
	// }

	function disableScrollInput(e: React.WheelEvent<HTMLInputElement>) {
		const input = e.target as HTMLInputElement;

		input.blur();
		e.stopPropagation();

		setTimeout(() => {
			input.focus();
		}, 0);
	}

	function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
		const newCoverImage = e.target.files[0].name;
		const url = window.URL.createObjectURL(e.target.files[0]);

		setPreview(url);
	}

	return (
		<StyledEditBook>
			<h2>Add New Book</h2>
			<form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					id="title"
					name="title"
					placeholder="E.g. Pride and Prejudice"
					value={title}
					required
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label htmlFor="author">Author</label>
				<input
					type="text"
					id="author"
					name="author"
					placeholder="E.g. Jane Austen"
					value={author}
					required
					onChange={(e) => setAuthor(e.target.value)}
				/>

				<label htmlFor="description">Description</label>
				<textarea
					id="description"
					name="description"
					rows={12}
					placeholder="E.g. Pride and Prejudice by Jane Austen is a classic novel set in early 19th-century England, focusing on the relationship between the strong-willed Elizabeth Bennet and the aloof Mr. Darcy..."
					value={description}
					required
					onChange={(e) => setDescription(e.target.value)}></textarea>

				<label htmlFor="quote">Quote</label>
				<textarea
					id="quote"
					name="quote"
					rows={5}
					placeholder="E.g. It is a truth universally acknowledged, that a single man in possession..."
					value={quote}
					required
					onChange={(e) => setQuote(e.target.value)}></textarea>

				<StyledCoverUploadSection>
					<label htmlFor="current-cover">Current Book Cover</label>
					<div>
						<img
							src={preview ? preview : `http://localhost:8080/no-cover.png`}
							alt="Current Cover"
						/>
						{/* <span onClick={handleRemoveCover}>
							<FaRegTrashCan /> Delete
						</span> */}
					</div>
					<label htmlFor="new-cover">Upload New Book Cover (optional)</label>
					<input
						type="file"
						name="new-cover"
						id="cover"
						ref={fileInput}
						onChange={handleFileChange}
					/>
				</StyledCoverUploadSection>

				<label htmlFor="genres">Genres</label>
				<p>
					Please separate genres with spaces and use hyphens for multi-word
					genres (e.g. science-fiction).
				</p>
				<input
					type="text"
					id="genres"
					name="genres"
					placeholder="E.g. Romance Young-Adult"
					value={genres}
					required
					onChange={(e) => setGenres(e.target.value)}
				/>

				<label htmlFor="publication-date">Publication Date</label>
				<input
					type="text"
					id="publication-date"
					name="publication-date"
					placeholder="E.g. 28 January 1813"
					value={publication_date}
					required
					onChange={(e) => setPublicationDate(e.target.value)}
				/>

				<label htmlFor="rating">Rating</label>
				<input
					type="number"
					id="rating"
					name="rating"
					placeholder="E.g. 4.2"
					value={rating}
					required
					onChange={(e) => setRating(e.target.value)}
					onWheel={disableScrollInput}
				/>

				<label htmlFor="pages">Pages</label>
				<input
					type="number"
					id="pages"
					name="pages"
					placeholder="E.g. 400"
					value={pages}
					required
					onChange={(e) => setPages(e.target.value)}
					onWheel={disableScrollInput}
				/>

				<label htmlFor="isbn">ISBN</label>
				<input
					type="text"
					id="isbn"
					name="isbn"
					placeholder="E.g. 978-0486284736"
					value={isbn}
					required
					onChange={(e) => setIsbn(e.target.value)}
				/>

				<div>
					<StyledSaveButton aria-label="Save book to database" type="submit">
						Save
					</StyledSaveButton>
				</div>
			</form>
		</StyledEditBook>
	);
};

export default AddBook;
