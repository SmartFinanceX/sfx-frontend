<template>
    <v-form class="fill-height d-flex align-center">
        <v-container>
            <v-row>
                <v-col cols="12">

                    <v-text-field v-model="message" label="查询公司" type="text" variant="outlined">
                        <template v-slot:prepend>
                            <v-select label="搜索方式" v-model="way" :items="['关键词', '股票代码']" variant="underlined"></v-select>
                        </template>

                        <template v-slot:append>
                            <v-btn prepend-icon="mdi-map-search" variant="text" v-on:click="search">
                                搜索
                            </v-btn>
                        </template>
                    </v-text-field>
                </v-col>
            </v-row>

        </v-container>
    </v-form>
</template>

<script setup>

// function clickMe() {
//     loading.value = true
//     message.value = 'Wait for it...'
//     setTimeout(() => {
//         loading.value = false
//         message.value = `You've clicked me!`
//     }, 2000)
// }
</script>

<script>
export default {
    data: () => ({
        message: '',
        loading: false,
        way: '关键词'
    }),

    methods: {
        clickMe() {
            this.loading = true
            this.message = 'Wait for it...'
            setTimeout(() => {
                this.loading = false
                this.message = `You've clicked me!`
            }, 2000)
        },
        search() {
            console.log("[debug] 查询" + this.way + this.message);
        }
    }
}
</script>