<template>
    <div id="app">
        <NavigationBar />
        <MyResumeComponent />
        <FooterComponent />
    </div>
</template>
<script>
import MyResumeComponent from '@/components/base-components/MyResumeComponent.vue'
import NavigationBar from '@/components/base-components/NavigationBar.vue'
import FooterComponent from '@/components/base-components/FooterComponent.vue'

export default {
    name: 'ResumeView',
    computed: {
        route() {
            return this.$route.path
        }
    },
    components: {
        NavigationBar,
        MyResumeComponent,
        FooterComponent
    }
}
</script>