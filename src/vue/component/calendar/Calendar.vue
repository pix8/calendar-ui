<template lang="pug">
	.calendar
		dl.calendar__month(v-for="(month, i) in render", :index="i", :key="i")
			dt {{ LOOKUP.MONTH[i] }}

			dd
				ol.list-unstyled
					template(v-for="(week, j) in month")
						template(v-if="week.length < 7")
							template(v-if="week[0] > 0")
								li(is="day", v-for="(day, k) in [...Array(7-week.length).fill(null)].concat(week)", :key="[2019, (i+1), (j+1), (k+1)].join('-')")
									a(v-if="day !== null" href="")
										span.data__day {{ LOOKUP.DAY[day].slice(0,3) }}
										span.data__date {{ (k+1)+(j*7)-(7-month[0].length) }}
							template(v-else)
								li(is="day", v-for="(day, k) in week.concat([...Array(7-week.length).fill(null)])", :key="[2019, (i+1), (j+1), (k+1)].join('-')")
									a(v-if="day !== null" href="")
										span.data__day {{ LOOKUP.DAY[day].slice(0,3) }}
										span.data__date {{ (k+1)+(j*7)-(7-month[0].length) }}
						template(v-else)
							li(is="day", v-for="(day, k) in week", :key="[2019, (i+1), (j+1), (k+1)].join('-')")
								a(href="")
									span.data__day {{ LOOKUP.DAY[day].slice(0,3) }}
									span.data__date {{ (k+1)+(j*7)-(7-month[0].length) }}
		//- REDUNDANT
			dd
				ol.list-unstyled
					li(is="day", v-for="(day, j) in month.flat()", :key="[2019, (i+1), (j+1)].join('-')")
						span.data__day {{ LOOKUP.DAY[day].slice(0,3) }}
						span.data__day-index {{ day }}
						span.data__date {{ j+1 }}
</template>


<script>

//import Month from './Month'
import Day from './Day'

import CalendarService from '@pix8/calendar'

const LOOKUP = {
	MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
	DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}


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

		this.calendar.getYear( this.epoch )
			.then( (data) => {
				this.apiCalendar = data;
			});
	},

	mounted() {},

	props: ['epoch'],

	data() {
		return {
			apiCalendar: [],
			LOOKUP: LOOKUP
		}
	},

	computed: {
		render() {
			return this.apiCalendar;
		}
	},

	watch: {},

	methods: {
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
