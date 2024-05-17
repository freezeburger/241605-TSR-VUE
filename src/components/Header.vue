<script setup lang="ts">
import { useState } from '../composable/useState';

const state = useState();

</script>

<template>
    {{ state.online }}
</template>

<style></style>