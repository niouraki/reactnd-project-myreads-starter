import React from 'react'
import Title from './Navbar'

class BookInfo extends React.Component {
  render() {
   return(
     <div>
     <Title/>
     <div className="container">
     {this.props.books.map((book, index) =>{
       return(
        <li key={index} className="book">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
          <div className="info-title">{book.title}</div>
          <div><span>Shelf</span>: {book.shelf}</div>
          <div><span>Number of Pages</span>: {book.pageCount}</div>
          <div><span>Publisher</span>: {book.publisher}</div>
          <div><span>Language</span>: {book.language}</div>
          <div><span>Published Date</span>: {book.publishedDate}</div>
          <a href={book.canonicalVolumeLink} target="_blank" className="info-button">Learn More</a>
        </li>
      )
    })}
    </div>
    </div>
      )
    }
 }

 export default BookInfo
