import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Book } from "../App";
import {
	StyledAdminLogin,
	StyledBookList,
	StyledBookItem,
	StyledBookInfo,
	StyledActionButtons
} from "../components/styles/Admin.styled";

const Admin = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [books, setBooks] = useState<Book[]>([]);

	useEffect(() => {
		// Check if logged in
		const isLoggedIn = localStorage.getItem("isAuthenticated");

		if (isLoggedIn === "true") {
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
		}

		// Fetch books from API
		fetch("http://localhost:8080/books")
			.then((response) => response.json())
			.then((data) => setBooks(data))
			.catch((error) => console.error("Error fetching books:", error));
	}, []);

	// Login Function
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (userName === "Admin" && password === "qwerty") {
			setIsAuthenticated(true);
			localStorage.setItem("isAuthenticated", "true");
			console.log("Logged in");
		} else {
			setIsAuthenticated(false);
			localStorage.setItem("isAuthenticated", "false");
			console.log("Wrong username and/or password");
		}

		localStorage.setItem("isAuthenticated", "true");
	}

	function logout() {
		setIsAuthenticated(false);
		localStorage.removeItem("isAuthenticated");
	}

	function deleteBook(bookId: number) {
		fetch(`http://localhost:8080/books/${bookId}`, {
			method: "DELETE"
		})
			.then((response) => {
				if (response.ok) {
					if (
						confirm(
							"Are you sure you want to delete this book? This action cannot be undone."
						)
					) {
						console.log("Book deleted");
					} else {
						return;
					}

					setBooks(books.filter((book) => book.id !== bookId));
				} else {
					throw new Error("Failed to delete book");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}

	return (
		<div>
			<StyledAdminLogin>
				{!isAuthenticated ? (
					<h2>Sign in to Access Admin Panel</h2>
				) : (
					<h2>Welcome Admin</h2>
				)}
				{!isAuthenticated ? (
					<form onSubmit={handleSubmit}>
						<label htmlFor="username">User Name</label>
						<input
							id="username"
							onChange={(event) => setUserName(event.target.value)}
							placeholder="User Name"
							type="text"
						/>

						<label htmlFor="password">Password</label>
						<input
							id="password"
							onChange={(event) => setPassword(event.target.value)}
							placeholder="Password"
							type="password"
						/>
						<input
							aria-label="Log in to your admin account"
							type="submit"
							value="Log in"
						/>
					</form>
				) : (
					<button aria-label="Log out of your admin account" onClick={logout}>
						Log Out
					</button>
				)}
			</StyledAdminLogin>

			{isAuthenticated && (
				<StyledBookList>
					<article>
						<StyledBookItem>
							<StyledBookInfo>
								<h3>Book Title</h3>
								<p>Author</p>
							</StyledBookInfo>
							<StyledActionButtons>
								<Link
									aria-label="Navigate to the add new book page"
									className="add-book-link"
									to={"/add-book"}>
									Add New Book
								</Link>
							</StyledActionButtons>
						</StyledBookItem>
					</article>
					{books.map((book) => (
						<article key={book.id}>
							<StyledBookItem>
								<StyledBookInfo>
									<h3>{book.title}</h3>
									<p>{book.author}</p>
								</StyledBookInfo>
								<StyledActionButtons>
									<Link
										aria-label={`Navigate to the page to edit the book titled ${book.title}`}
										to={`/edit-book/${book.id}`}>
										Edit
									</Link>
									<button
										aria-label={`Delete the book titled ${book.title} from database`}
										onClick={() => deleteBook(book.id)}>
										Delete
									</button>
								</StyledActionButtons>
							</StyledBookItem>
						</article>
					))}
				</StyledBookList>
			)}
		</div>
	);
};

export default Admin;
