import { useState } from "react";
import { Book } from "../App";
import {
	StyledReadingList,
	StyledEmptyMessage
} from "../components/styles/ReadingList.styled";
import { FaRegTrashCan } from "react-icons/fa6";

const ReadingList = () => {
	const [readingList, setReadingList] = useState<Book[]>(
		JSON.parse(localStorage.getItem("readingList") || "[]")
	);

	function removeFromReadingList(bookId: number): void {
		const isConfirmed = confirm(
			"Oh no! Are you sure you want to let this book go?"
		);

		if (!isConfirmed) {
			return;
		}

		const filteredReadingList = readingList.filter(
			(book: Book) => book.id !== bookId
		);

		localStorage.setItem("readingList", JSON.stringify(filteredReadingList));
		setReadingList(filteredReadingList);
	}

	return (
		<StyledReadingList>
			{readingList.length === 0 ? (
				<StyledEmptyMessage>
					Looks like your bookshelf is empty. Time to find your next great read!
				</StyledEmptyMessage>
			) : (
				readingList.map((item: Book) => (
					<li key={item.id}>
						<div>
							<h3>{item.title}</h3>
							<p>{item.author}</p>
						</div>
						<button
							onClick={() => removeFromReadingList(item.id)}
							aria-label={`Remove the book titled ${item.title} from your reading list`}>
							<FaRegTrashCan />
						</button>
					</li>
				))
			)}
		</StyledReadingList>
	);
};

export default ReadingList;
