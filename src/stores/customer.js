import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCustomerStore = defineStore('customer', () => {
  const customer = ref('')
  const customers = ref([])
  function setCustomer(cust) {
    console.log('from store', cust)
    customer.value = cust
  }
  function setCustomers(custs) {
    customers.value = custs
  }
  function getCustomer() {
    return customer.value
  }
  function getCustomers() {
    return customers.value
  }
  return { getCustomer, setCustomer, getCustomers, setCustomers }
})
