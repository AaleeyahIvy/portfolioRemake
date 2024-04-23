<template>
  <div id="app">
    <HeaderComponent/>
    <HomeComponent/>
    <AboutComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomeComponent,
    AboutComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
