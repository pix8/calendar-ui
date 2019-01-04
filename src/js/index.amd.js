'use strict';

require([
	'react',
	'react-dom',
	'vue',
	'../react/App',
	'../vue/App.vue'
],
function (React, ReactDOM, Vue, ReactApp, VueApp) {

	document.documentElement.classList.remove('no-js');

	ReactDOM.render(
		<ReactApp />
	, document.getElementById('app--react'));

	Vue.config.productionTip = false

	var vm3 = new Vue(VueApp).$mount("#app--vue");

	if(module.hot) {
		module.hot.accept();
	}
});
