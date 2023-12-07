<script setup>
import { reactive, ref } from 'vue'

// step2
const counter = reactive({ count: 0 })
const message = ref('Hello World!')
console.log(message);

// step3
const titleClass = ref('title')
</script>

<template>
<!-- step2 -->
  <h1>{{ message }}</h1>
  <h1>{{ message }}</h1>
  <p>Count is: {{ counter.count }}</p>

<!--  step3 -->
<div v-bind:class="titleClass">make me red</div>

</template>

<style>
.title {
  color: red;
}

</style>
