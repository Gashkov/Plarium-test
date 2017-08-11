import React, { Component } from 'react';
import '../styles/footer.css'


class Footer extends Component {

  render() {

    return (
    		<footer className="footer-wrap">
          <div className="footer center-width">
            <div className="footer__item">
              <div className="footer__address">
                <a href="#" className="footer__logo">SOFTGRAY Inc.</a>
                <ul className="footer__address-list">
                  <li className="footer__address-item">1600 Amphitheatre Parkway</li>
                  <li className="footer__address-item">Mountain View</li>
                  <li className="footer__address-item">CA 94043</li>
                  <li className="footer__address-item">00-000-0000</li>
                  <li className="footer__address-item"><a className="footer__address-email" href="mailto:sunrise@sunrise.io" target="_blank">sunrise@sunrise.io</a></li>                  
                </ul>
                <span className="footer__info">copyright©2014 SUNRISE Inc.</span>
              </div>  
            </div>
            <div className="footer__item">
              <div className="footer__nav">
                <ul className="footer__nav-list">
                  <li className="footer__nav-item">
                    <a href="#" className="footer__nav-link">PRODUCTS</a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="#" className="footer__nav-link">SERVICES</a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="#" className="footer__nav-link">ABOUT</a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="#" className="footer__nav-link">JOBS</a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="#" className="footer__nav-link">CONTACT</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__item">
              <div className="footer__socmedia">
                <div className="footer__subscribe">
                  <h5 className="footer__title">NEWSLETTER</h5>
                  <input type="text" className="footer__field" />
                  <input type="submit" value="SUBSCRIBES" className="footer__submit" />
                </div>
                <div className="footer__follow">
                  <h5 className="footer__title">FOLLOW US</h5>
                  <ul className="footer__follow-list">
                    <li className="footer__follow-item">
                      <a className="footer__follow-link footer__follow-link_fb" href="https://www.facebook.com/" target="_blank">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="footer__follow-item">
                      <a className="footer__follow-link footer__follow-link_tw" href="https://twitter.com/" target="_blank">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="footer__follow-item">
                      <a className="footer__follow-link footer__follow-link_google" href="https://plus.google.com/" target="_blank">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="footer__follow-item">
                      <a className="footer__follow-link footer__follow-link_rss" href="https://www.rss.com/" target="_blank">
                        <i className="fa fa-rss" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    		</footer>
    	)
  }
}

export default Footer;
