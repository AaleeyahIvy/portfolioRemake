<template>
    <div id="app">
        <NavigationBar />
        <MyProjectsComponent />
        <FooterComponent />
    </div>
</template>
<script>
import MyProjectsComponent from '@/components/MyProjectsComponent.vue'
import NavigationBar from '@/components/base-components/NavigationBar.vue'
import FooterComponent from '@/components/base-components/FooterComponent.vue'

export default {
    name: 'ProjectsView',
    computed: {
        route() {
            return this.$route.path
        }
    },
    components: {
        NavigationBar,
        MyProjectsComponent,
        FooterComponent
    }
}
</script>