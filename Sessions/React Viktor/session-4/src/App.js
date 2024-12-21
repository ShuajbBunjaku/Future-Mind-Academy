import Book from "./components/Book/Book";

function App() {
  let booksArray = [
    {
      title: "The Lord of the Rings",
      author: "J. R. R. Tolkien",
      pages: 1176,
    },
    {
      title: "The Hobbit",
      author: "J. R. R. Tolkien",
      pages: 295,
    },
    {
      title: "The Silmarillion",
      author: "J. R. R. Tolkien",
      pages: 336,
    },
    {
      title: "The Fellowship of the Ring",
      author: "J. R. R. Tolkien",
      pages: 416,
    },
    {
      title: "The Two Towers",
      author: "J. R. R. Tolkien",
      pages: 416,
    },
    {
      title: "The Return of the King",
      author: "J. R. R. Tolkien",
      pages: 416,
    },
    {
      title: "The Children of Hurin",
      author: "J. R. R. Tolkien",
      pages: 416,
    },
    {
      title: "The Silmarillion",
      author: "J. R. R. Tolkien",
      pages: 336,
    },
    {
      title: "The Children of Hurin",
      author: "J. R. R. Tolkien",
      pages: 416,
    },
    {
      title: "The Silmarillion",
      author: "J. R. R. Tolkien",
      pages: 336,
    },
    {
      title: "The Children of Hurin",
      author: "J. R. R. Tolkien",
      pages: 416,
    },
    {
      title: "The Silmarillion",
      author: "J. R. R. Tolkien",
      pages: 336,
    },
    {
      title: "The Children of Hurin",
      author: "J. R. R. Tolkien",
      pages: 416,
    },
  ];
  return (
    <div>
      {booksArray.map((book) => {
        return <Book title={book.title} author={book.author} pages={book.pages} />;
      })}
    </div>
  );
}

export default App;
