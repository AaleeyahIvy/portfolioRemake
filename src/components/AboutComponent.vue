<template>
    <div>
        <h1>About</h1>
        <p>{{ introParagraph }}</p>
    </div>
</template>
<script>
export default {
    name: 'AboutComponent',
    data() {
        return {
            aboutpage: 'This is the About page',
            introParagraph: 'My name is Aaleeyah Ivy-Kilgore, I am what you call a Jack of All Trades. I currently work as an Associate Engineer doing frontend, and backend work. As hobbies I delve into illustration, web design, jewelry-making, competitive video gaming, and much more '
        }
    }
}
</script>