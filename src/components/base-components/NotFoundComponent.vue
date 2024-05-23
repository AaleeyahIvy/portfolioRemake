<template>
    <div>
        <p>{{ aboutpage }}</p>
    </div>
</template>
<script>
export default {
    name: 'NotFoundComponent',
    data() {
        return {
            aboutpage: 'This route does not exist. Please check the URL and try again.'
        }
    }
}
</script>