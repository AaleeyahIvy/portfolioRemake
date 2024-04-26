<template>
    <div id="app">
        <NavigationBar />
        <HeaderComponent />
        <HomeComponent />
        <AboutComponent />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import HomeComponent from '@/components/HomeComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    name: 'HomeView',
    components: {
        NavigationBar,
        HeaderComponent,
        HomeComponent,
        AboutComponent,
        FooterComponent
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