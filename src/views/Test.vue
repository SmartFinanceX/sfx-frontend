<template>
  <v-container>
    <record :ticker="ticker"></record>
  </v-container>
</template>
<script setup>
import record from '@/components/Analyze/Record'
</script>
<script>

export default {
  components: {
    // Record
  },
  data: () => ({
    ticker: "000001"
  }),
};
</script>
