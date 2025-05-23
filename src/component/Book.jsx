import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, image, bookName, author, tags, category, badge} = book;
    return (
        <Link to={`/books/${bookId}`}>
                <div className="card bg-base-100 w-96 shadow-md p-6">
            <figure className='bg-blue-100 py-8 rounded-2xl'>
                <img
                    src={image}
                    className='h-[166px]'
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <div className="flex justify-center gap-4">
                    {
                        tags.map((tag, index) => <button
                        key={index}
                        className="btn btn-xs bg-blue-200 text-blue-500">{tag}</button>)
                    }
                </div>

                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">{badge}</div>
                </h2>
                <p>By {author}</p>
                <div className="border-t-2 border-dashed">
                </div>

                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{category}</div>
                    <div className="rating rating-xs">
                        <div className="mask mask-star bg-blue-500" aria-label="1 star"></div>
                        <div className="mask mask-star bg-blue-500" aria-label="2 star"></div>
                        <div className="mask mask-star bg-blue-500" aria-label="3 star"></div>
                        <div className="mask mask-star bg-blue-500" aria-label="4 star" aria-current="true"></div>
                        <div className="mask mask-star bg-blue-500" aria-label="5 star"></div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;