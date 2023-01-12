import { Book } from './Book';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function BookList({ bookList, setBookList }) {

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div>
      <div className='add-book-form'>
        <TextField onChange={(event) => setName(event.target.value)}
          label="Enter the name" variant="standard" />
        <TextField onChange={(event) => setPoster(event.target.value)}
          label="Enter the Poster" variant="standard" />
        <TextField onChange={(event) => setRating(event.target.value)}
          label="Enter the Rating" variant="standard" />
        <TextField onChange={(event) => setSummary(event.target.value)}
          label="Enter the Summary" variant="standard" />
        <Button variant='contained'
          onClick={() => {
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            };
            setBookList([...bookList, newBook]);
          }}
        >Add Book</Button>
      </div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} books={bk} id={index} />
        ))}
      </div>
    </div>
  );
}
