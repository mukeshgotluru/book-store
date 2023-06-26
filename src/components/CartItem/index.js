import {BsPlusSquare, BsFillStarFill, BsDashSquare} from 'react-icons/bs'
import CartContext from '../../Context/FavoriteContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartItem} = props
      const {
        id,
        title,
        readStatus,
        quantity,
        rating,
        authorName,
        coverPic,
      } = cartItem
      const price = parseInt(rating) * 5

      const decreaseQuantity = () => {
        decrementCartItemQuantity(id)
      }

      const increaseQuantity = () => {
        incrementCartItemQuantity(id)
      }

      return (
        <li className="book-item-list-container">
          <div className="book-item-btn">
            <button className="book-item-btn" type="button">
              <img className="book-item-cover-pic" src={coverPic} alt={title} />
            </button>
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
              <button type="button" className="add-btn">
                Buy
              </button>
            ) : (
              <div className="cart-btn-qty-cont">
                <button
                  testid="decrement-count"
                  type="button"
                  className="decrement-count"
                  onClick={decreaseQuantity}
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
                  onClick={increaseQuantity}
                >
                  <BsPlusSquare className="icon-btn" />
                </button>
              </div>
            )}
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
