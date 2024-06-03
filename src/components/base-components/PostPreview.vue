<template>
    <div class="post">
        <img :src="post.image" alt="post.title" class="post-image"/>
        <h1>{{ post.title }}</h1>
        <p class="excerpt">{{ post.excerpt }}</p>
        <div>
            <RouterLink class="router-link" :to="'/blog/' + post.id">Go to post</RouterLink>
        </div>


        <!--<img :src="post.image" alt="post.title" />
        <h1>{{ post.title }}</h1>
        <p class="excerpt">{{ post.excerpt }}</p>
        <div>
            <RouterLink class="router-link" :to="'/blog/' + post.id">Go to post</RouterLink>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'PostPreview',
    props: ['post'],
};
</script>
