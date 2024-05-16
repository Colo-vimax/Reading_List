import React, { useState } from 'react'
import useCollection from '../hooks/useCollection'

import BookList from '../components/BookList'
import BookForm from '../components/BookForm'


const Home = () => {
  const { documents:books } = useCollection('books')

  return (
    <div className='App'>
      { books && <BookList books={books} />}
      <BookForm />
    </div>
  )
}

export default Home