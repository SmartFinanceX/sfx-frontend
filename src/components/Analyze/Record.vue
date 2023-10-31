<template>
    <v-container class="Record d-flex justify-start">
        <v-container class="flex-column justify-center w-50 align-center">
            <v-text-field v-model="price" label="单位成交价格" type="number"></v-text-field>
            <v-text-field v-model="fee" label="总手续费" type="number"></v-text-field>
            <v-text-field v-model="num" label="成交量" type="number" step="1"></v-text-field>

            <v-container class="d-flex justify-center align-center">
                <v-switch v-model="switchValue" :label="switchValue === 1 ? '买入' : '卖出'" :true-value="1" :false-value="2"
                    color="red-darken-3" inset></v-switch>
            </v-container>
            <v-container class="d-flex">
                <v-btn v-on:click="submitForm" color="primary" class="">增加交易记录</v-btn>
            </v-container>
            <notify ref="notifyBar"></notify>
        </v-container>
        <v-card title="交易时间选择" class="w-auto">
            <v-card-item class="flex-column">
                <v-container class="d-flex">
                    <v-select v-model="selectedHour" :hide-details=true :items="hours" label="时"
                        variant="outlined"></v-select>
                    <v-select v-model="selectedMinute" :hide-details=true :items="minutes" label="分"
                        variant="outlined"></v-select>
                    <v-select v-model="selectedSecond" :hide-details=true :items="seconds" label="秒"
                        variant="outlined"></v-select>
                </v-container>
                <!-- <label for="time-picker">交易时间</label>
                    <input id="time-picker" v-model="selectedTime" type="time"> -->

            </v-card-item>

            <v-card-item>
                <v-date-picker v-model="selectedDate"></v-date-picker>
            </v-card-item>

        </v-card>
    </v-container>
</template>


<script setup>
import notify from "@/components/common/notify"
import { VDatePicker } from 'vuetify/labs/VDatePicker'
</script>
<script>
export default {

    props: ["ticker", "userId"],
    data() {
        return {
            switchValue: 1,
            fee: null,
            price: null,
            num: 0,
            selectedDate: null,
            selectedHour: null,
            selectedMinute: null,
            selectedSecond: null,
            hours: Array.from({ length: 24 }, (_, index) => index), // 0-23
            minutes: Array.from({ length: 60 }, (_, index) => index), // 0-59
            seconds: Array.from({ length: 60 }, (_, index) => index),
            notify: true
        };
    },
    methods: {
        submitForm() {
            // 创建一个新的 Date 对象
            const dateObj = new Date(this.selectedDate);
            console.log(this.selectedDate)
            console.log(dateObj)
            // 提取年、月、日
            const year = dateObj.getFullYear(); // 获取年份
            const month = dateObj.getMonth() + 1; // 获取月份（注意月份从0开始，所以要加1）
            const day = dateObj.getDate(); // 获取日期

            // 格式化为 "yyyy-MM-dd"
            const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
            const formattedHours = this.selectedHour < 10 ? `0${this.selectedHour}` : this.selectedHour;
            const formattedMinutes = this.selectedMinute < 10 ? `0${this.selectedMinute}` : this.selectedMinute;
            const formattedSeconds = this.selectedSecond < 10 ? `0${this.selectedSecond}` : this.selectedSecond;
            var formData = {
                tp: this.switchValue,
                fee: this.fee,
                price: this.price,
                num: this.num,
                ticker: this.ticker,
                time: formattedDate + " " + formattedHours + ":" + formattedMinutes + ":" + formattedSeconds,
                userId: 1
            };
            console.log(formData)
            var _this = this
            // 发送 POST 请求到指定的 URL
            this.$http.post(`/api/analyze/benefit/add_record`, formData)
                .then(response => {
                    // 处理成功响应
                    console.log(response.data);
                    if (response.data.code == 200) {
                        _this.$refs.notifyBar.successNotify('添加成功')
                    } else {
                        _this.$refs.notifyBar.warnNotify(response.data.msg)
                    }

                })
                .catch(error => {
                    // 处理错误
                    console.error(error);
                });
        }
    },
    created() {
        // 初始化 selectedTime 为当前时间

        const currentDate = new Date();
        this.selectedDate = currentDate
        // 提取小时、分钟和秒钟
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();

        // 格式化小时、分钟和秒钟（如果需要）
        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        this.selectedHour = formattedHours
        this.selectedMinute = formattedMinutes
        this.selectedSecond = formattedSeconds
    },
};
</script>

