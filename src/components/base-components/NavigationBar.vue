<template>
    <div>
        <nav class="b-nav col-5">
            <div class="b-nav-item"><RouterLink to="/">Home</RouterLink></div>
            <div class="b-nav-item"><RouterLink to="/projects">Projects</RouterLink></div>
            <div class="b-nav-item"><RouterLink to="/art">Art</RouterLink></div>
            <div class="b-nav-item"><RouterLink to="/blog">Blog</RouterLink></div>
            <div class="b-nav-item"><RouterLink to="/contact">Contact</RouterLink></div>
            <div class="b-nav-item"><RouterLink to="/resume">Resume</RouterLink></div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'NavigationBar',
    data() {
        return {
            
        }
    }
}
</script>
<style>
/* NAVIGATION */
.b-nav {
  position: absolute;
  top: 0;
  left: 50%; 
  transform: translateX(-50%);
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding: 10px 10px;
  border-radius: 12px;
}

.b-nav .b-nav-item {
  list-style: none;
  margin: 0 12px;
}

.b-nav .b-nav-item a {
  position: relative;
  color: #333;
  font-size: 20px;
  font-weight: 500;
  padding: 6px 0;
  text-decoration: none;
}

.b-nav .b-nav-item a:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: var(--main-color); /* My main color */
  border-radius: 12px;
  transition: all 0.4s ease;
}

.b-nav .b-nav-item a:hover:before {
  width: 100%;
}

.b-nav .b-nav-item.center a:before {
  left: 50%;
  transform: translateX(-50%);
}

.b-nav .b-nav-item.upward a:before {
  width: 100%;
  bottom: -5px;
  opacity: 0;
}

.b-nav .b-nav-item.upward a:hover:before {
  bottom: 0px;
  opacity: 1;
}

.b-nav .b-nav-item.forward a:before {
  width: 100%;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}

.b-nav .b-nav-item.forward a:hover:before {
  transform: scaleX(1);
  transform-origin: left;
}
</style>