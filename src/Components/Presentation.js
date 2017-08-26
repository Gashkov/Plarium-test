import React, { Component } from 'react';
import '../styles/presentation.css'
// import PresentationBackground from '../img/product_bg.jpg';


class Presentation extends Component {
  render() {
    return (
    		<div className="presentation">
    			<h1 id={'presentation'} className="presentation__title">Creative Solutions</h1>
    			<p className="presentation__description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    			</p>
    			<p className="presentation__description">
						Vestibulum at orci nulla.
    			</p>
    			<p className="presentation__description">
						Quisque fermentum nisi sed eros aliquet, nec pulvinar justo iaculis.
    			</p>
    			<p className="presentation__description">
						Duis at facilisis metus. Sed id erat tortor.
    			</p>
    			<p className="presentation__description">
						Curabitur tristique quam tellus, nec sodales lectus pellentesque in.
    			</p>
    		</div>
    	)
  }
}

export default Presentation;
