<script setup>
import axios from 'axios';
import { computed,reactive } from 'vue';

const formState = reactive({
    username:'',
    email:'',
    password:'',
    passwordRepeat:''
})

const submit = () => {

    const {passwordRepeat,...body} = formState;
    axios.post('/api/v1/users',body)
}
const isDisabled = computed(() => {
    return formState.password || formState.passwordRepeat ? formState.password !== formState.passwordRepeat : true
})

</script>

<template>
<h1>SignUp</h1>
<div>
    <label for="username">Username</label>
    <input type="text" id="username" v-model="formState.username"/>
</div>
<div>
    <label for="email">E-mail</label>
    <input type="text" id="email" v-model="formState.email"/>
</div>
<div>
    <label for="password">Password</label>
    <input type="password" id="password" v-model="formState.password"/>
</div>
<div>
    <label for="passwordRepeat">PasswordRepeat</label>
    <input type="password" id="passwordRepeat" v-model="formState.passwordRepeat"/>
</div>
    <button :disabled=" isDisabled" @click="submit" >Sign Up</button>
</template>
