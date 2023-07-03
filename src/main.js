/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

import { registerPlugins } from "@/plugins";
axios;
import axios from "axios";
import * as echarts from "echarts";

const app = createApp(App);

app.config.globalProperties.$http = axios;

app.config.globalProperties.$echarts = echarts; //全局使用
//定义全局变量，target，表示网关地址
app.config.globalProperties.$target = "http://124.222.191.199:9000";

registerPlugins(app);

app.mount("#app");
