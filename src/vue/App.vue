<template lang="pug">
	#app--vue
		#pix8--calendar.ui__calendar
			.outer-wrapper
				h2 Vue Calendar 2019

				calendar(:epoch="new Date().toISOString()")
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

	methods: {}
}
</script>
