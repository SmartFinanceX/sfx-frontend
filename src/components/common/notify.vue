<template>
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout">
        <v-card :title="snackbar.title" :text="snackbar.text" :color="snackbar.color"></v-card>
    </v-snackbar>
</template>

<script>
export default {
    data() {
        return {
            snackbar: {
                show: false,
                text: '',
                color: '',
                timeout: 3000,
                title: ''
            }
        };
    },
    methods: {
        openSnackbar(text, color) {
            this.snackbar.text = text;
            this.snackbar.color = color;
            this.snackbar.show = true;

            setTimeout(() => {
                this.snackbar.show = false;
            }, this.snackbar.timeout);
        },
        successNotify(text) {
            this.snackbar.text = text;
            this.snackbar.show = true;
            this.snackbar.color = "success";
            this.snackbar.title = "成功"
            setTimeout(() => {
                this.snackbar.show = false;
            }, this.snackbar.timeout);
        },
        warnNotify(text) {
            this.snackbar.text = text;
            this.snackbar.show = true;
            this.snackbar.color = "red-accent-2";
            this.snackbar.title = "警告"
            setTimeout(() => {
                this.snackbar.show = false;
            }, this.snackbar.timeout);
        }
    },
};
</script>