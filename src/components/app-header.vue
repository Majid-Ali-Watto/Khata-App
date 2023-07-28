<script setup>
import { ref } from 'vue'
import { useCustomerStore } from '../stores/customer.js'
import { RouterLink } from 'vue-router'
const props = defineProps({
  getCust: Function
})
const cust = ref('')
const { setCustomer } = useCustomerStore()
const setCust = () => {
  setCustomer(cust.value)
  props.getCust()
}
</script>

<template>
  <main class="flex flex-col">
    <header class="bg-green-400 w-full h-10 flex justify-evenly items-center p-10">
      <nav class="flex justify-evenly items-center w-8/12 py-5">
        <RouterLink class="link" active-class="active" to="/">Paisy Leny</RouterLink>
        <RouterLink class="link" active-class="active" to="/paisyDeny">Paisy Deny</RouterLink>
        <RouterLink class="link" active-class="active" to="/CreateCustomer">New</RouterLink>
      </nav>
      <div class="flex justify-end items-center w-4/12 py-5">
        <input
          type="text"
          v-model="cust"
          @input="setCust"
          class="border-2 border-gray-100 w-72 h-0.125 rounded px-4 py-1"
          placeholder="Search Customer"
        />
      </div>
    </header>
  </main>
</template>
