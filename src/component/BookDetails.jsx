import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function BookDetails() {

  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  // bookId:currentId
  const { bookName, image, author, category, review, tags, totalPages, publisher, rating } = book;
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm my-8 ">
      <figure>
        <img
          src={image}
          alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By {author}</p>
        <div className="border-t-2 border-dashed">
        </div>
        <div className="badge badge-outline">{category}</div>
        <div className="border-t-2 border-dashed">
        </div>
        <p>Short Brief: {review}</p>
        <div className="flex justify-center gap-4">
          Tags:
          {
            tags.map((tag, index) => <button
              key={index}
              className="btn btn-xs bg-blue-200 text-blue-500">{tag}</button>)
          }
        </div>
        <div className="border-t-2 border-dashed">
        </div>
        <div className="flex justify-between">
          <p>Publisher: {publisher}</p>
          <p>Total Runtime: {totalPages}</p>
          <p>Rating: {rating}</p>

        </div>
      <div className="card-actions justify-end mt-4">
        <button className="btn btn-outline">Join Now</button>
        <button className="btn btn-outline">Add Wishlist</button>
      </div>
      </div>
    </div>
  )
}

export default BookDetails