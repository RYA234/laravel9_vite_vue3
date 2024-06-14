<script setup>
import { computed,ref} from 'vue';
// const disabled = ref(true)
const password = ref('')
const passwordRepeat = ref('')

const isDisabled = computed(() => {
    return password.value || passwordRepeat.value ? password.value !== passwordRepeat.value : true
})

</script>

<template>
<h1>SignUp</h1>
<div>
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password"/>
</div>
<div>
    <label for="passwordRepeat">PasswordRepeat</label>
    <input type="password" id="passwordRepeat" v-model="passwordRepeat"/>
</div>
    <button :disabled=" isDisabled" >Sign Up</button>


</template>
