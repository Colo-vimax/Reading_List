import React, { useState } from 'react'

const BookForm = () => {
  const [newBook,setNewBook] = useState("")
  
  const handleForm = (e) => {
    e.preventDefault()
    console.log(newBook);

    setNewBook('')
  }
  
  return (
    <form onSubmit={handleForm}>
        <label >
        <span>Add a new book title:</span>
        <input 
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
        </label>
      <button>Add</button>  
    </form>
  )
}

export default BookForm