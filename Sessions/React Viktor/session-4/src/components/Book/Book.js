import "./Book.css";

export function Book(book) {
  let pages = book.pages;

  return (
    <div className="Card">
      <div>
        <h1>{book.title}</h1>
        <h3>{book.author}</h3>
      </div>
    </div>
  );
}

export default Book;
