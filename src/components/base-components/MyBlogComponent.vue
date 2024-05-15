<template>
    <div>
        <p>{{ aboutpage }}</p>
    </div>
</template>
<script>
export default {
    name: 'MyBlogComponent',
    data() {
        return {
            aboutpage: 'This is the Blog page'
        }
    }
}
</script>