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
import axios from "axios";
axios;
import * as echarts from "echarts";
import 'vuetify/dist/vuetify.min.css';

const app = createApp(App);

app.config.globalProperties.$http = axios;

app.config.globalProperties.$echarts = echarts; //全局使用
//定义全局变量，target，表示网关地址
// app.config.globalProperties.$target = "http://124.222.191.199:9000";
// app.config.globalProperties.$target = "http://localhost:9000"
app.config.globalProperties.$target = "/api"
registerPlugins(app);

app.mount("#app");
