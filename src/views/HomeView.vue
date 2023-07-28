<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { useCustomerStore } from '../stores/customer.js'
import appHeader from '../components/app-header.vue'
import { API } from '../APIs/GetRequests.js'
const { getCustomer, getCustomers } = useCustomerStore()
const persons = ref()
const filteredData = ref()
const getData = async () => {
  await API.getPersons()
    .then(() => {
      persons.value = getCustomers()
    })
    .catch((err) => console.error(err))
}
const getCust = () => {
  const customer = getCustomer()
  filteredData.value = persons.value.filter((person) => {
    return (
      person.phone.includes(customer) || person.name.toLowerCase().includes(customer.toLowerCase())
    )
  })
}

onMounted(() => getData().then(() => getCust()))
onUpdated(() => console.log('updated : ', persons.value))
</script>

<template>
  <main class="flex flex-col">
    <app-header :getCust="getCust" />
    <ol class="list-decimal mt-5">
      <li
        v-for="person in filteredData"
        :key="person.name + person.phone"
        class="flex flex-row justify-around pl-10 items-center border-b-2 border-b-gray-200 hover:bg-sky-400"
      >
        <h2 class="text-lg font-medium text-gray-900 w-3/12">{{ person.name }}</h2>
        <h4 class="text-sm font-medium text-gray-900 w-3/12">{{ person.phone }}</h4>
        <h3 class="text-sm font-medium text-gray-900 w-3/12">Rs. {{ person.id }}</h3>
        <span class="w-3/12">
          <button class="btn w-4/12" id="edit" @click="open = true">Edit</button>
          <button class="btn w-4/12" id="delete">Delete</button>
        </span>
      </li>
    </ol>
  </main>
</template>
<style>
#edit {
  background-color: orange;
}
#delete {
  background-color: red;
}
</style>
