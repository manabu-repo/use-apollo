<script setup lang="ts">
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'

import { apolloClient } from './hooks/useApolloClient'

import Book from './components/Book.vue'
import User from './components/User.vue'

provide(DefaultApolloClient, apolloClient)
</script>

<template>
  <div>Apollo app 🚀</div>
  <Book />
  <br />
  <User />
</template>
