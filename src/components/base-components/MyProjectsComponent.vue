<template>
    <div class="project-box col-10">
        <div v-for="project in projects" :key="project.title" class="project">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <img :src="project.image" alt="project image" class="project-image">
        </div>
        <div class="skills">
            <h1>My Skills:</h1>
            <div id="skillHTML" class="skill">Html</div>
            <div id="skillCSS" class="skill">Css</div>
            <div id="skillJS" class="skill">JavaScript</div>
            <div id="skillVUE" class="skill">Vue.js</div>
            <div id="skillNODE" class="skill">Node.js</div>
            <div id="skillPHP" class="skill">Php</div>
            <div id="skillSQL" class="skill">MySQL</div>
            <div id="skillFIG" class="skill">Figma</div>
            <div id="skillADOBE" class="skill">Adobe Illustrator</div>
            <div id="skillPRO" class="skill">Procreate</div>
            <div id="skillCANVA" class="skill">Canva</div>
        </div>
    </div>
</template>
<script>
import anime from 'animejs/lib/anime.es.js';
import portfolio from '@/assets/images/portfolio.png'
import yinyang from '@/assets/images/yinyang.png'
import github from '@/assets/images/github.png'

export default {
    name: 'MyProjectsComponent',
    data() {
        return {
            aboutpage: 'This is the Projects page',
            projects: [
                {
                    title: 'Legacy Portfolio',
                    description: 'This is the old portfolio, it was made with HTML, CSS, and pure JavaScript. It is hosted using NGINX and Docker containers',
                    image: portfolio
                },
                {
                    title: 'Yin Yang App',
                    description: 'A web app similar to messenger apps for planning with friends that have differing schedules. ',
                    image: yinyang
                },
                {
                    title: 'Github Repos',
                    description: 'Curated list of my school and personal projects.',
                    image: github
                }
            ],

        }
    },
    mounted(){
        var skills = document.getElementsByClassName('skill');
        for(var i = 0; i < skills.length; i++){
            skills[i].addEventListener('mouseover', function(){
                anime.remove(this);
                anime({
                    targets: this,
                    translateY: [0, -35],
                    scale: 1.5,
                    duration: 500,
                    easing: 'linear'
                });
            });
            skills[i].addEventListener('mouseout', function(){
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
/* SKILLS */
.skills{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
#skillHTML{
  width: auto;
  background-color: #fde379;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#skillCSS{
  width: auto;
  background-color: #f16529;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#skillJS{
  width: auto;
  background-color: #f0db4f;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#skillPHP{
  width: auto;
  background-color: #8993be;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#skillSQL{
  width: auto;
  background-color: #80f1c8;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#skillNODE{
  width: auto;
  background-color: #f16529;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#skillVUE{
  width: auto;
  background-color: #e48bff;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#skillFIG{
  width: auto;
  background-color: #dc8058;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#skillCANVA{
  width: auto;
  background-color: #3dcd57;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#skillADOBE{
  width: auto;
  background-color: #7777ff;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#skillHTML{
  width: auto;
  background-color: #c96379;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}
#skillPRO{
  width: auto;
  background-color: #8cff57;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
}

.project-box {
  margin: auto;
  padding: 20px;
  display: block;
  background: var(--main-white-color);
  border: #171616 2px solid;
}
.project{
  display: block;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border: #171616 2px solid;
  border-radius: 10px;
}
.project-image{
  width: 75%;
  height: 50%;
  border-radius: 25px;
  padding: 15px;
}

</style>