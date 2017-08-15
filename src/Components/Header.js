import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../styles/header.css'
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
  }

  toggleState() {
    this.setState({ isOpened: !this.state.isOpened });
  }	
  render() {
		let mobileMenu;
    let hamburgerBtn = (
      <div className="header__mobile-btn">
        <span className="header__btn-item"></span>
        <span className="header__btn-item"></span>
        <span className="header__btn-item"></span>
      </div>
      );
      if (this.state.isOpened) {
      	hamburgerBtn = (
      			<nav className="header__nav_mobile">
							<ul className="header__nav-list_mobile">
								<li className="header__nav-item_mobile">
									<a href="#presentation" className="header__nav-link_mobile header__nav-link_active">PRODUCTS</a>
								</li>
								<li className="header__nav-item_mobile">
									<a href="#services" className="header__nav-link_mobile">SERVICES</a>
								</li>
								<li className="header__nav-item_mobile">
									<a href="#about" className="header__nav-link_mobile">ABOUT</a>
								</li>
								<li className="header__nav-item_mobile">
									<a href="#jobs" className="header__nav-link_mobile">JOBS</a>
								</li>
								<li className="header__nav-item_mobile">
									<a href="#contact" className="header__nav-link header__nav-link_mobile">CONTACT</a>
								</li>
							</ul>
	    			</nav>
      		)
      }  	
    return (
    		<header className="header center-width">
    			<a href="#" className="header__logo">SOFTGRAY</a>
    			<nav className="header__nav">
						<ul className="header__nav-list">
							<li className="header__nav-item">
								<a href="" className="header__nav-link header__nav-link_active">PRODUCTS</a>
							</li>
							<li className="header__nav-item">
								<a href="" className="header__nav-link">SERVICES</a>
							</li>
							<li className="header__nav-item">
								<a href="" className="header__nav-link">ABOUT</a>
							</li>
							<li className="header__nav-item">
								<a href="" className="header__nav-link">JOBS</a>
							</li>
							<li className="header__nav-item">
								<a href="" className="header__nav-link">CONTACT</a>
							</li>
						</ul>
    			</nav>
    			<div className="header__mobile-wrap" onClick={this.toggleState.bind(this)}>{hamburgerBtn}</div>

    			<a href="tel:+81-00-0000-0000" className="header__tel">+81-00-0000-0000</a>
    		</header>
    	)
  }
}

export default Header;
