<script setup>
import AppSidebar from './components/TheSidebar.vue';
import AppEditor from './components/TheEditor.vue';
import { ref } from 'vue';

const documentData = ref("")
</script>

<template>
  <AppSidebar :documentData="documentData" />
  <AppEditor v-model="documentData" />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans JP", sans-serif;
}

#app {
  display: flex;
}

body {
  background: #333;
}
</style>
