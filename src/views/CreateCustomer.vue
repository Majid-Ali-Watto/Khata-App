<template>
  <header>
    <app-header />
  </header>
  <div>
    <h1>New customer</h1>
  </div>
</template>
<script>
import appHeader from '../components/app-header.vue'

export default {
  name: 'CreateCustomer',
  components: {
    appHeader
  }
}
</script>
