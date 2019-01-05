<template lang="pug">
	li.calendar__date
		slot
</template>


<script>

import Utils from '../../../js/pix8/pix8.Utils'


//console.log("-- Calendar > DAY ui initialised -- ");
/*********************************************************************************************/
export default {
	name: 'day',

	components: {},

	beforeCreate() {},

	created() {},

	mounted() {},

	props: [],

	data() {
		return {
		}
	},

	computed: {},

	methods: {}
}
</script>


<style lang="scss" scoped>
	.calendar__date {
		flex-basis: (100%/7);
		margin: 0;
		text-align: center;
		font-size: 9px;

		/*display: block;
		float: left;
		margin: 5px;

		&:nth-child(8n) {
			clear: left;
		}*/

		span {
			display: block;
		}

		.data__date {
			font-size: 125%;
		}

		.data__day {
			font-weight: 300;
		}

		.data__day-index {
			font-size: 40%;
		}
	}
</style>
