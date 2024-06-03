<template>
    <div class="post-holder col-10">
        <PostPreview v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<script>
import PostPreview from './PostPreview.vue';
import posts from "@/blog/posts.json"

export default {
    name: 'PostList',
    components: {
        PostPreview,
    },
    data() {
        return {
        posts: posts.posts,
        };
    },
};
</script>
