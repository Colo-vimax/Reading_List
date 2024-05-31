import React, { useState } from 'react'
import useCollection from '../hooks/useCollection'
import { useAuthContext } from '../hooks/useAuthContext';

import BookList from '../components/BookList'
import BookForm from '../components/BookForm'

const Home = () => {
  const { user } = useAuthContext()
  // FETCH MY BOOKS
  const { documents:books } = useCollection("books",["uid", "==", user.uid]);

  return (
    <div className='App'>
      { books && <BookList books={books} />}
      <BookForm />
    </div>
  )
}

export default Home