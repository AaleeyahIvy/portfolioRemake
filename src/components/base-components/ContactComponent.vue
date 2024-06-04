<template>
    <div class="contact-box col-6">
        <div class="form-box">
            <form class="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">
                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div class="info-box">
            <div class="contact-info" >
                <img :src="require('@/assets/images/HappyAaleeyah1.jpg')" alt="Aaleeyah Ivy-Kilgore">
                <p>Email: <a href="mailto:samanthastar87@gmail.com">samanthastar87@gmail.com</a></p>
                <p>Phone: 513-376-5017</p>
                <p>Lives In Cincinnati, OH</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ContactComponent',
    data() {
        return {
            aboutpage: 'This is the Contact page'
        }
    }
}
</script>
<style>
.contact-box {
    margin: auto;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    background: var(--main-white-color);
    border: #171616 2px solid;
}
.form-box {
    margin: 10px;
    padding: 10px;
    display: block;
    background: var(--main-white-color);
}
.info-box {
    margin: 10px;
    padding: 10px;
    display: block;
    background: var(--main-white-color);
}
.contact-form {
    width: 100%;
    display: block;
    margin: 0 10px;
    border: #171616 2px solid;
}
.contact-info {
    flex: 1;
    display: block;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    padding: 10px;
    border: #171616 2px solid;
}
label { 
    display: block;
    justify-content: center;
    align-items: center;
    margin: 10px;
    font-size: 1.2rem;
}
input {
    display: block;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 10px;
}
textarea {
    display: block;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 10px;
}
button {
    display: block;
    justify-content: center;
    align-items: center;
    margin: 10px;
    font-size: 1.2rem;
}

</style>