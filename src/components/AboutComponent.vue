<template>
    <div>
        <h1>About</h1>
        <p>{{aboutpage}}</p>
    </div>
</template>
<script>
 export default {
    name: 'AboutComponent',
    data() {
        return {
            aboutpage: 'This is the About page'
        }
    }
}
</script>