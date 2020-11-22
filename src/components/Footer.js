import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/capital-logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer   has-text-white-ter">
        <div className="footer-section-1">
          <div className="container">

            <div className="columns ">
              <div className="column">
                <div>
                  <img src={logo} alt="Capital American Shaman" style={{ width: '234px', height: '112px', maxHeight: 'none' }} />
                </div>
                <div className="footer-contacts">
                  <p> <span>Tel: </span> <a href="tel:512-386-1873">512-386-1873</a></p>

                  <p> <span>Email: </span> <a href="mailto:info@capitalamericanshaman.com"
                    target="_top">info@capitalamericanshaman.com</a> </p>
                  <p> <span>Location: </span>8315 Burnet Rd Ste. C, Austin, TX 78757</p>

                </div>
              </div>
              <div className="column"></div>
              <div className="column">
                <h5>SUBSCRIBE</h5>
                <div id="mc_embed_signup">
                  <form
                    action="https://capitalamericanshaman.us4.list-manage.com/subscribe/post?u=27826ed7dcd44a3e21df19f2f&amp;id=8fa669e666"
                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                    className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                      <label htmlFor="mce-EMAIL">Sign Up to our rewards program?</label>
                      <input type="email" name="EMAIL" className="email" id="mce-EMAIL"
                        placeholder="Email address" required />

                      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input
                        type="text" name="b_27826ed7dcd44a3e21df19f2f_8fa669e666"
                        tabIndex="-1" /></div>
                      <div className="clear"><input type="submit" value="Subscribe" name="subscribe"
                        id="mc-embedded-subscribe" className="button" /></div>
                    </div>
                  </form>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="footer-area-bottom">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="copyright">
                  <p>
                    Copyright © 2020
                                <a href="#"> CBD American Shaman</a> All Rights Reserved
                            </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </footer>
    )
  }
}

export default Footer
