import { useState, useEffect } from "react";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";
import { GlobalStyles } from "./components/styles/Global";

import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ReadingList from "./pages/ReadingList";
import ReadingChallenge from "./pages/ReadingChallenge";
import BookDetails from "./pages/BookDetails";
import Admin from "./pages/Admin";
import EditBook from "./pages/EditBook";
import AddBook from "./pages/AddBook";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastContainer } from "./components/styles/ToastContainer.styled";

export const BooksContext = createContext<Book[]>([]);

export interface Review {
	user: string;
	text: string;
}

export interface Book {
	id: number;
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
	reviews: Review[];
}

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route index element={<HomePage />} />
			<Route path="/:id" element={<BookDetails />} />
			<Route path="/readinglist" element={<ReadingList />} />
			<Route path="/reading-challenge" element={<ReadingChallenge />} />
			<Route path="/admin" element={<Admin />} />
			<Route path="/edit-book/:id" element={<EditBook />} />
			<Route path="/add-book" element={<AddBook />} />
		</Route>
	)
);

function App() {
	const [bookData, setBookData] = useState<Book[]>([]);

	useEffect(() => {
		fetch("http://localhost:8080/books/")
			.then((response) => response.json())
			.then((result) => {
				setBookData(result);
			})
			.catch((error) => console.error("Error loading JSON:", error));
	}, []);

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<BooksContext.Provider value={bookData}>
					<RouterProvider router={router} />
					<StyledToastContainer />
				</BooksContext.Provider>
			</ThemeProvider>
		</>
	);
}

export default App;
