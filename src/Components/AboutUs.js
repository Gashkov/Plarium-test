import React, { Component } from 'react';
import '../styles/aboutUs.css';
import laptopImg from '../img/about_laptop.png'

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false};
  }

  toggleState() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    console.log(laptopImg);
    let dropdownText;
    let buttonText = <span>VIEW MORE</span>;
    if (this.state.isOpened) {
      dropdownText = <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci nulla. Quisque fermentum nisi sed eros aliquet, nec pulvinar justo iaculis. Duis at facilisis metus. Sed id erat tortor.</span>
      buttonText = <span>Less</span>;
    }
    return (
    		<div idName="about" className="about-wrap">
          <div className="about center-width">
            <div className="about-info">
              <div className="about-info__item">
                <h5 className="about-info__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>  
                <h2 className="about-info__title">LOREM IPSUM</h2>
                <p className="about-info__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci nulla. Quisque fermentum nisi sed eros aliquet, nec pulvinar justo iaculis. Duis at facilisis metus. Sed id erat tortor. <br />
                  {dropdownText}
                </p> 
                <button onClick={this.toggleState.bind(this)} className="about-info__btn">{buttonText}</button>
              </div>
              <div className="about-info__item">
                <img src={laptopImg} className="about-info__banner" alt="laptop" />
              </div>
            </div>
            <div className="about-jobs">
              <div className="about-jobs__item">
                <h5 className="about-jobs__subtitle">MAGAZINE PUBLISHING TOOL</h5>
                <h3 className="about-jobs__title">THE NEWS</h3>
              </div>
              <div className="about-jobs__item">
                <h5 className="about-jobs__subtitle">DIGITAL BOOK PUBLISHING TOOL</h5>
                <h3 className="about-jobs__title">LIBRO</h3>
              </div>
              <div className="about-jobs__item about-jobs__item_black">
                <h5 className="about-jobs__subtitle about-jobs__subtitle_white">FONT EDITOR</h5>
                <h3 className="about-jobs__title about-jobs__title_white">ELITE</h3>
              </div>
            </div>
          </div>
    		</div>
    	)
  }
}

export default AboutUs;
