<script>
'use strict';

const LOOKUP = {
	MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
	DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",")
}

export default {
	name: 'day',

	props: ["day", "month", "i", "j", "k", "year", "apiCalendar"],

	data() {
		return {
			LOOKUP
		}
	},

	methods: {
		setOrdinalSuffix(num) {
			const suffix = ["th", "st", "nd", "rd"],
				v = num%100;
			
			return (suffix[(v-20)%10] || suffix[v] || suffix[0]);

			//DEVNOTE: shorthad alternative
			//return [,"st", "nd", "rd"][num%100>>3^1&&num%10] || 'th';
		},

		clickHandler(event, index, foo, bar) {
			this.$emit("onSetTarget", event, index, foo, bar);
		}
	}
}
</script>

<template lang="pug">
	li.calendar__date
		a(href="", v-if="day !== null", v-on:click="clickHandler($event, year, i, (k+1)+(j*7)-(7-month[0].length))")
			//- span.data__day {{ LOOKUP.DAY[day].slice(0,3) }}
			span.data__date
				| {{ (k+1)+(j*7)-(7-month[0].length) }}
				sup {{ setOrdinalSuffix( (k+1)+(j*7)-(7-month[0].length) ) }}
</template>

<style lang="scss" scoped>
</style>
