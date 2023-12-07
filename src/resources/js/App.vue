<script setup>
import { reactive, ref } from 'vue'

// step2
const counter = reactive({ count: 0 })
const message = ref('Hello World!')
console.log(message);
</script>

<template>
<!-- step2 -->
  <h1>{{ message }}</h1>
  <h1>{{ message }}</h1>
  <p>Count is: {{ counter.count }}</p>
</template>
