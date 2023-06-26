import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import FavoriteContext from '../../Context/FavoriteContext'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    history.replace('/login')
    Cookies.remove('jwt_token')
  }

  return (
    <FavoriteContext.Consumer>
      {value => {
        const {cartList} = value
        const cartCount = cartList.length

        return (
          <nav className="nav-header">
            <div className="nav-content">
              <div className="nav-bar-mobile-logo-container">
                <Link to="/" className="link">
                  <img
                    src="https://res.cloudinary.com/dkxxgpzd8/image/upload/v1647190320/Group_7731_v0p1nt_gjeokw.png"
                    alt="website logo"
                    className="website-logo"
                  />
                </Link>
                <button
                  type="button"
                  className="nav-mobile-btn"
                  onClick={onClickLogout}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                    alt="nav logout"
                    className="nav-bar-img"
                  />
                </button>
              </div>
              <div className="nav-bar-large-container">
                <Link to="/">
                  <img
                    className="website-logo"
                    src="https://res.cloudinary.com/dkxxgpzd8/image/upload/v1647190320/Group_7731_v0p1nt_gjeokw.png"
                    alt="website logo"
                  />
                </Link>
                <ul className="nav-menu">
                  <li className="nav-menu-item">
                    <Link to="/" className="nav-link ">
                      Home
                    </Link>
                  </li>

                  <li className="nav-menu-item">
                    <Link to="/shelf" className="nav-link">
                      Shelf
                    </Link>
                  </li>

                  <li className="nav-menu-item">
                    <Link to="/cart" className="nav-link ">
                      Cart
                      {cartCount > 0 && (
                        <span className="cart-count-badge">{cartCount}</span>
                      )}
                    </Link>
                  </li>
                </ul>
                <button
                  type="button"
                  className="logout-desktop-btn"
                  onClick={onClickLogout}
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="nav-menu-mobile">
              <ul className="nav-menu-list-mobile">
                <li className="nav-menu-item-mobile">
                  <Link to="/" className="nav-link">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                      alt="nav home"
                      className="nav-bar-img"
                    />
                  </Link>
                </li>

                <li className="nav-menu-item-mobile">
                  <Link to="/shelf" className="nav-link">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                      alt="nav products"
                      className="nav-bar-img"
                    />
                  </Link>
                </li>
                <li className="nav-menu-item-mobile">
                  <Link to="/cart" className="nav-link">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                      alt="nav cart"
                      className="nav-bar-img"
                    />
                    {cartCount > 0 && (
                      <span className="cart-count-badge">{cartCount}</span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )
      }}
    </FavoriteContext.Consumer>
  )
}

export default withRouter(Header)

/* 
div>
        <div className="header-container">
          <div className="header-website-logo1">
            <Link to="/">
              <>
                <img
                  className="header-website-logo"
                  src="https://res.cloudinary.com/dkxxgpzd8/image/upload/v1647190320/Group_7731_v0p1nt_gjeokw.png"
                  alt="website logo"
                />
              </>
            </Link>
          </div>
          <ul className="tabs-container">
            <Link className="link" to="/">
              <li className={`list-item bookshelves-tab ${activeHome}`}>
                Home
              </li>
            </Link>
            <Link className="link" to="/shelf">
              <li className={`list-item bookshelves-tab ${activeShelves}`}>
                Bookshelves
              </li>
            </Link>
            <Link className="link" to="/cart">
              <li className={`list-item bookshelves-tab ${activeFavorite}`}>
                Cart
                {this.renderCartItemsCount()}
              </li>
            </Link>
            <li className="list-item">
              <button
                onClick={this.onClickLogout}
                className="logout-btn"
                type="button"
              >
                Logout
              </button>
            </li>
          </ul>
       
        <div className="header-navbar-responsive-container">
          <div className="header-nav-container">
            <Link to="/">
              <img
                className="header-nav-bar-website-logo"
                src="https://res.cloudinary.com/dkxxgpzd8/image/upload/v1647190320/Group_7731_v0p1nt_gjeokw.png"
                alt="website logo"
              />
            </Link>
            <button
              onClick={this.onClickMenu}
              className="cross-icon-btn"
              type="button"
            >
              <FiMenu className="menu-icon" />
            </button>
          </div>
          </div>

          */
