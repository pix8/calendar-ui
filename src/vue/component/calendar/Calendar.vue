<template lang="pug">
	div
		div.navbar.navbar-default(style="border:none; borderRadius:0; background:whitesmoke;")
			button.btn.btn-sm.btn-primary.navbar-btn(v-on:click="decrementYear($event)", style="display:inline-block;") &lt;
			h2.navbar-brand( style="display:inline-block; margin: 0 20px;") Vue Calendar 2019
			button.btn.btn-sm.btn-primary.navbar-btn(v-on:click="incrementYear($event)", style="display:inline-block;") &gt;
			p.navbar-brand(style="float:right; margin:0 20px;") Target date: {{ getTargetDate }}

		.calendar
			//-dl.calendar__month(v-for="(month, i) in render", :index="i", :key="i")
			dl.calendar__month(v-for="(month, i) in apiCalendar", :index="i", :key="i")
				dt {{ LOOKUP.MONTH[i] }}

				dd
					ol.list-unstyled
						template(v-for="(week, j) in month")
							template(v-if="week.length < 7")
								template(v-if="week[0] > 0")
									li(is="day", v-for="(day, k) in [...Array(7-week.length).fill(null)].concat(week)", :key="[2019, (i+1), (j+1), (k+1)].join('-')")
										a(v-if="day !== null", href="", v-on:click="setTarget($event, 2019, i, (k+1)+(j*7)-(7-month[0].length))")
											span.data__day {{ LOOKUP.DAY[day].slice(0,3) }}
											span.data__date {{ (k+1)+(j*7)-(7-month[0].length) }}
								template(v-else)
									li(is="day", v-for="(day, k) in week.concat([...Array(7-week.length).fill(null)])", :key="[2019, (i+1), (j+1), (k+1)].join('-')")
										a(v-if="day !== null", href="", v-on:click="setTarget($event, 2019, i, (k+1)+(j*7)-(7-month[0].length))")
											span.data__day {{ LOOKUP.DAY[day].slice(0,3) }}
											span.data__date {{ (k+1)+(j*7)-(7-month[0].length) }}
							template(v-else)
								li(is="day", v-for="(day, k) in week", :key="[2019, (i+1), (j+1), (k+1)].join('-')")
									a(href="", v-on:click="setTarget($event, 2019, i, (k+1)+(j*7)-(7-month[0].length))")
										span.data__day {{ LOOKUP.DAY[day].slice(0,3) }}
										span.data__date {{ (k+1)+(j*7)-(7-month[0].length) }}
</template>


<script>

//import Month from './Month'
import Day from './Day'

import CalendarService from '@pix8/calendar'
import Moment from "moment"

const LOOKUP = {
	MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
	DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}

const epoch = new Date().toISOString();

//console.log("-- 1. VUE:CALENDAR component initialised -- ");
/*********************************************************************************************/
export default {
	name: 'calendar',

	components: {
		Day
	},

	beforeCreate() {},

	created() {
		this.calendar = new CalendarService();

		this.getCalendarData(this.source);
	},

	mounted() {},

	props: [],

	data() {
		return {
			source: epoch,
			target: epoch,
			apiCalendar: [],
			LOOKUP
		}
	},

	computed: {
		render() {
			return this.apiCalendar;
		},

		getTargetDate() {
			return Moment(this.target).format("dddd, Do MMM Y");
		}
	},

	watch: {},

	methods: {
		getCalendarData(value) {
			this.calendar.getYear(value)
				.then( (data) => {
					this.apiCalendar = data;
					this.source = value;
				});
		},

		incrementYear(event) {
			let value = Moment(this.source).add(1, "years").toDate().toISOString();

			this.getCalendarData(value);
		},

		decrementYear(event) {
			let value = Moment(this.source).subtract(1, "years").toDate().toISOString();

			this.getCalendarData(value);
		},

		setTarget(event, year, month, day) {
			event.preventDefault();

			let target = [year, month, day];
			//console.log("you clicked :: ", event.target, " :: ", `2019 / ${month} / ${day}`);

			this.target = target;
		}
	}
}
</script>


<style lang="scss" scoped>
	.ui__calendar {
		background: whitesmoke;

		.calendar {
			background: whitesmoke;
			display: flex;
			flex-wrap: wrap;
		}

		a {
			display: block;
			color: inherit;
			width: 34px;
			height: 34px;
			padding: 5px;
			transition: all 200ms;

			//DEVNOTE: use psuedo element for border-radius to avoid conflict with :hover hotspot
			border-radius: 50%;

			&:hover {
				background: rgba(236,0,140, 1);
				color: white;
				text-decoration: none;
				transition: none;
			}
		}

		.calendar__month {
			flex-basis: auto;
			width: (100%/3);
			padding-left: 20px;
			padding-right: 20px;
			margin-top: 0;
			margin-bottom: 0;

			dt {
				font-size: 14px;
				font-weight: 700;
			}

			dd {
				
			}
		}

		ol {
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>
