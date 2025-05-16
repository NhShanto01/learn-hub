import React, { useEffect, useState } from 'react'
import Book from './Book'

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('./booksData.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {books.map(book => (
          <Book
            key={book.bookId}
            book={book}
          />
        ))}
      </div>
    </div>
  )
}

export default Books
