import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Book } from "../App";
import {
	StyledEditBook,
	StyledCoverUploadSection,
	StyledSaveButton,
	StyledCancelButton
} from "../components/styles/EditBook.styled";

const EditBook = () => {
	const [bookData, setBookData] = useState<Book | null>(null);
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [description, setDescription] = useState("");
	const [quote, setQuote] = useState("");
	const [cover, setCover] = useState("");
	const [genres, setGenres] = useState("");
	const [publication_date, setPublicationDate] = useState("");
	const [rating, setRating] = useState(0);
	const [pages, setPages] = useState(0);
	const [isbn, setIsbn] = useState("");

	const [preview, setPreview] = useState("");

	const { id } = useParams();
	const navigate = useNavigate();

	const fileInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		fetch(`http://localhost:8080/books/${id}`)
			.then((response) => response.json())
			.then((book) => {
				setBookData(book);
				setTitle(book.title);
				setAuthor(book.author);
				setDescription(book.description);
				setQuote(book.quote);
				setCover(book.cover);
				setGenres(book.genres);
				setPublicationDate(book.publication_date);
				setRating(book.rating);
				setPages(book.pages);
				setIsbn(book.isbn);
			});
	}, [id]);

	// Scroll when loading component
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const updatedBook: Book = {
			id: Number(id),
			title,
			author,
			description,
			quote,
			cover,
			genres,
			publication_date,
			rating,
			pages,
			isbn,
			reviews: []
		};

		const formData = new FormData();

		formData.append("title", updatedBook.title);
		formData.append("author", updatedBook.author);
		formData.append("description", updatedBook.description);
		formData.append("quote", updatedBook.quote);
		formData.append("genres", updatedBook.genres);
		formData.append("publication_date", updatedBook.publication_date);
		formData.append("rating", updatedBook.rating.toString());
		formData.append("pages", updatedBook.pages.toString());
		formData.append("isbn", updatedBook.isbn);

		const file = fileInput.current?.files?.[0];

		if (file) {
			formData.append("cover", file);
		} else {
			formData.append("cover", cover);
		}

		fetch(`http://localhost:8080/books/${id}`, {
			method: "PUT",
			body: formData
		})
			.then((response) => response.json())
			.then((data) => {
				// console.log("Updated book:", data);
				navigate("/admin");
			})
			.catch((error) => console.error("Error updating book:", error));
	}

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

		if (bookData.cover !== newCoverImage) {
			setCover(newCoverImage);
			setPreview(url);
		}
	}

	// function handleRemoveCover() {
	// 	setPreview(`http://localhost:8080/no-cover.png`);
	// 	setCover("no-cover.png");
	// }

	return (
		<StyledEditBook>
			<h2>Edit Book</h2>
			<form onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					id="title"
					name="title"
					value={title}
					required
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label htmlFor="author">Author</label>
				<input
					type="text"
					id="author"
					name="author"
					value={author}
					required
					onChange={(e) => setAuthor(e.target.value)}
				/>

				<label htmlFor="description">Description</label>
				<textarea
					id="description"
					name="description"
					value={description}
					rows={12}
					required
					onChange={(e) => setDescription(e.target.value)}></textarea>

				<label htmlFor="quote">Quote</label>
				<textarea
					id="quote"
					name="quote"
					value={quote}
					rows={5}
					required
					onChange={(e) => setQuote(e.target.value)}></textarea>

				<StyledCoverUploadSection>
					<label htmlFor="cover">Current Cover</label>
					<div>
						<img
							src={preview ? preview : `http://localhost:8080/${cover}`}
							alt="Current Cover"
						/>
						{/* <span onClick={handleRemoveCover}>
							<FaRegTrashCan />
							Delete
						</span> */}
					</div>

					<label htmlFor="cover-upload">
						Choose new cover image (optional)
					</label>
					<input
						onChange={handleFileChange}
						type="file"
						id="cover-upload"
						name="cover"
						ref={fileInput}
					/>
				</StyledCoverUploadSection>

				<label htmlFor="genres">Genres</label>
				<input
					type="text"
					id="genres"
					name="genres"
					value={genres}
					onChange={(e) => setGenres(e.target.value)}
					required
				/>

				<label htmlFor="publication-date">Publication Date</label>
				<input
					type="text"
					id="publication-date"
					name="publication-date"
					value={publication_date}
					onChange={(e) => setPublicationDate(e.target.value)}
					required
				/>

				<label htmlFor="rating">Rating</label>
				<input
					type="number"
					id="rating"
					name="rating"
					value={rating || ""}
					required
					onChange={(e) => setRating(Number(e.target.value))}
					onWheel={disableScrollInput}
				/>

				<label htmlFor="pages">Pages</label>
				<input
					type="number"
					id="pages"
					name="pages"
					value={pages || ""}
					required
					onChange={(e) => setPages(Number(e.target.value))}
					onWheel={disableScrollInput}
				/>

				<label htmlFor="isbn">ISBN</label>
				<input
					type="text"
					id="isbn"
					name="isbn"
					value={isbn}
					onChange={(e) => setIsbn(e.target.value)}
				/>

				<div>
					<StyledSaveButton aria-label="Save changes to database" type="submit">
						Save
					</StyledSaveButton>
					<StyledCancelButton
						aria-label="Navigate back to the admin page without saving changes"
						onClick={() => {
							navigate("/admin");
						}}
						type="button">
						Cancel
					</StyledCancelButton>
				</div>
			</form>
		</StyledEditBook>
	);
};

export default EditBook;
