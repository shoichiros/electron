<template>
  <textarea
    class="main-editor"
    placeholder="Writing start here..."
    @input="emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script setup>
import { ref } from 'vue';

const modelValue = ref("")
const emit = defineEmits(["update:modelValue"])
</script>

<style scoped>
.main-editor {
  color: #ccc;
  background: #333;
  border: none;
  flex: 1;
  font-size: 16px;
  padding: 60px 30px;
  width: 100%;
  height: 100vh;
  resize: none;
  outline: none;
}
</style>