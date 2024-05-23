<template>
    <div>
        <nav class="b-nav col-5">
            <div class="b-nav-item"><RouterLink to="/">Home</RouterLink></div>
            <div class="b-nav-item"><RouterLink to="/projects">Projects</RouterLink></div>
            <div class="b-nav-item"><RouterLink to="/art">Art</RouterLink></div>
            <div class="b-nav-item"><RouterLink to="/blog">Blog</RouterLink></div>
            <div class="b-nav-item"><RouterLink to="/contact">Contact</RouterLink></div>
            <div class="b-nav-item"><RouterLink to="/resume">Resume</RouterLink></div>
        </nav>
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