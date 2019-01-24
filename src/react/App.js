'use strict';

import React, { Component } from "react"
import Calendar from "./component/Calendar/Calendar"

//import CalendarService from '@pix8/calendar'
import Moment from "moment"


//console.log("-- 0. REACT APP(root) initialised -- ");
/*********************************************************************************************/
export default class App extends Component {

	constructor() {
		super();

		//this.calendar = new CalendarService();
	}

	render() {
		return (
			<div>
				<div id="pix8--calendar" className="ui__calendar">
					<div className="outer-wrapper">
						<Calendar />
					</div>
				</div>
			</div>
		)
	}
}
