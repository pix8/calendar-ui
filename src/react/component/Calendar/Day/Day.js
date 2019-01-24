'use strict';

import React from "react"
import {} from './day.style'


const LOOKUP = {
	MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
	DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",")
}

const Day = ({day, month, j, k, setTarget}) => {

	function setOrdinalSuffix(num) {
		const suffix = ["th", "st", "nd", "rd"],
			v = num%100;
		
		return (suffix[(v-20)%10] || suffix[v] || suffix[0]);

		//DEVNOTE: shorthad alternative
		//return [,"st", "nd", "rd"][num%100>>3^1&&num%10] || 'th';
	}

	return (
		<li className="calendar__date">
			{
				(day !== null) ?
					<a href="" onClick={ setTarget }>
						{/*<span className="data__day">{ LOOKUP.DAY[day].slice(0,3) }</span>*/}
						<span className="data__date">{ (k+1)+(j*7)-(7-month[0].length) }<sup>{ setOrdinalSuffix( (k+1)+(j*7)-(7-month[0].length) ) }</sup></span>
					</a>
					: null
			}
		</li>
	)
}

export default Day;
