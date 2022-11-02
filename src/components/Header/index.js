import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  state = {isToggleActive: false}

  whenToggleButtonClick = () => {
    this.setState(prevState => ({isToggleActive: !prevState.isToggleActive}))
  }

  showDropDownMenu = () => (
    <>
      <ul className="nav">
        <Link to="/" className="about">
          <li className="home">Home</li>
        </Link>

        <li className="home">vaccination</li>

        <Link to="/about" className="abt">
          <li className="home">About</li>
        </Link>
      </ul>
    </>
  )

  render() {
    const {isToggleActive} = this.state
    console.log(isToggleActive)
    return (
      <>
        <div className="head-container">
          <Link to="/" className="abt">
            <h1 className="logo">COVID19INDIA</h1>
          </Link>

          <ul className="nav">
            <Link to="/" className="abt">
              <li className="home">Home</li>
            </Link>
            <li className="home">vaccination</li>

            <Link to="/about" className="abt">
              <li className="home">About</li>
            </Link>
          </ul>
        </div>

        <div className="mobile-menu">
          <div className="header">
            <Link to="/" className="abt">
              <h1 className="logo">COVID19 INDIA</h1>
            </Link>

            <button
              type="button"
              className="button"
              onClick={this.whenToggleButtonClick}
            >
              <img src="/img/add-to-queue 1.png" alt="menu" />
            </button>
          </div>

          <div className="menu">
            {isToggleActive ? this.showDropDownMenu() : ''}
          </div>
        </div>
      </>
    )
  }
}
export default Header
