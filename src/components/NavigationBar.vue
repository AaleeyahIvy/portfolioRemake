<template>
    <div>
        <p>My name is Aaleeyah Ivy-Kilgore</p>
        <b-nav>
            <b-nav-item class="col-sm-12 col-lg-6 col-xl-4"><a href="/portfolio/src/components/">Home</a></b-nav-item>
            <b-nav-item><a>Projects</a></b-nav-item>
            <b-nav-item><a>Art</a></b-nav-item>
            <b-nav-item><a>Blog</a></b-nav-item>
            <b-nav-item><a>Contact</a></b-nav-item>
            <b-nav-item><a>Resume</a></b-nav-item>
        </b-nav>
        <p>{{ aboutpage }}</p>
    </div>
</template>
<script>
export default {
    name: 'NavigationBar',
    data() {
        return {
            aboutpage: 'This is the Navigation Bar'
        }
    }
}
</script>