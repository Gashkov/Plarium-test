import React, { Component } from 'react';
import '../styles/header.css'

class Header extends Component {
  render() {
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
    			<a href="tel:+81-00-0000-0000" className="header__tel">+81-00-0000-0000</a>
    		</header>
    	)
  }
}

export default Header;
