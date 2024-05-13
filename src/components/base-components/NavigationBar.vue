<template>
    <div>
        <b-nav>
            <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/projects">Projects</router-link></b-nav-item>
            <b-nav-item><router-link to="/art-gallery">Art</router-link></b-nav-item>
            <b-nav-item><router-link to="/blog">Blog</router-link></b-nav-item>
            <b-nav-item><router-link to="/contact">Contact</router-link></b-nav-item>
            <b-nav-item><router-link to="/resume">Resume</router-link></b-nav-item>
        </b-nav>
    </div>
</template>
<script>
export default {
    name: 'NavigationBar',
    data() {
        return {

            }
    }
}
</script>