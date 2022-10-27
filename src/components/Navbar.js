import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/fb.png'
import instagram from '../img/social/insta.png'
import yelp from '../img/social/yelp_red.svg'
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
              <div className="column social-link">
                <a href="https://www.facebook.com/CapitalCBDAustin" target="_blank" rel="nofollow noopener noreferrer">
                  <span className="icon">
                    <img src={facebook} alt="Facebook" />
                  </span>
                </a>
              </div>
              <div className="column social-link">
                <a href="https://www.instagram.com/capitalcbdatx/" target="_blank" rel="nofollow noopener noreferrer">
                  <span className="icon">
                    <img src={instagram} alt="Instagram" />
                  </span>
                </a>
              </div>
              <div className="column social-link">
                <a href="https://twitter.com/CapitalCBDAtx/" target="_blank" rel="nofollow noopener noreferrer">
                  <span className="icon" style={{ color: 'white' }}>
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" /></svg>
                  </span>
                </a>
              </div>
              <div className="column social-link">
                <a href="https://www.yelp.com/biz/capital-cbd-american-shaman-austin?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank" rel="nofollow noopener noreferrer">
                  <span className="icon" style={{ color: 'white' }}>
                    <img src={yelp} alt="Yelp" />
                  </span>
                </a>
              </div>
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
              <button
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onKeyDown={() => this.toggleHamburger()}
                onClick={() => this.toggleHamburger()}
                type="button"
              >
                <span />
                <span />
                <span />
              </button>
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
                <Link className="navbar-item" to="/labs">
                  LABS
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
