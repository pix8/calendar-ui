<template lang="pug">
	#app--vue
		#pix8--calendar.ui__calendar
			.outer-wrapper

				div.navbar.navbar-default(style="border:none; borderRadius:0; background:whitesmoke;")
					button.btn.btn-sm.btn-primary.navbar-btn(v-on:click="clickHandler('prev', $event)", style="display:inline-block;") &lt;
					h2.navbar-brand( style="display:inline-block; margin: 0 20px;") Vue Calendar 2019
					button.btn.btn-sm.btn-primary.navbar-btn(v-on:click="clickHandler('next', $event)", style="display:inline-block;") &gt;

				calendar(:epoch="source" v-cloak)
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
			source: new Date().toISOString(),
			target: null
		}
	},

	computed: {},

	watch: {},

	methods: {
		clickHandler(foobar, event) {
			console.log("vue :: ", foobar)
		}
	}
}
</script>

<style lang="scss" scoped>
	[v-cloak] > * { display:none }
	[v-cloak]::before { content: "loading…" }
</style>
