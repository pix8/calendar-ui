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


//console.log("-- 1. REACT:CALENDAR component initialised -- ");
/*********************************************************************************************/
export default class Calendar extends Component {

	constructor() {
		super();

		this.calendar = new CalendarService();

		this.state = {
			apiCalendar: []
		};
	}

	componentWillMount() {
		this.calendar.getYear( this.props.epoch )
			.then( (data) => {
				console.log(data)
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
								<dt>{ LOOKUP.MONTH[i] }</dt>

								<dd>
									<ol className="list-unstyled">
										{
											month.map((week, j, arr) => {

												if(week.length < 7) {

													if(week[0] > 0) {
														return (
															[...Array(7-week.length).fill(null)].concat(week).map( (day, k, arr) => {
																return (
																	<li className="calendar__date" key={ k }>
																		{
																			(day !== null) ?
																				<a href="">
																					<span className="data__day">{ LOOKUP.DAY[day].slice(0,3) }</span>
																					<span className="data__date">{ (k+1)+(j*7)-(7-month[0].length) }</span>
																				</a> : null
																		}
																	</li>
																)
															})
														)
													}
													return (
														week.concat([...Array(7-week.length).fill(null)]).map( (day, k, arr) => {
															return (
																<li className="calendar__date" key={ k }>
																	{
																		(day !== null) ?
																		<a href="">
																			<span className="data__day">{ LOOKUP.DAY[day].slice(0,3) }</span>
																			<span className="data__date">{ (k+1)+(j*7)-(7-month[0].length) }</span>
																		</a> : null
																	}
																</li>
															)
														})
													)
												}
												return (
													week.map( (day, k, arr) => {
														return (
															<li className="calendar__date" key={ k }>
																<a href="">
																	<span className="data__day">{ LOOKUP.DAY[day].slice(0,3) }</span>
																	<span className="data__date">{ (k+1)+(j*7)-(7-month[0].length) }</span>
																</a>
															</li>
														)
													})
												)
											})
										}

										{
											//REDUNDANT
											/*month.flat().map((day, j, arr) => {
												return (
													<StyledDay className="calendar__date" key={ [2019, (i+1), (j+1)].join('-') }>
														<span className="data__day">{ LOOKUP.DAY[day].slice(0,3) }</span>
														<span className="data__day-index">{ day }</span>
														<span className="data__date">{ j+1 }</span>
													</StyledDay>
												)
											})*/
										}
									</ol>
								</dd>
							</StyledMonth>
						)
					})
				}
			</StyledCalendar>
		)
	}
}
