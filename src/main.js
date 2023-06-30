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
<<<<<<< HEAD
import { registerPlugins } from '@/plugins'
const app = createApp(App)
registerPlugins(app)
app.mount('#app')
=======
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
>>>>>>> ff95d10bb6834b77e87b4fa930b49fd1becb73ae
