'use strict';

import React from 'react'
import PropTypes from 'prop-types'

import { 
	StyledCalendar
} from './calendar.style'

import Moment from 'moment'


const Navigation = ({decrementYear, incrementYear, apiCalendar, source, target}) => {

	return (
		<nav>
			<button className="btn btn-primary" onClick={ decrementYear }>&lt;</button>
			
			<h2>
				React Calendar&nbsp;
				<span>{ Moment(source).format("Y") }</span>
			</h2>
			
			<button className="btn btn-primary" onClick={ incrementYear }>&gt;</button>

			<p>Target date: { Moment(target).format("dddd, Do MMM Y") }</p>
		</nav>
	)
}

export default Navigation;