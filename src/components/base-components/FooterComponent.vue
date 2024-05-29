<template>
    <div class="footer">
        <div class="message">
            <span class="text-wrapper">
                <span class="letters">{{appreciationMessage}}</span>
            </span>
        </div>
        <div>
                <p class="copyrightTag">{{ copyrightMessage }}</p>
            </div>
    </div>
</template>
<script>
import anime from 'animejs/lib/anime.es.js';
export default {
    name: 'FooterComponent',
    data() {
        return {
            aboutpage: 'This is the Footer',
            copyrightMessage: '2024 Aaleeyah Ivy-Kilgore',
            appreciationMessage: 'My husband hosted this site for me. Thank you, my love!',
        }
    },
    mounted() {
        var textWrapper = document.querySelector('.message, .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({loop: true})
            .add({
                targets: '.message .letter',
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: (el, i) => 45 * (i+1)
            }).add({
            targets: '.message',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    }
}
</script>