import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
} from "react-router-dom";
import axios from 'axios';
import {Provider,observer,inject} from "mobx-react"
import "./index.less";

@inject("store")
@observer
export default class Home extends React.Component {
	componentDidMount(){
		this.toLoadDisqus()
	}
	componentWillReceiveProps(){
		this.toLoadDisqus()
	}
	toLoadDisqus(){
		// *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
		// *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
		var disqus_config = function () {
			this.page.url = 'https://pipk.top';  // Replace PAGE_URL with your page's canonical URL variable
			this.page.identifier = 'pengliheng'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
		};
		(function() { // DON'T EDIT BELOW THIS LINE
			var d = document, s = d.createElement('script');
			s.src = 'https://https-pipk-top-1.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
		})();
	}
	render() {
		return (
			<footer style={{width:'100vw'}}>
				<div id="disqus_thread"></div>
			</footer>
		);
	}
}
