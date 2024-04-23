<template>
    <div>
        <h1>Home</h1>
        <p>{{ aboutpage }}</p>
    </div>
</template>
<script>
export default {
    name: 'HomeComponent',
    data() {
        return {
            aboutpage: 'This is the Home page'
        }
    }
}
</script>