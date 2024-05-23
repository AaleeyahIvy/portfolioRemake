<template>
  <NavigationBar />
  <router-view />
</template>
<script>
//import HomeView from '@/views/HomeView'
import NavigationBar from './components/base-components/NavigationBar.vue';
export default {
  name: 'App',
  components: {
    NavigationBar,
  }
}
</script>