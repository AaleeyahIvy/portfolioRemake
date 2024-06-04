<template>
    <div class="search-bar">
       <input type="text" v-model="search" placeholder="Search posts" class="search-bar" />
    </div>
    <div class="post-holder col-10">
        <PostPreview v-for="post in filteredPosts" :key="post.id" :post="post" />
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
            search: "",
        };
    },
    computed: {
        filteredPosts() {
            if (!this.search) {
                return this.posts;
            }
            return this.posts.filter((post) => {
                return post.title.toLowerCase().includes(this.search.toLowerCase());
            });
        },
    },
};
</script>
<style>
.search-bar {
    display: flex;
    justify-content: center;
    margin: 10px;
}
.search-bar input {
    padding: 10px;
    margin-right: 10px;
    border-radius: 10px;
    border: 2px solid var(--main-color);
}
.search-bar button {
    padding: 10px;
    border-radius: 10px;
    border: 2px solid var(--main-color);
    background: var(--main-color);
    color: var(--main-white-color);
}
.search-bar button:hover {
    background: var(--main-white-color);
    color: var(--main-color);
}


/* NOTES */
/*
this.posts.filter((post) => {...}): 
This is using the filter method of JavaScript arrays. 
filter creates a new array with all elements that pass the test implemented by the provided function.
 In this case, it's creating a new array of posts where each post passes the test inside the curly braces {...}.

(post) => {...}: This is an arrow function that takes one argument, post. 
For each post in this.posts, this function will be called with post set to the current post.
*/

</style>

