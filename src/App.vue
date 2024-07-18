<template>
  <div id="app">
    <!-- Main application container for the VehicleForm component -->
    <VehicleForm />
  </div>
</template>

<script>
import VehicleForm from './components/VehicleForm.vue'

export default {
  name: 'App',

  // Register components used in this view
  components: {
    VehicleForm
  }
}
</script>

<style>
/* css for the app view */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>