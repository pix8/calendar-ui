'use strict';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
//import Month from './Month'
import Day from './Day'
import Navigation from './Navigation'

import { 
	StyledCalendar,
	StyledMonth,
	StyledDay
} from './calendar.style'

import CalendarService from '@pix8/calendar'
import Moment from 'moment'


const LOOKUP = {
	MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
	DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",")
}

const epoch = new Date().toISOString();

//console.log("-- 1. REACT:CALENDAR component initialised -- ");
/*********************************************************************************************/
export default class Calendar extends Component {

	// static propTypes = {
	// 	epoch: PropTypes.oneOfType([
	// 				PropTypes.string,
	// 				PropTypes.number,
	// 				PropTypes.array,
	// 				PropTypes.instanceOf(Date)
	// 			])
	// }

	// static defaultProps = {
	// 	epoch: new Date()
	// }

	state = {
		source: epoch,
		target: epoch,
		apiCalendar: [],
		everything: []
	}

	constructor() {
		super();

		this.calendar = new CalendarService();
	}

	getCalendarData(value) {
		this.calendar.getCalendarYear(value)
			.then( (data) => {
				this.setState({
					source: value,
					apiCalendar: data[ Moment(value).format("Y") ],
					everything: data
				});
			})
	}

	incrementYear(event) {
		const { source } = this.state;

		let value = Moment(this.state.source).add(1, "years").toDate().toISOString();

		this.getCalendarData(value);
		
	}

	decrementYear = (event) => {
		const { source } = this.state;

		let value = Moment(this.state.source).subtract(1, "years").toDate().toISOString();

		this.getCalendarData(value);
	}

	setTarget(year, month, day, event) {
		event.preventDefault();

		let target = [year, month, day];
		//console.log("you clicked :: ", event.target, " :: ", `${year} / ${month} / ${day}`);

		this.setState({
			target
		});
	}

	componentWillMount() {
		this.getCalendarData(this.state.source);
	}

	render() {
		return (
			<React.Fragment>
				{ this.state.apiCalendar.length === 0 && <p>No calendar data</p> }

				<Navigation incrementYear={ this.incrementYear.bind(this) } decrementYear={ this.decrementYear } everything={ this.state.everything } apiCalendar= { this.state.apiCalendar } target={ this.state.target }/>
				
				<StyledCalendar className="calendar">
					{
						this.state.apiCalendar.map((month, i, arr) => {

							return (
								/* MONTH */
								<StyledMonth className="calendar__month" key={ i }>
									<dt>{ LOOKUP.MONTH[i] }</dt>

									<dd>
										<ol>
											{
												month.map((week, j, arr) => {

													/* WEEK */
													if(week.length < 7) {

														if(week[0] > 0) {
															return (
																[...Array(7-week.length).fill(null)].concat(week).map( (day, k, arr) => {

																	return (
																		<Day day={ day } month={ month } j={ j } k={ k } setTarget={ this.setTarget.bind(this, this.state.everything.indexOf(this.state.apiCalendar), i, (k+1)+(j*7)-(7-month[0].length)) } key={ [this.state.everything.indexOf(this.state.apiCalendar), (i+1), (j+1), k+1].join('-') } />
																	)
																})
															)
														}
														return (
															week.concat([...Array(7-week.length).fill(null)]).map( (day, k, arr) => {

																return (
																	<Day day={ day } month={ month } j={ j } k={ k } setTarget={ this.setTarget.bind(this, this.state.everything.indexOf(this.state.apiCalendar), i, (k+1)+(j*7)-(7-month[0].length)) } key={ [this.state.everything.indexOf(this.state.apiCalendar), (i+1), (j+1), k+1].join('-') } />
																)
															})
														)
													}
													return (
														week.map( (day, k, arr) => {

															return (
																<Day day={ day } month={ month } j={ j } k={ k } setTarget={ this.setTarget.bind(this, this.state.everything.indexOf(this.state.apiCalendar), i, (k+1)+(j*7)-(7-month[0].length)) } key={ [this.state.everything.indexOf(this.state.apiCalendar), (i+1), (j+1), k+1].join('-') } />																
															)

															/*return (
																li className="calendar__date" key={ [this.state.everything.indexOf(this.state.apiCalendar), (i+1), (j+1), k+1].join('-') }></li>
															)*/
														})
													)
												})
											}
										</ol>
									</dd>
								</StyledMonth>
							)
						})
					}
				</StyledCalendar>
			</React.Fragment>
		)
	}
}
