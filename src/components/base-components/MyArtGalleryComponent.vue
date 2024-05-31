<template>
    <div class="picture-box col-10">
        <h1>My Art Gallery</h1>
        <div class="row">
            <img :src="require('@/assets/images/blackafro.png')" class="picture" @click="showImage($event)">
            <img :src="require('@/assets/images/hawaii.png')" class="picture" @click="showImage($event)">
            <img :src="require('@/assets/images/colorstudy.png')" class="picture" @click="showImage($event)">
            <img :src="require('@/assets/images/idrc.png')" class="picture" @click="showImage($event)">
        </div>
        <div class="row">
            <img :src="require('@/assets/images/mondays.png')" class="picture" @click="showImage($event)">
            <img :src="require('@/assets/images/newjeans.png')" class="picture" @click="showImage($event)">
            <img :src="require('@/assets/images/meowkitty.png')" class="picture" @click="showImage($event)">
            <img :src="require('@/assets/images/ontopoftheworld.png')" class="picture" @click="showImage($event)">
        </div>
        <div class="row">
            <img :src="require('@/assets/images/asianschoolgirl.png')" class="picture" @click="showImage($event)">
            <img :src="require('@/assets/images/funday.png')" class="picture" @click="showImage($event)">
            <img :src="require('@/assets/images/redphone.png')" class="picture" @click="showImage($event)">
            <img :src="require('@/assets/images/claydhdLogo.png')" class="picture" @click="showImage($event)">
        </div>
    </div>
</template>
<script>
import anime from 'animejs/lib/anime.es';

    
export default {
    name: 'MyArtGalleryComponent',
    data() {
        return {
            aboutpage: 'This is the Art Gallery page',
            selectedImage: null,
        }
    },
    methods: {
        showImage(Event) {
            if(this.selectedImage === Event.target) {
        anime({
            targets: this.selectedImage,
            scale: 1,
            duration: 1000,
            easing: 'linear',
            zIndex: 1
        });
        this.selectedImage = null;
    } else {
        if(this.selectedImage) {
            anime({
                targets: this.selectedImage,
                scale: 1,
                duration: 1000,
                easing: 'linear',
                zIndex: 1
            });
        }
        this.selectedImage = Event.target;
        anime({
            targets: this.selectedImage,
            scale: 2,
            duration: 1000,
            easing: 'linear',
            zIndex: 2
        });
    }
        }
    }
}

/*
NOTES:
z-index is a CSS property that sets the stack order of specific elements.
An element with greater stack order is always in front of an element with a lower stack order.

Elements with a higher z-index are always in front of elements with a lower z-index, 
regardless of where they are in the DOM.

*/
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
    overflow: hidden;
}
</style>
