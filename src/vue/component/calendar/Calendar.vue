<script>
'use strict';

//import Month from './Month'
import Day from './Day/Day'
import Navigation from './Navigation'

import CalendarService from '@pix8/calendar'
import Moment from "moment"


const LOOKUP = {
	MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
	DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",")
}

const epoch = new Date().toISOString();

//console.log("-- 1. VUE:CALENDAR component initialised -- ");
/*********************************************************************************************/
export default {
	name: 'calendar',

	components: {
		Day,
		Navigation
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
		/*render() {
			return this.apiCalendar;
		},*/

		getTargetDate() {
			return Moment(this.target).format("dddd, Do MMM Y");
		},

		getYear() {
			return ~~Moment(this.source).format('Y');
		}
	},

	watch: {},

	methods: {
		getCalendarData(value) {
			this.calendar.getCalendarYear(value)
				.then( (data) => {
					this.source = value;
					//this.apiCalendar = data[ Moment(value).format("Y") ];
					this.apiCalendar = data;
				});
		},

		getKey(i, j, k) {
			return [~~Moment(this.source).format('Y'), (i+1), (j+1), (k+1)].join('-');
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

<template lang="pug">
	div
		navigation(@decrementYearEvent="decrementYear", @incrementYearEvent="incrementYear", :year="getYear", :getTargetDate="getTargetDate", :apiCalendar="apiCalendar")

		.outer-wrapper
			.calendar
				dl.calendar__month(v-for="(month, i) in apiCalendar[ getYear ]", :index="i", :key="i")

					//- MONTH
					dt {{ LOOKUP.MONTH[i] }}

					dd
						header.month__header
							p.header__day(v-for="(day, j) in LOOKUP.DAY", :key="j") {{ day.slice(0,3) }}

						ol
							template(v-for="(week, j) in month")

								//- WEEK
								template(v-if="week.length < 7")
									template(v-if="week[0] > 0")

										day(v-for="(day, k) in [...Array(7-week.length).fill(null)].concat(week)", :key="getKey(i, j, k)" @onSetTarget="setTarget", :day="day", :month="month", :i="i", :j="j", :k="k", :year="getYear", :apiCalendar="apiCalendar")

									template(v-else)

										day(v-for="(day, k) in week.concat([...Array(7-week.length).fill(null)])", :key="getKey(i, j, k)" @onSetTarget="setTarget", :day="day", :month="month", :i="i", :j="j", :k="k", :year="getYear", :apiCalendar="apiCalendar")

								template(v-else)

									day(v-for="(day, k) in week", :key="getKey(i, j, k)" @onSetTarget="setTarget", :day="day", :month="month", :i="i", :j="j", :k="k", :year="getYear", :apiCalendar="apiCalendar")
</template>

<style lang="scss" scoped>
</style>
