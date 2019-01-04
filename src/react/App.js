'use strict';

import React, { Component } from "react"
import Calendar from "./component/Calendar/Calendar"


//console.log("-- 0. REACT APP(root) initialised -- ");
/*********************************************************************************************/
export default class App extends Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div id="app-react">
				<div id="pix8--calendar" className="ui__calendar">
					<div className="outer-wrapper">
						<h2>React Calendar</h2>
						
						<Calendar epoch={ new Date().toISOString() } />
					</div>
				</div>
			</div>
		)
	}
}
