import React, { useState } from 'react'

import { db } from '../firebase/config'
import { collection, addDoc } from "firebase/firestore"; 
import { useAuthContext } from "../hooks/useAuthContext"

const BookForm = () => {
  const [newBook,setNewBook] = useState("")
  const { user } = useAuthContext()

  const handleForm = async(e) => {
    e.preventDefault()
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "books"), {
      title : newBook,
      uid: user.uid
    });

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