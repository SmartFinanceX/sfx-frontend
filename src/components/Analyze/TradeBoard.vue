<template>
    <v-app-bar class="elevation-2">
        <v-container class="text-center">
            <router-link :to="{ name: 'history' }">
                <v-btn prepend-icon="mdi-poll" variant="text"> 交易记录 </v-btn>
            </router-link>
            <router-link :to="{ name: 'Record' }">
                <v-btn prepend-icon="mdi-poll" variant="text"> 增加交易 </v-btn>
            </router-link>
        </v-container>
    </v-app-bar>



    <router-view :ticker="ticker"></router-view>
</template>

<script>
export default {
    props: ["ticker", "userId"],
};
</script>

<style>
v-app-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background-color: lightgray;
}
</style>