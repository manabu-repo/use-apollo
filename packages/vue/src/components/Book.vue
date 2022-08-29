<script setup lang="ts">
import { watch } from "vue";
import { useBook } from "../composable/useBook";

const ret = useBook();

watch(ret, (value) => {
  console.log("ret: ", ret);
});
</script>

<template>
  <span>Book</span>
</template>
