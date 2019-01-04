'use strict';

import React, { Component } from "react"
import ReactDOM from "react-dom"
import Month from './Month'
import './calendar.style.scss'

import { 
	StyledCalendar,
	StyledMonth,
	StyledDay
} from './calendar.style'

import CalendarService from '@pix8/calendar'

const LOOKUP = {
	MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
	DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}


/*********************************************************************************************/
export default class Calendar extends Component {

	constructor() {
		super();

		this.calendar = new CalendarService();

		console.log(LOOKUP)

		this.state = {
			apiCalendar: []
		};
	}

	componentWillMount() {
		this.calendar.getYear( this.props.epoch )
			.then( (data) => {
				this.setState({
					apiCalendar: this.state.apiCalendar.concat(data)
				});
			})
	}

	render() {
		return (
			<StyledCalendar className="calendar">
				{
					this.state.apiCalendar.map((month, i, arr) => {

						return (
							<StyledMonth className="calendar__month" key={ i }>
								<dt>{ LOOKUP.MONTH[i] } ({ i })</dt>

								<dd>
									<ol className="list-unstyled">
										{
											month.map((day, j, arr) => {
												return (
													<StyledDay className="calendar__date" key={ [2019, (i+1), (j+1)].join('-') }>
														<span className="data__day">{ LOOKUP.DAY[day].slice(0,3) }</span>
														<span className="data__day-index">{ day }</span>
														<span className="data__date">{ j+1 }</span>
													</StyledDay>
												)
											})
										}
									</ol>
								</dd>
							</StyledMonth>
						)

						/*return <Month data={item} key={i} />;*/
					})
				}
			</StyledCalendar>
		)
	}
}
