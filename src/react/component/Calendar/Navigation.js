'use strict';

import React from 'react'
import PropTypes from 'prop-types'

import { 
	StyledCalendar
} from './calendar.style'

import Moment from 'moment'


const Navigation = ({decrementYear, incrementYear, apiCalendar, everything, target}) => {

	return (
		<nav className="navbar navbar-default">
			<button className="btn btn-sm btn-primary navbar-btn" onClick={ decrementYear }>&lt;</button>
			
			<h2 className="navbar-brand">
				React Calendar 
				<span>{ everything.indexOf(apiCalendar) }</span>
			</h2>
			
			<button className="btn btn-sm btn-primary navbar-btn" onClick={ incrementYear }>&gt;</button>

			<p className="navbar-brand">Target date: { Moment(target).format("dddd, Do MMM Y") }</p>
		</nav>
	)
}

export default Navigation;