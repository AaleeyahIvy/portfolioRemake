<template>
    <div class="post">
        <img :src="blogImage" alt="image of current post" class="post-image"/>
        <h1>{{ post.title }}</h1>
        <h4 class="date">{{ post.date }}</h4>
        <p class="excerpt">{{ post.excerpt }}</p>
        <div>
            <RouterLink class="router-link" :to="'/blog/' + post.id">Go to post</RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostPreview',
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    computed: {
        blogImage() {
            return require(`@/assets/images/${this.post.image}`);
        },
    },
};
</script>
