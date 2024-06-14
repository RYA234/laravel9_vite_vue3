<script setup>
import { ref } from 'vue';
const disabled = ref(true)
const password = ref('')
const passwordRepeat = ref('')

function onChangePassword(event) {
    password.value = event.target.value;
    disabled.value = password.value !== passwordRepeat.value;
    console.log(disabled.value)
}

function onChangePasswordRepeat(event) {
    passwordRepeat.value = event.target.value;
    disabled.value = password.value !== passwordRepeat.value;
    console.log(disabled.value)
}
</script>

<template>
<h1>SignUp</h1>
<div>
    <label for="password">Password</label>
    <input type="password" id="password" @input="onChangePassword"/>
</div>
<div>
    <label for="passwordRepeat">PasswordRepeat</label>
    <input type="password" id="passwordRepeat" @input="onChangePasswordRepeat"/>
</div>
    <button :disabled="disabled" >Sign Up</button>


</template>
