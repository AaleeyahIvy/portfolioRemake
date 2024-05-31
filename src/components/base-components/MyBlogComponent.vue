<template>
    <div class="post-holder col-10">
        <div v-for="post in posts" :key="post.id" class="post">
            <img :src="post.image" alt="post.title" />
            <header>{{ post.title }}</header>
            <p>{{ post.content }}</p>
            <div>
                <a :href="post.link">Read More</a>
            </div>
        </div>  
    </div>
</template>
<script>
import posts from "@/blog/posts.json"
export default {
    name: 'MyBlogComponent',
    data() {
        return {
            aboutpage: 'This is the Blog page',
            posts: posts.posts
        }
    }
}
</script>
<style>
.post-holder {
    margin: auto;
    padding: 10px;
    display: block;
    justify-content: space-between;
    align-items: start;
    background: var(--main-white-color);
    border: #171616 2px solid;
} 
.post{
    margin: 10px;
    padding: 10px;
    display: block;
    background: var(--main-white-color);
    border: #171616 2px solid;
}
</style>