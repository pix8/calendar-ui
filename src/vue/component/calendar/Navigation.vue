<template lang="pug">
	nav
		button.btn.btn-primary(v-on:click="decrementYear($event)") &lt;
		
		h2.navbar-brand Vue Calendar&nbsp;
			span {{ everything.indexOf(apiCalendar) }}
		
		button.btn.btn-primary(v-on:click="incrementYear($event)") &gt;
		
		p.navbar-brand Target date: {{ getTargetDate }}
</template>


<script>
export default {
	name: 'navigation',

	props: ["everything", "apiCalendar", "getTargetDate"],

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


<style lang="scss" scoped>
</style>
