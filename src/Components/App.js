import React, { Component } from 'react';

import Header from './Header';
import Product from './Product';
import Services from './Services';
import AboutUs from './AboutUs';
import Microblog from './Microblog';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
    		<div>
    			<Header />
    			<Product />
    			<Services />
    			<AboutUs />
    			<Microblog />
    			<Footer />
    		</div>
    	)
  }
}

export default App;
