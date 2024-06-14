<script setup>
import axios from 'axios';
import { computed, ref } from 'vue';

const password = ref('')
const passwordRepeat = ref('')
const username = ref('')
const email = ref('')


const submit = () => {
    console.log('submit')
    axios.post('/api/v1/user', {
        username: username.value,
        email: email.value,
        password: password.value
    })
}
const isDisabled = computed(() => {
    return password.value || passwordRepeat.value ? password.value !== passwordRepeat.value : true
})

</script>

<template>
<h1>SignUp</h1>
<div>
    <label for="username">Username</label>
    <input type="text" id="username" v-model="username"/>
</div>
<div>
    <label for="email">E-mail</label>
    <input type="text" id="email" v-model="email"/>
</div>
<div>
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password"/>
</div>
<div>
    <label for="passwordRepeat">PasswordRepeat</label>
    <input type="password" id="passwordRepeat" v-model="passwordRepeat"/>
</div>
    <button :disabled=" isDisabled" @click="submit" >Sign Up</button>
</template>
