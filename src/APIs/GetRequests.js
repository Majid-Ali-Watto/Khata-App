import axios from 'axios'
import { useCustomerStore } from '../stores/customer.js'
const { setCustomers } = useCustomerStore()

export const API = {
  async getPersons() {
    console.log('get persons called')
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function (res) {
        console.log('get persons called', res.data)
        setCustomers(res.data)
      })
      .catch(function (err) {
        console.error(err)
      })
  }
}
