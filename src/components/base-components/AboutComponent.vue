<template>
    <div class="text-box col-10">
        <img :src="require('@/assets/images/HappyAaleeyah1.jpg')" alt="Aaleeyah Ivy-Kilgore" class="about-image">
        <h1>{{ header }}</h1>
        <p class="text col-12">
            A little about me - I have AuDHD and am fascinated with creating things. I'm currently working as an associate software engineer. <br><br>
            My career journey has been pretty interesting. I grew up wanting to be a storm chaser to draw and become an artist. Eventually, I realized that the field is super saturated and would be hard to break into because there are so many amazing illustrators out there. <br> I decided to get into creating Discord Bots in 2019-2020, ultimately failing and not getting too far in that region, I enjoyed doing that for a while and learning. This caused me to decide I would go to school for programming. <br><br>
            I graduated high school in 2020 and went straight to college pursuing an associate in computer programming. During college, the pandemic was in full swing and it got super boring staying indoors constantly, so I created a jewelry company called - CLAYDHD. It's more of a variety company now, specializing in web design, jewelry, and cute accessories. <br><br>
            Eventually, I would like to be more specialized in web design or web development. Anyway, some things I enjoy these days are, roller/ice skating, designing, playing competitive video games, and creating new products for my business. 
        </p>
        <div class="icons">
            <h1>My Socials:</h1>
            <a class="iconLink" href="https://github.com/AaleeyahIvy" target="_blank"><div id="iconGH" class="icon">Github</div></a>
            <a class="iconLink" href="https://www.linkedin.com/in/aaleeyah-ivy-kilgore-823818204/" target="_blank"><div id="iconLI" class="icon">LinkedIn</div></a>
            <a class="iconLink" href="https://www.instagram.com/aalee_ivy16/" target="_blank"><div id="iconIG" class="icon">Instagram</div></a>
            <a class="iconLink" href="https://x.com/AaleeyahIvy" target="_blank"><div id="iconTW" class="icon">Twitter</div></a>
            <a class="iconLink" href="https://www.tiktok.com/@.claydhd" target="_blank"><div id="iconTT" class="icon">TikTok</div></a>
            <a class="iconLink" href="https://www.etsy.com/shop/claydhd" target="_blank"><div id="iconET" class="icon">Esty</div></a>
        </div>
    </div>
</template>
<script>
import anime from 'animejs/lib/anime.es.js';

// unless youre using images as a module, you can just require them in the template
export default {
    name: 'AboutComponent',
    data() {
        return {
            header: 'My name is Aaleeyah Ivy-Kilgore',
            aboutpage: 'This is the About page',
        }
    },
    mounted() {
        // create animation to scale button when hovering.
        var icons = document.getElementsByClassName('icon');
        for(var i = 0; i < icons.length; i++){
            icons[i].addEventListener('mouseover', function(){
                anime.remove(this);
                anime({
                    targets: this,
                    translateY: [0, -35],
                    scale: 1.5,
                    duration: 500,
                    easing: 'linear'
                });
            });
            icons[i].addEventListener('mouseout', function(){
                anime.remove(this);
                anime({
                    targets: this,
                    translateY: [-35, 0],
                    scale: 1,
                    duration: 1000,
                    easing: 'linear'
                });
            });
        }
    }
}
</script>
<style>
.about-image{
  height: 25%;
  width: 25%;
  border-radius: 100px;
  
}
.text-box {
  margin: auto;
  padding: 20px;
  display: block;
  background: var(--main-white-color);
  border: #171616 2px solid;
}
.text {
  text-wrap: balance;
  color: var(--main-text-color);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
}
/* ICONS */
.icons{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
#iconIG{
  width: auto;
  background-color: #d76baa;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#iconLI{
  width: auto;
  background-color: #2d89e6;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#iconGH{
  width: auto;
  background-color: #6a6a6a;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#iconTW{
  width: auto;
  background-color: #4ab8fd;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#iconET{
  width: auto;
  background-color: #f2924e;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#iconTT{
  width: auto;
  background-color: #7063eb;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
.iconLink {
  display: block;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--main-text-color);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;

}

</style>