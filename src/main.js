import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/styles.scss'
import 'animate.css'
import AOS from "aos" // animate on scroll
import "aos/dist/aos.css" // animate on scroll
import "aos/dist/aos.css" // animate on scroll
import VueScrollTo from 'vue-scrollto'
import VueTypedJs from 'vue-typed-js'




// import scrollDirective from "./directives/scrollAnimations"
// Vue.use("scrollDirective", scrollDirective)
Vue.config.productionTip = false
Vue.use(VueTypedJs)//typing animation
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueScrollTo)//anchor scroll
Vue.use(VueScrollTo, {//anchor scroll
	container: "body",
	duration: 500,
	easing: "ease",
	offset: 0,
	force: true,
	cancelable: true,
	onStart: false,
	onDone: false,
	onCancel: false,
	x: false,
	y: true
})
new Vue({
	created() {
		AOS.init()
	},
	render: h => h(App),
}).$mount('#app')
