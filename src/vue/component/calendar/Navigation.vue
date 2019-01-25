<script>
'use strict';

export default {
	name: 'navigation',

	props: ["year", "apiCalendar", "getTargetDate"],

	methods: {
		decrementYear(event){
			this.$emit('decrementYearEvent', event);
		},

		incrementYear(event){
			this.$emit('incrementYearEvent', event);
		}
	}
}
</script>

<template lang="pug">
	nav
		button.btn.btn-primary(v-on:click="decrementYear($event)") &lt;
		
		h2 Vue Calendar&nbsp;
			span {{ year }}
		
		button.btn.btn-primary(v-on:click="incrementYear($event)") &gt;
		
		p Target date: {{ getTargetDate }}
</template>

<style lang="scss" scoped>
</style>
