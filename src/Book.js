import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { Counter } from './Counter';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';

export function Book({ books, id }) {

  const [show, setShow] = useState(true);

  const styles = {
    color: books.rating > 8 ? "green" : "red",
  };

  const summaryStyle = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  return (
    <div className='book-container'>
      <img className='book-poster' src={books.poster} alt={books.name}></img>
      <div className='book-spec'>
        <h1 className='book-name'>{books.name}-{id}</h1>
        <h3 className='book-rating' style={styles}>⭐{books.rating}</h3>
      </div>
      
      <IconButton 
        onClick={() => setShow(!show)}
        className='bt-sz-lg'
        aria-label="Toggle-desc" >
          {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <IconButton
      onClick={()=> navigate(`/books/${id}`)}
      ><InfoIcon /></IconButton>

      {/* <button
        onClick={() => setShow(!show)}
      >Description</button> */}
      {/* <p className='book-summary' style={summaryStyle}>{books.summary}</p> */}
      {show? <p className='book-summary'>{books.summary}</p> : null}
      <Counter />
    </div>
  );
}
