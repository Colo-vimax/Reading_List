import React from 'react'

// DB 
import { db } from '../firebase/config';
// DB Functions
import { doc, deleteDoc } from "firebase/firestore";


const BookList = ({ books }) => {
    const handleClick = async (id) => {
      const ref = doc(db, "books", id )
       await deleteDoc(ref)
    }
  return (
    <div className='book-list'>
        { books.map(book => (
            <li key={book.id} onClick={() => handleClick(book.id)}>{book.title}</li>
        ))}
    </div>
  )
}

export default BookList