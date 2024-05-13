<template>
    <div id="app">
        <NavigationBar />
        <MyBlogComponent />
        <FooterComponent />
    </div>
</template>
<script>
import MyBlogComponent from '@/components/MyBlogComponent.vue'
import NavigationBar from '@/components/base-components/NavigationBar.vue'
import FooterComponent from '@/components/base-components/FooterComponent.vue'

export default {
    name: 'BlogView',
    computed: {
        route() {
            return this.$route.path
        }
    },
    components: {
        NavigationBar,
        MyBlogComponent,
        FooterComponent
    }
}
</script>