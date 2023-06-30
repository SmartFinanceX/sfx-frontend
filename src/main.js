/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
//axios
import axios from "axios";
//echarts
import * as echarts from "echarts";

const app = createApp(App);

app.config.globalProperties.$http = axios;

app.config.globalProperties.$echarts = echarts; //全局使用

registerPlugins(app);

app.mount("#app");
