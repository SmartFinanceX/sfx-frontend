<template>
    <v-container v-on:click="click">
        <!-- <router-link to="{name: 'Dashboard' , params: { ticker:$ticker }}"> -->
        <v-card>
            股票
        </v-card>
        <!-- </router-link> -->
    </v-container>
</template>

<script>
import router from '@/router';

export default {
    props: ['ticker'],
    data: () => ({
        message: '',
        loading: false,

    }),
    methods: {
        click() {
            console.log("[debug] 进行页面跳转" + this.ticker);
            // 获取当前页面的 host 和 pathname
            router.push({ path: '/inc/' + this.ticker })
        }
    }
}
</script>