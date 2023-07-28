<template>
  <div v-if="open" class="modal bg-green-400 fixed z-50 top-10">
    <p>Hello from the modal!</p>
    <button class="btn w-4/12 bg-black" @click="open = false">Close</button>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'Custom-Modal',
  setup() {
    const open = ref(false)
    return {
      open
    }
  }
}
</script>
<style>
.modal {
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
