<script setup lang="ts">
import { watch, computed, unref } from "vue";
import { useBook } from "../composable/useBook";

const { result, loading, error } = useBook();
const books = computed(() => unref(result).books);
</script>

<template>
  <div>Book</div>
  <div v-if="loading">Loading……</div>

  <div v-else v-for="book in books">
    <div>title: {{ book.title }}</div>
    <div>author: {{ book.author }}</div>
  </div>
</template>
