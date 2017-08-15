import React, { Component } from 'react';
import '../styles/microblog.css'
import {ReadMore} from 'react-read-more';

class Microblog extends Component {
	constructor(props) {
		super(props);
		this.state = { isOpened: false};
	}
	toggleState() {
		this.setState({ isOpened: !this.state.isOpened });
	}

  render() {
    let longText = <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci nulla. Quisque fermentum nisi sed eros aliquet, nec pulvinar justo iaculis. Duis at facilisis metus. Sed id erat tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci nulla. Quisque fermentum nisi sed eros aliquet, nec pulvinar justo iaculis. Duis at facilisis metus. Sed id erat tortor.</span>
    return (
    		<div id={'jobs'} className="microblog-wrap">
    			<div className="microblog center-width">
    				<div className="microblog__news">
    					<h3 className="microblog__name">
	    					LATEST NEWS 
	    					<span className="microblog__name-separetor">|</span>
	    					<span className="microblog__post-more">SEE ALL NEWS</span> 
    					</h3>
    					<div className="microblog__separator"></div>
	    				<div className="microblog__post">
	    					<div className="microblog__poster">
	    						<img className="microblog__poster-img" src="#" alt="icon" />
	    						<div className="microblog__date">October 30, 2014</div>
	    					</div>
	    					<div className="microblog__content">
	    						<h3 className="microblog__title">Lorem ipsum dolor sit amet</h3>
	    						<p className="microblog__description">
										<ReadMore lines={4} onShowMore={this.props.onChange} text="READ MORE">
					            {longText}
					          </ReadMore>
	    						</p>
	    					</div>		
	    				</div>
    				</div>
    				<div className="microblog__release">
							<h3 className="microblog__name">
		    				RELEASE
		    				<span className="microblog__name-separetor">|</span>
		    				<span className="microblog__post-more">SEE ALL RELEASES</span> 
	    				</h3>
	    				<div className="microblog__separator"></div>
	    				<div className="microblog__post">
								<div className="microblog__poster">
	    						<img className="microblog__poster-img" src="#" alt="icon" />
	    						<div className="microblog__date">October 30, 2014</div>
	    					</div>
	    					<div className="microblog__content">
	    						<h3 className="microblog__title">consectetur adipiscing elit</h3>
	    						<p className="microblog__description">
										<ReadMore lines={4} onShowMore={this.props.onChange} text="READ MORE">
					            {longText}
					          </ReadMore>
	    						</p>
	    					</div>	
	    				</div>
    				</div>
    				<div className="microblog__jobs">
    					<h3 className="microblog__name">
		    				JOBS
	    				</h3>
	    				<div className="microblog__separator"></div>
	    				<div className="microblog__post">
								<div className="microblog__poster">
	    						<img className="microblog__poster-img" src="#" alt="icon" />
	    					</div>
	    					<div className="microblog__content">
	    						<h3 className="microblog__title">Vestibulum at orci nulla.</h3>
	    						<p className="microblog__description">
										<ReadMore lines={4} onShowMore={this.props.onChange} text="READ MORE">
					            {longText}
					          </ReadMore>
	    						</p>
	    					</div>	
	    				</div>
    				</div>
    			</div>
    		</div>
    	)
  }
}

export default Microblog;
