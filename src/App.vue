<script setup lang="ts">

import Header from './components/Header.vue';
import { useState } from './composable/useState';

const state = useState();

</script>

<template>
  <Header />
  <main>
    {{ state.online }}
  </main>

</template>

<style scoped></style>
