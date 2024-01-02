<template>
  <board :ticker="this.ticker"></board>
</template>
<script setup>
import board from "@/components/Inc/Board"
</script>
<script>

export default {
  data() {
    return {
      ticker: "000001"
    }
  },
  mounted() {

  }
};
</script>
<style scoped></style>
