import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./app/router";

import "./assets/scss/index.scss";
import "@mdi/font/scss/materialdesignicons.scss"

import { LatteUI } from "@latte-ui/core/src/main";
import { faIconRenderer, initializeFontAwesome } from "@/app/font-awesome";

Vue.config.productionTip = false;

initializeFontAwesome();

Vue.use(LatteUI, {
	iconRenderer: faIconRenderer,
	icons: {
		calendar: "fad calendar",
		chevronDoubleLeft: "fad angle-double-left",
		chevronDoubleRight: "fad angle-double-right",
		chevronLeft: "fad angle-left",
		chevronRight: "fad angle-right"
	}
});

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
