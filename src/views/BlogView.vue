<template>
    <div id="app">
        <NavigationBar />
        <PostList />
        <FooterComponent />
    </div>
</template>
<script>
import PostList from '../components/base-components/PostList.vue'
import NavigationBar from '../components/base-components/NavigationBar.vue'
import FooterComponent from '../components/base-components/FooterComponent.vue'

export default {
    name: 'BlogView',
    computed: {
        route() {
            return this.$route.path
        }
    },
    components: {
        NavigationBar,
        PostList,
        FooterComponent
    }
}
</script>