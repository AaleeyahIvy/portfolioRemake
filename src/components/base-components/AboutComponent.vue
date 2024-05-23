<template>
    <div class="text-box col-9">
        <div class="aaleeyah-image"></div>
        <h1>{{ header }}</h1>
        <p class="text col-12">
            A little about me - I have AuDHD and am fascinated with creating things. I'm currently working as an associate software engineer. <br><br>
            My career journey has been pretty interesting. I grew up wanting to be a storm chaser to draw and become an artist. Eventually, I realized that the field is super saturated and would be hard to break into because there are so many amazing illustrators out there. <br> I decided to get into creating Discord Bots in 2019-2020, ultimately failing and not getting too far in that region, I enjoyed doing that for a while and learning. This caused me to decide I would go to school for IT and computer science. <br><br>
            I graduated high school in 2020 and went straight to college pursuing an associate in computer programming. During college, the pandemic was in full swing and it got super boring staying indoors constantly, so I created a jewelry company called - CLAYDHD. It's more of a variety company now, specializing in web design, jewelry, and cute accessories. <br><br>
            Eventually, I would like to be more specialized in web design or web development. Anyway, some things I enjoy these days are, roller/ice skating, designing, playing competitive video games, and creating new products for my business. 
        </p>
        <div>
            <icon></icon>
            <icon></icon>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AboutComponent',
    data() {
        return {
            header: 'My name is Aaleeyah Ivy-Kilgore',
            aboutpage: 'This is the About page',
        }
    }
}
</script>