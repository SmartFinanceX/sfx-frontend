## Notify 组件使用
在其他组件中导入Notify组件


```html
<template>
<notify ref="notifyBar"></notify>
<template>
<script setup>
import notify from "@/components/common/notify"
</script>
```

然后在js代码中使用包装好的通知方法。例如
```js
this.$http.get(requestUrl).then((res) => {
    console.log(res.data)
    if (res.data.code == "200") {
        this.getTradeHisroty = res.data.records
        this.$refs.notifyBar.successNotify("查询历史交易成功")
    } else {
        this.$refs.notifyBar.warnNotify(res.data.msg)
    }
})
```