
<template>
    <v-container>
        <v-app-bar>
            <v-app-bar-title>
                股票名字 {{ ticker }}
            </v-app-bar-title>
            <v-btn prepend-icon="mdi-paperclip-plus" variant="text">
                添加选股
            </v-btn>
            <v-spacer></v-spacer>
            <router-link :to="{ name: 'BasicInfo' }">
                <v-btn prepend-icon="mdi-poll" variant="text">
                    数据分析
                </v-btn>
            </router-link>
            <router-link :to="{ name: 'Predict' }">
                <v-btn prepend-icon="mdi-sticker-text" variant="text">
                    数据预测
                </v-btn>
            </router-link>
            <router-link :to="{ name: 'Stock' }">
                <v-btn prepend-icon="mdi-thermostat" variant="text">
                    实时股价
                </v-btn>
            </router-link>
        </v-app-bar>
        <router-view>

        </router-view>
    </v-container>
</template>
<script setup>

</script>
<script>
export default {
    props: ['ticker', 'name'],
    mounted() {
        console.log("[debug] inc" + this.ticker)
    },
    components: {

    },
    data: () => ({}),
    methods: {

    }
};
</script>