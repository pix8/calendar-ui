<template lang="pug">
	li.calendar__date
		a(href="", v-if="day !== null", v-on:click="clickHandler($event, everything.indexOf(apiCalendar), i, (k+1)+(j*7)-(7-month[0].length))")
			span.data__day {{ LOOKUP.DAY[day].slice(0,3) }}
			span.data__date {{ (k+1)+(j*7)-(7-month[0].length) }}
</template>


<script>

const LOOKUP = {
	MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
	DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",")
}

export default {
	name: 'day',

	props: ["day", "month", "i", "j", "k", "everything", "apiCalendar"],

	data() {
		return {
			LOOKUP
		}
	},

	methods: {
		clickHandler(event, index, foo, bar) {
			this.$emit("onSetTarget", event, index, foo, bar);
		}
	}
}
</script>


<style lang="scss" scoped>
</style>
