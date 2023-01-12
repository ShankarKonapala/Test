import { useParams } from "react-router-dom";

export function BookDetails({ bookList }) {
  const { bookid } = useParams();
  const book = bookList[bookid];

  return (
    <div>
      <div className="book-detail-container">
        <div className="book-spec">
          <h2 className="book-name">{book.name}</h2>
          <p className="book-rating">⭐{book.rating}</p>
        </div>
        <p className="book-summary">{book.summary}</p>
      </div>
    </div>
  );
}
