<template>
    <div id="app">
        <NavigationBar />
        <NotFoundComponent />
        <FooterComponent />
    </div>
</template>
<script>
import NotFoundComponent from '../components/base-components/NotFoundComponent.vue'
import NavigationBar from '../components/base-components/NavigationBar.vue'
import FooterComponent from '../components/base-components/FooterComponent.vue'

export  default {
    name: 'ProjectsView',
    computed: {
        route() {
            return this.$route.path
        }
    },
    components: {
        NavigationBar,
        NotFoundComponent,
        FooterComponent
    }
}
</script>