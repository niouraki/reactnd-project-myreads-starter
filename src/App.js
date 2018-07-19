import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCollection from './BookCollection'
import Search from './Search'
import BookInfo from './BookInfo'


class BooksApp extends React.Component {

  constructor(props) {
    super(props)

    this.state={
      books: []
    }
    this.handleAllBooks = this.handleAllBooks.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

//Gets all the books that are currently on the app
  handleAllBooks() {
  BooksAPI.getAll().then(books => {
    this.setState({ books })
    console.log(books)
    })
  }

//Called when component is rendered to the DOM
  componentDidMount() {
    this.handleAllBooks()
  }

//Updates the books on the shelves
  handleChange(book, shelf) {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.handleAllBooks()
    })
  }
  render() {
    return (
      <div className="app">
      <Switch>
          <Route path='/search' render={() => (
            <Search
              books={this.state.books}
              handleChange={this.handleChange}
              />
          )}/>
          <Route exact path='/' render={() => (
            <BookCollection
              books={this.state.books}
              handleChange={this.handleChange}
            />
          )}/>
          <Route path='/info' render={() => (
            <BookInfo
            handleBooks={this.handleAllBooks}
            books={this.state.books}
            />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
