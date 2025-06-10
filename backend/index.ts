import cors from "cors";
import express, { Request, Response } from "express";
import * as sqlite from "sqlite";
import { Database } from "sqlite";
import sqlite3 from "sqlite3";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, "public/");
  },
  filename: (request, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let database: Database;

(async () => {
  database = await sqlite.open({
    driver: sqlite3.Database,
    filename: "setup.sqlite",
  });

  await database.run("PRAGMA foreign_keys = ON");

  console.log("Ready to make database queries.");
})();

interface Reviews {
  id: number;
  book_id: number;
  user: string;
  text: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  quote: string;
  cover: string;
  genres: string;
  publicationDate: string;
  rating: number;
  pages: number;
  isbn: string;
}

interface NewReview {
  book_id: number;
  user: string;
  text: string;
}

// GET books with query params
app.get("/books/search", async (request: Request, response: Response) => {
  const genre = request.query.genre;

  const books: Book[] = await database.all(
    "SELECT * FROM books WHERE genres LIKE ?",
    [`%${genre}%`]
  );

  response.status(200).send(books);
});

// GET all books
app.get("/books", (request: Request, response: Response) => {
  database.all("SELECT * FROM books").then((books: Book[]) => {
    response.status(200).send(books);
  });
});

// GET a specific book
app.get("/books/:id", async (request: Request, response: Response) => {
  const books: Book[] = await database.all("SELECT * FROM books WHERE id=?", [
    request.params.id,
  ]);

  if (books.length !== 1) {
    response.status(404).send({ message: "Book not found" });
  }

  response.status(200).send(books[0]);
});

// GET specific reviews
app.get("/reviews/:book_id", async (request: Request, response: Response) => {
  const reviews: Reviews[] = await database.all(
    "SELECT * FROM reviews WHERE book_id=?",
    [request.params.book_id]
  );

  if (reviews.length === 0) {
    response.status(404).send("Review not found");
  }

  response.status(200).send(reviews);
});

// POST - add a new book
app.post(
  "/books",
  upload.single("cover"),
  async (request: Request, response: Response) => {
    const filename = request.file ? request.file.filename : "no-cover.png";

    await database.run(
      "INSERT INTO books (title, author, description, quote, cover, genres, publication_date, rating, pages, isbn) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        request.body.title,
        request.body.author,
        request.body.description,
        request.body.quote,
        filename,
        request.body.genres,
        request.body.publication_date,
        request.body.rating,
        request.body.pages,
        request.body.isbn,
      ]
    );
    response.status(201).send({ message: "Book added to database" });
  }
);

// POST review for a book
app.post(
  "/reviews",
  async (request: Request, response: Response): Promise<void> => {
    const { book_id, user, text }: NewReview = request.body;

    if (!book_id || !user || !text) {
      response.status(400).send({ message: "Missing required fields" });
      return;
    }

    await database.run(
      "INSERT INTO reviews (book_id, user, text) VALUES (?, ?, ?)",
      [book_id, user, text]
    );
    response.status(201).send({ message: "Review added" });
  }
);

// UPDATE book in database
app.put(
  "/books/:id",
  upload.single("cover"),
  async (request: Request, response: Response) => {
    const existingBook = await database.get(
      "SELECT cover FROM books WHERE id=?",
      [request.params.id]
    );

    const filename = request.file ? request.file.filename : existingBook.cover;

    await database.run(
      "UPDATE books SET title=?, author=?, description=?, quote=?, cover=?, genres=?, publication_date=?, rating=?, pages=?, isbn=? WHERE id=?",
      [
        request.body.title,
        request.body.author,
        request.body.description,
        request.body.quote,
        filename,
        request.body.genres,
        request.body.publication_date,
        request.body.rating,
        request.body.pages,
        request.body.isbn,
        request.params.id,
      ]
    );
    response.status(200).send({ message: "Book updated" });
  }
);

// DELETE book from database
app.delete("/books/:id", async (request: Request, response: Response) => {
  await database.run("DELETE FROM reviews WHERE book_id=?", [
    request.params.id,
  ]);
  await database.run("DELETE FROM books WHERE id=?", [request.params.id]);

  response.status(200).send({ message: "Book deleted" });
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
