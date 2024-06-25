<template>
    <div>
    </div>
  </template>

  <script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        props: {
        },
        setup(props,context){

        const emitEvent =()=>{
            context.emit("myEvent","name","password")
        }
        return {
                emitEvent
            }
        }
    })

  </script>

  <style scoped>
  </style>
