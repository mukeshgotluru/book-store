import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <div className="empty-cart-container">
    <h1 className="no-order-heading">Empty Cart</h1>
    <p className="no-order-text">
      Your cart is empty. Add something from the menu.
    </p>
    <Link to="/">
      <button type="button" className="order-btn">
        Buy Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView
