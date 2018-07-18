import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Shelf'
import Title from './Navbar'
//This component adds the three bookselves
class BookCollection extends React.Component {
  render() {
    return (
      <div className="list-books">
        <Title/>
        <div className="book-info">
          <Link to='/info'>Book Information</Link>
        </div>
        <div className="list-books-content">
          <div>
          <Bookshelf
            name='Currently Reading'
            books={this.props.books.filter(book => book.shelf === "currentlyReading")}
            handleChange={this.props.handleChange}
            />
          <Bookshelf
            name='Want To Read'
            books={this.props.books.filter(book => book.shelf === "wantToRead")}
            handleChange={this.props.handleChange}
            />
          <Bookshelf
            name='Read'
            books={this.props.books.filter(book => book.shelf === "read")}
            handleChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>

      </div>
    )
  }
}

export default BookCollection
