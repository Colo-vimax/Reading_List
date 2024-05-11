import React from 'react'

const BookList = ({ books }) => {
    const handleClick = async (id) => {
       console.log(id);
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