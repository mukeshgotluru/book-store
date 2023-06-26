import {FaGoogle, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import FavoriteContext from '../../Context/FavoriteContext'
import './index.css'

const Footer = () => (
  <FavoriteContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const color = isDarkTheme ? 'light' : 'dark'
      const bgColor = isDarkTheme ? 'bg-dark' : 'bg-light'
      return (
        <div className={`contact-us-container ${bgColor}`}>
          <div>
            <FaGoogle className={`contact-us-icon ${color}`} />
            <FaTwitter className={`contact-us-icon ${color}`} />
            <FaInstagram className={`contact-us-icon ${color}`} />
            <FaYoutube className={`contact-us-icon ${color}`} />
          </div>
          <p className={`contact-us-heading ${color}`}>Contact Us</p>
        </div>
      )
    }}
  </FavoriteContext.Consumer>
)

export default Footer
