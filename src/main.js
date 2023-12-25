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
import "vuetify/dist/vuetify.min.css";

import "./styles/bg.css"; // 引入全局样式-背景图片

const app = createApp(App);

app.config.globalProperties.$http = axios;

app.config.globalProperties.$echarts = echarts; //全局使用
//定义全局变量，target，表示网关地址
// app.config.globalProperties.$target = "http://124.222.191.199:9000";
// app.config.globalProperties.$target = "http://localhost:9000"

//定义全局变量，麦蕊（mydata）数据的证书，因为是免费接口，所以每隔一定时期就要重新申请，所以在此定义一个全局变量
app.config.globalProperties.$mydatakey = "fc21217325a5d2206e";

app.config.globalProperties.$target = "/api";
registerPlugins(app);

app.mount("#app");
