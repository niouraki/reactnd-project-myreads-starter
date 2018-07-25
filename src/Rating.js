import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

class Rating extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rating: 0
    }
    this.onStarClick = this.onStarClick.bind(this)
  }
  onStarClick(rating) {
    this.setState({rating})
}

  componentDidUpdate() {
    const ratings = JSON.parse(localStorage.getItem('rating') || '{}');
    ratings[this.props.book.id] = this.state.rating;
    localStorage.setItem('rating', JSON.stringify(ratings))
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('rating'))

    if (data[this.props.book.id]) {
      this.setState(prevState => {
        return {rating: data[this.props.book.id]}
      })
    }
  }

  render() {
    const { rating } = this.state
    return (
      <div>
        <StarRatingComponent
          name="rate"
          starCount={5}
          value={rating}
          onStarClick = {this.onStarClick}
        />
      </div>
    )
  }
}

export default Rating
