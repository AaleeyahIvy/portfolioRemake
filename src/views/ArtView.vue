<template>
    <div id="app">
        <NavigationBar />
        <MyArtGalleryComponent />
        <FooterComponent />
    </div>
</template>
<script>
import MyArtGalleryComponent from '../components/base-components/MyArtGalleryComponent.vue'
import NavigationBar from '../components/base-components/NavigationBar.vue'
import FooterComponent from '../components/base-components/FooterComponent.vue'

export default {
    name: 'ArtView',
    computed: {
        route() {
            return this.$route.path
        }
    },
    components: {
        NavigationBar,
        MyArtGalleryComponent,
        FooterComponent
    }
}
</script>