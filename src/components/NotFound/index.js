import {Link} from 'react-router-dom'

import './index.css'
import Header from '../Header'

const NotFound = () => (
  <div className="notfound-container">
    <Header />
    <div className="notfound-data">
      <img
        src="/img/notfound.png"
        alt="not-found-pic"
        className="nofound-image"
      />

      <h1 className="notfound-title">page not found</h1>
      <p className="notfound-para">
        we are sorry, the page you requested could not be found
      </p>

      <div className="button">
        <Link to="/">
          <button type="button" className="home">
            home
          </button>
        </Link>
      </div>
    </div>
  </div>
)
export default NotFound
