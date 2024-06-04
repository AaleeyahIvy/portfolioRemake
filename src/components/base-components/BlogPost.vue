<template>
<div>
    <div class="blog-post-holder col-10" v-if="post">
        <div class="blog-post">
            <h1>{{ post.title }}</h1>
            <img :src="post.image" alt="Post image">
            <hr>
            <div class="blog-content">{{ post.content }}</div>
        </div>
    </div>
</div>
</template>

<script>
import posts from '@/blog/posts.json';

export default {
    data() {
        return {
            postId: this.$route.params.id,
        };
    },
    computed: {
        post() {
            return posts.posts.find((post) => post.id == this.postId);
            //this is a lifecycle hook that runs when the component is created
        },
    },
};
</script>
<style>
img {
    width: 500px;
    height: 500px;
}
.blog-post{
    margin: 10px;
    padding: 10px;
    display: block;
    background: var(--main-white-color);
    border: #171616 2px solid;
    border-radius: 10px;
    }
.blog-content {
    text-wrap: balance;
    color: var(--main-text-color);
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
}
.blog-post-holder {
    margin: auto;
    padding: 10px;
    display: block;
    justify-content: space-between;
    align-items: start;
    background: var(--main-white-color);
    border: #171616 2px solid;
} 
</style>;