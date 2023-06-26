import {Component} from 'react'

import {Link} from 'react-router-dom'

import {BsFillStarFill, BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import FavoriteContext from '../../Context/FavoriteContext'

import './index.css'

class BookItem extends Component {
  state = {quantity: 0}

  render() {
    const {quantity} = this.state
    return (
      <FavoriteContext.Consumer>
        {value => {
          const {
            addCartItem,
            incrementCartItemQuantity,
            decrementCartItemQuantity,
          } = value
          const {bookDetails} = this.props
          const {
            id,
            title,
            readStatus,
            rating,
            authorName,
            coverPic,
          } = bookDetails

          const price = parseInt(rating) * 5

          const onClickAdd = () => {
            this.setState(
              prevState => ({
                quantity: prevState.quantity + 1,
              }),
              addCartItem({...bookDetails, quantity: quantity + 1}),
            )
          }

          const onIncreaseQuantity = () => {
            this.setState(prevState => ({quantity: prevState.quantity + 1}))
            incrementCartItemQuantity(id)
          }

          const onDecreaseQuantity = () => {
            this.setState(prevState => ({quantity: prevState.quantity - 1}))
            decrementCartItemQuantity(id)
          }

          return (
            <li className="book-item-list-container">
              <div className="book-item-btn">
                <Link to={`/books/${id}`} className="link">
                  <button className="book-item-btn" type="button">
                    <img
                      className="book-item-cover-pic"
                      src={coverPic}
                      alt={title}
                    />
                  </button>
                </Link>
              </div>
              <div className="book-item-details-card-container">
                <h1 className="book-item-title">{title}</h1>
                <p className="book-item-author-name">{authorName}</p>
                <div className="book-item-avg-rating-container">
                  <p className="book-item-avg-rating">Avg Rating</p>
                  <BsFillStarFill className="book-item-start-icon" />
                  <p className="book-item-rating">{rating}</p>
                </div>
                <p className="book-item-status-heading">
                  Status:
                  <br />
                  <span className="book-item-status">{readStatus}</span>
                </p>
                <p>Rs {price}/-</p>
                {quantity === 0 ? (
                  <button
                    type="button"
                    className="add-btn"
                    onClick={onClickAdd}
                  >
                    Buy
                  </button>
                ) : (
                  <div className="cart-btn-qty-cont">
                    <button
                      testid="decrement-count"
                      type="button"
                      className="decrement-count"
                      onClick={onDecreaseQuantity}
                    >
                      <BsDashSquare className="icon-btn" />
                    </button>
                    <p testid="active-count" className="active-count">
                      {quantity}
                    </p>
                    <button
                      testid="increment-count"
                      type="button"
                      className="increment-count"
                      onClick={onIncreaseQuantity}
                    >
                      <BsPlusSquare className="icon-btn" />
                    </button>
                  </div>
                )}
              </div>
            </li>
          )
        }}
      </FavoriteContext.Consumer>
    )
  }
}

export default BookItem
