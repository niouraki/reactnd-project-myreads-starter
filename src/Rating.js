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

  //componentDidUpdate() {
    //localStorage.setItem('rating', JSON.stringify(this.state))
  //}

  //componentDidMount() {
    //const data = localStorage.getItem('rating')

    //if (data) {
      //this.setState(prevState => {
      //  return JSON.parse(data)
      //})
    //
  //}

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
