<script setup>
import { reactive, ref } from 'vue'

// step2
const counter = reactive({ count: 0 })
const message = ref('Ho Waaorld!')
console.log(message);

// step3
const titleClass = ref('title')

// step4
const count = ref(0)
function increment(){
    count.value++;
}

// step5
const text = ref('')

// step6
const awesome = ref(true)
function toggle() {
  awesome.value = !awesome.value;
}
// step7
</script>


<template>
<!-- step2 -->
  <h1>{{ message }}</h1>
  <h1>{{ message }}</h1>
  <p>Count is: {{ counter.count }}</p>

    <!--  step3 -->
    <div v-bind:class="titleClass">make me red</div>

    <!-- step4 -->
    <button @click="increment">{{ count }}</button>

    <!-- step5 -->
    <br/><br/><br/>
    step5<br/>
    <input v-model="text" placeholder="Type here">
    <p>{{ text }}</p>
    <!-- step6 -->
    <button @click="toggle">toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <!-- step7 -->

</template>

<style>
.title {
  color: red;
}

</style>
