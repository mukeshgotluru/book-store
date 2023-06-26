import React from 'react'

const FavoriteContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  removeAllCartItems: () => {},
  cartList: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  addToCart: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default FavoriteContext
