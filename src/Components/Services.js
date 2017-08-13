import React, { Component } from 'react';
import '../styles/services.css';
import cosultingIcon from '../img/services_consulting_icon.svg';
import devIcon from '../img/services_developmant_icon.svg';
import designIcon from '../img/service_design_icon.svg';
import analysIcon from '../img/services_analys_icon.svg';

class Services extends Component {
  render() {
    return (
    		<div idName="services" className="services-wrap">
          <div className="services center-width">
            <div className="services__item">
              <div className="services__circle">
                <img className="services__icon" src={cosultingIcon}  alt="icon" />
              </div>
              <h4 className="services__title">Consulting</h4>
              <p className="services__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci nulla. Quisque fermentum nisi sed eros aliquet, nec pulvinar justo iaculis. Duis at facilisis metus. Sed id erat tortor. Curabitur tristique quam tellus, nec sodales lectus pellentesque in. 
              </p>
            </div>
            <div className="services__item">
              <div className="services__circle">
                <img className="services__icon" src={devIcon} alt="icon" />
              </div>
              <h4 className="services__title">Developing</h4>
              <p className="services__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci nulla. Quisque fermentum nisi sed eros aliquet, nec pulvinar justo iaculis. Duis at facilisis metus. Sed id erat tortor. Curabitur tristique quam tellus, nec sodales lectus pellentesque in. 
              </p>
            </div>
            <div className="services__item">
              <div className="services__circle">
                <img className="services__icon" src={designIcon} alt="icon" />
              </div>
              <h4 className="services__title">Designing</h4>
              <p className="services__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci nulla. Quisque fermentum nisi sed eros aliquet, nec pulvinar justo iaculis. Duis at facilisis metus. Sed id erat tortor. Curabitur tristique quam tellus, nec sodales lectus pellentesque in. 
              </p>
            </div>
            <div className="services__item">
              <div className="services__circle">
                <img className="services__icon" src={analysIcon} alt="icon" />
              </div>
              <h4 className="services__title">Analysis</h4>
              <p className="services__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci nulla. Quisque fermentum nisi sed eros aliquet, nec pulvinar justo iaculis. Duis at facilisis metus. Sed id erat tortor. Curabitur tristique quam tellus, nec sodales lectus pellentesque in. 
              </p>
            </div>
          </div>
    		</div>
    	)
  }
}

export default Services;
