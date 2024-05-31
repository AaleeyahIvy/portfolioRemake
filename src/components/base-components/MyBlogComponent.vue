<template>
    <div class="post-holder col-10">
        <div v-for="post in posts" :key="post.id" class="post">
            <img :src="post.image" alt="post.title" width="500" height="650" />
            <header>{{ post.title }}</header>
            <p class="content">{{ post.content }}</p>
            <div>
                <RouterLink :to="'/blog/' + post.id">Read More</RouterLink>
                
            </div>
        </div>  
    </div>
</template>
<script>
//ADD ROUTE TO ROUTER FOR BLOG POSTS :)
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
.content {
    text-wrap: balance;
    color: var(--main-text-color);
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
}
</style>