<template>
  <div class="container">
    <Header msg="Saenruk EMPLOYEE" />
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
  .container {}
</style>