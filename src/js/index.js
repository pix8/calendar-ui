'use strict';


import CalendarService from '@pix8/calendar'

const LOOKUP = {
	MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
	DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}

//========= REACT
import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from '../react/App';


document.documentElement.classList.remove('no-js');

ReactDOM.render(
	<ReactApp />
, document.getElementById('app--react'));


//========= VUE
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueApp from '../vue/App.vue';


Vue.config.productionTip = false

var vm1 = new Vue({
	el: '#app--vue',
	render: h => h(VueApp)
});

// var vm2 = new Vue({
// 	el: 'vueapp',
// 	components: { vueapp: VueApp }
// });

//var vm3 = new Vue(VueApp).$mount("#app--vue");

if(module.hot) {
	module.hot.accept();
}
