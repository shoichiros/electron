<template>
  <button @click="emit('click')" class="base-side-nav-button">
    <img class="base-side-nav-image" :src="imagePath" :alt="title" />
    <div class="base-side-nav-title">{{ title }}</div>
  </button>
</template>

<script setup>
defineProps({
  title: String,
  imagePath: String
})

const emit = defineEmits(["click"])
</script>

<style scoped>
.base-side-nav-button {
  background: none;
  border: none;
  padding: 15px 0;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;
}

.base-side-nav-button:hover {
  background: #666;
}

.base-side-nav-image {
  width: 32px;
  height: 32px;
}

.base-side-nav-title {
  color: #ccc;
  font-size: 12px;
  font-weight: 600;
}
</style>