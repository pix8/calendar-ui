<template lang="pug">
	#app--vue
		#pix8--calendar.ui__calendar
			calendar(v-cloak)
</template>

<script>

import Calendar from './component/Calendar/Calendar'


//console.log("-- 0. VUE APP(root) initialised -- ");
/*********************************************************************************************/
export default {
	components: {
		Calendar
	},

	data() {
		return {
		}
	},

	computed: {},

	watch: {},

	methods: {	}
}
</script>

<style lang="scss" scoped>
	[v-cloak] > * { display:none }
	[v-cloak]::before { content: "loading…" }
</style>
