import {Component} from 'react'

import Header from '../Header'

import Footer from '../Footer'

import FavoriteContext from '../../Context/FavoriteContext'
import EmptyCartView from '../EmptyCartView'
import CartListView from '../CartListView'

import './index.css'

class Cart extends Component {
  render() {
    return (
      <FavoriteContext.Consumer>
        {value => {
          const {cartList} = value
          const isCartEmpty = cartList.length === 0
          return (
            <>
              <Header />
              <div className="cart-container">
                {isCartEmpty ? <EmptyCartView /> : <CartListView />}
              </div>
              <Footer />
            </>
          )
        }}
      </FavoriteContext.Consumer>
    )
  }
}

export default Cart
