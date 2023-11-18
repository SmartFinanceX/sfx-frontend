<template>
  <sb></sb>
</template>
<script setup>
import record from "@/components/Analyze/Record";
import sb from "@/components/SearchBar";
</script>
<script>
export default {
  components: {
    // Record
  },
  data: () => ({
    ticker: "000001",
  }),
};
</script>
