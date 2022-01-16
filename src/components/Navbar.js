import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/fb.png'
import instagram from '../img/social/insta.png'
import logo from '../img/capital-logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <div>
        <div className="social-container">
          <div className="contact-container">
            <div className="contact-options">
              <div className="columns">
                <div className="column">
                  <div className="contact-info">
                    <div className="header-icon">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <span className="info-simple"><a href="tel:512-386-1873"> 512-386-1873</a> </span>
                  </div>
                </div>
                <div className="column">
                  <div className="contact-info">
                    <div className="header-icon">
                      <i className="fas fa-store-alt"></i>
                    </div>
                    <span className="info-simple capital-location-info">8315 Burnet Rd Ste. C Austin, TX 78757</span>

                  </div></div>
                <div className="column">  <div className="contact-info">
                  <div className="header-icon">
                    <i className="fas fa-envelope"> </i>
                  </div>
                  <span className="info-simple"><a href="mailto:info@capitalamericanshaman.com" target="_top">info@capitalamericanshaman.com</a></span>

                </div></div>
              </div>
            </div>
          </div>

          <div className="top-social">
            <div className="columns">
              <div className="column social-link"><a

                href="https://www.facebook.com/CapitalCBDAustin/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <span className="icon">
                  <img src={facebook} alt="Facebook" />
                </span>
              </a></div>
              <div className="column social-link">  <a

                href="https://www.instagram.com/capitalcbdatx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={instagram} alt="Instagram" />
                </span>
              </a></div>
            </div>
          </div>
        </div>
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >

          <div className="container">

            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="Capital American Shaman" style={{ width: '234px', height: '112px', maxHeight: 'none' }} />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/">
                  HOME
              </Link>
                <Link className="navbar-item" to="/products">
                  PRODUCTS
              </Link>
                <Link className="navbar-item" to="/blog">
                  BLOG
              </Link>
                <Link className="navbar-item" to="/#why-cbd">
                  WHY CBD
              </Link>
                <Link className="navbar-item" to="/faq">
                  FAQ
              </Link>
                <Link className="navbar-item" to="/about">
                  ABOUT US
              </Link>
                <Link className="navbar-item" to="/#contact-us">
                  CONTACT US
              </Link>
              </div>
              <div className="navbar-end has-text-centered">

              </div>
            </div>
          </div>
        </nav>
      </div >
    )
  }
}

export default Navbar
