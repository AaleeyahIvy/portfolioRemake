<template>
    <div class="picture-box col-10">
        <h1>My Art Gallery</h1>
        <div class="row">
            <img :src="require('@/assets/images/blackafro.png')" class="picture" @click="showModal()">
            <img :src="require('@/assets/images/hawaii.png')" class="picture" @click="showModal()">
            <img :src="require('@/assets/images/colorstudy.png')" class="picture" @click="showModal()">
            <img :src="require('@/assets/images/idrc.png')" class="picture" @click="showModal()">
        </div>
        <div class="row">
            <img :src="require('@/assets/images/mondays.png')" class="picture" @click="showModal()">
            <img :src="require('@/assets/images/newjeans.png')" class="picture" @click="showModal()">
            <img :src="require('@/assets/images/meowkitty.png')" class="picture" @click="showModal()">
            <img :src="require('@/assets/images/ontopoftheworld.png')" class="picture" @click="showModal()">
        </div>
        <div class="row">
            <img :src="require('@/assets/images/asianschoolgirl.png')" class="picture" @click="showModal()">
            <img :src="require('@/assets/images/funday.png')" class="picture" @click="showModal()">
            <img :src="require('@/assets/images/redphone.png')" class="picture" @click="showModal()">
            <img :src="require('@/assets/images/claydhdLogo.png')" class="picture" @click="showModal()">
        </div>
        <button v-if="showModal()" @click="showModal()">Close</button>
    </div>
</template>
<script>
import anime from 'animejs/lib/anime.es';

    
export default {
    name: 'MyArtGalleryComponent',
    data() {
        return {
            aboutpage: 'This is the Art Gallery page',
        }
    },
    methods: {
        showModal() {
            this.showModal = true;
            anime({
                targets: this,
                scale: 1.5,
                duration: 1000,
                easing: 'linear'
            });
        }
    }
}
</script>
<style>

.picture-box {
    margin: auto;
    padding: 20px;
    display: block;
    background: var(--main-white-color);
    border: #171616 2px solid;
}
.row {
    display: flex;
    justify-content: center;
    align-items: center;
}
.picture {
    height: 295px;
    width: 295px;
    display: block;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 10px;
    border: #171616 2px solid;
    border-radius: 10px;
}
</style>