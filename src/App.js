import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import BookShelves from './components/BookShelves'
import BookItemDetails from './components/BookItemDetails'
import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import FavoriteContext from './Context/FavoriteContext'
import './App.css'

// use the below bookshelvesList for rendering read status of book items in Bookshelves Route

const getCartListFromLocalStorage = () => {
  const stringifiedCartList = localStorage.getItem('cartData')
  const parsedCartList = JSON.parse(stringifiedCartList)
  if (parsedCartList === null) {
    return []
  }
  return parsedCartList
}

class App extends Component {
  state = {
    cartList: getCartListFromLocalStorage(),
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  // increase quantity

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
  }

  // clear cart list

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  // decrease quantity

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const bookObject = cartList.find(eachCartItem => eachCartItem.id === id)
    if (bookObject.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      this.removeCartItem(id)
    }
  }

  // remove cart item from cartList
  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )
    this.setState({cartList: updatedCartList})
  }

  // add a book to the cart

  addCartItem = book => {
    const {cartList} = this.state
    const bookObject = cartList.find(
      eachCartItem => eachCartItem.id === book.id,
    )
    if (bookObject) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (bookObject.id === eachCartItem.id) {
            const updatedQuantity = book.quantity

            return {...eachCartItem, quantity: updatedQuantity}
          }

          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...cartList, book]
      this.setState({cartList: updatedCartList})
    }
  }

  render() {
    const {cartList, isDarkTheme} = this.state
    localStorage.setItem('cartData', JSON.stringify(cartList))
    return (
      <FavoriteContext.Provider
        value={{
          isDarkTheme,
          cartList,
          toggleTheme: this.toggleTheme,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/shelf" component={BookShelves} />
          <ProtectedRoute exact path="/books/:id" component={BookItemDetails} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </FavoriteContext.Provider>
    )
  }
}

export default App
