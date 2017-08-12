import React, { Component } from 'react';

import Header from './Header';
import Presentation from './Presentation';
import Services from './Services';
import AboutUs from './AboutUs';
import Microblog from './Microblog';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
    		<div>
    			<Header />
    			<Presentation />
    			<Services />
    			<AboutUs />
    			<Microblog />
    			<Footer />
    		</div>
    	)
  }
}

export default App;
