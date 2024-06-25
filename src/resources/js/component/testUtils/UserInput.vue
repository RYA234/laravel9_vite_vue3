<template>
    <div>test</div>
    <div>
      <form @submit.prevent="handleSubmit">
        <input v-model="username" data-username>
        <input type="submit">
      </form>

      <div
        class="message"
        v-if="submitted"
      >
        Thank you for your submission, {{ username }}.
      </div>
    </div>
  </template>

<script>
    import { defineComponent, ref } from 'vue';
    export default defineComponent({
        props: {
        },
        setup(props){
        const  {username, submitted} = handleSubmit()
            return {
                username,
                submitted,
                handleSubmit
            }
        }
    })

    // 
    export function handleSubmit() {
        const username =ref('')
        const submitted = ref(false)
        submitted.value = true
        return{
            username,
            submitted
        }
    }
</script>
