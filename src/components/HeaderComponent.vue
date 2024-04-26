<template>
    <div>
        <h1>Header</h1>
        <p>My name is Aaleeyah Ivy-Kilgore!</p>
        <p>{{ aboutpage }}</p>
    </div>
</template>
<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            aboutpage: 'This is the Header'
        }
    }
}
</script>