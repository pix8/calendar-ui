'use strict';

import React, { Component } from "react"
import Day from '../Day'
import './month.style.scss'


//console.log("-- Calendar > MONTH component initialised -- ");
/*********************************************************************************************/
export default class Month extends Component {

	render() {
		return (
			<dl>
				<dt>Foobar</dt>

				<dd>
					<ol className="list-unstyled">
						{this.props.data.map( (item, index, arr) => {
							return <Day day={ item } date={ index+1 } month="" year="" target={ new Date( Date.UTC(this.props.data.year, this.props.data.index, index+1) ) } key={ index } />;
						})}
					</ol>
				</dd>
			</dl>
		)
	}
}
