<template lang="pug">
	.calendar
		dl.calendar__month(v-for="(month, i) in render", :index="i", :key="i")
			dt {{ LOOKUP.MONTH[i] }} ({{ i }})
			
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
			display: flex;
			flex-wrap: wrap;
		}

		.calendar__month {
			flex-basis: auto;
			background: gold;
			width: 28%;
			margin: 20px;

			dt {
				font-size: 20px;
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
