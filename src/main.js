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
// import scrollDirective from "./directives/scrollAnimations"
// Vue.use("scrollDirective", scrollDirective)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
new Vue({
	created() {
		AOS.init()
	},
	render: h => h(App),
}).$mount('#app')
