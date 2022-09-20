<script setup lang="ts">
import { computed, unref } from "vue";
import { useUser } from "../composable/useUser";

const { result, loading, error } = useUser();
const users = computed(() => unref(result).users);
</script>

<template>
  <div>User</div>
  <div v-if="loading">Loading……</div>

  <section v-else class="card">
    <div v-for="user in users" class="user-card">
      <div>id: {{ user.id }}</div>
      <div>name: {{ user.name }}</div>
      <div>birth: {{ user.birth }}</div>
      <div>age: {{ user.age }}</div>
    </div>
  </section>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
  width: 600px;
  height: 400px;
}

.user-card {
  padding: 10px;
}
</style>
