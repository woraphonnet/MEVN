<template>
  <div class="container">
    <Header msg="CREATE EMPLOYEE"/>
    <Table />
  </div>
</template>

<script>
import Table from './components/Table.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Table,
    Header
  }
}
</script>

<style>
.container{
}
</style>
