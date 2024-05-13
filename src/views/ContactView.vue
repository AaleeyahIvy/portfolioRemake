<template>
    <div id="app">
        <NavigationBar />
        <ContactComponent />
        <FooterComponent />
    </div>
</template>
<script>
import ContactComponent from '@/components/base-components/ContactComponent.vue'
import NavigationBar from '@/components/base-components/NavigationBar.vue'
import FooterComponent from '@/components/base-components/FooterComponent.vue'

export  default {
    name: 'ContactView',
    computed: {
        route() {
            return this.$route.path
        }
    },
    components: {
        NavigationBar,
        ContactComponent,
        FooterComponent
    }
}
</script>