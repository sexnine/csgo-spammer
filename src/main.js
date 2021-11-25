import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import store from "./store";

library.add(faCheck);

const app = createApp(App);

// app.use(store)
app.use(router);

app.component("fa-icon", FontAwesomeIcon);

app.mount("#app");
