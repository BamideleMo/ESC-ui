<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComponent from './components/NavBar/FooterComponent.vue';
import NavBar from './components/NavBar/NavBar.vue'
</script>

<template>
  <NavBar />

  <RouterView />
  <FooterComponent />
</template>

<style scoped>
</style>
