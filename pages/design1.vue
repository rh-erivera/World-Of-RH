<template>
    <div>
        <div class="nav-background-images"></div>
        <div class="container">
            <div class="quote">
                <p class="RH-Caslon">“Rather than looking to the past, we believe in destroying today’s reality to create tomorrow’s future. Only by taking risks can we explore our unlimited potential.”</p>
                <p class="Baron-Sans">—Gary Friedman</p>
            </div>
            <div>
                <img id="logo" src="/theWorldOfRH-Logo.svg" alt="">
            </div>
            <div class="nav" id="nav">
                <a href="">collections<span class="spacer"> / </span></a><a href="">sourcebooks<span class="spacer"> / </span></a><a href="">design services</a>
                <a href="">galleries<span class="spacer"> / </span></a><a href="">restaurants<span class="spacer"> / </span></a><a href="">residences</a>
                <a href="">guesthouses<span class="spacer"> / </span></a><a href="">planes<span class="spacer"> / </span></a><a href=""> yachts</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        setTimeout(function() {
            document.getElementById('logo').style.opacity = 1;
            document.getElementById('logo').style.top = '22.5%';
        }, 10000)
        setTimeout(function() {
            document.getElementById('nav').style.opacity = 1;
        }, 12000)
    }
}
</script>

<style>
.container {
    height: 100vh;
    margin: 0 auto;
    max-width: 1490px;
    display: flex;
    align-items: center;
}
.quote {
    animation: fadeInOut 10s ease-in-out;
    opacity: 0;
}
.RH-Caslon {
    color: #333333;
    font-family: 'CaslonRH', sans-serif;
    font-size: 55pt;
    line-height: 45pt;
    letter-spacing: .02em;
    text-transform: uppercase;
    text-align: center;
}
.Baron-Sans {
    color: #333333;
    font-family: 'BaronSans-Thin', sans-serif;
    font-size: 20pt;
    line-height: 45pt;
    letter-spacing: .05em;
    text-transform: uppercase;
    text-align: right;
    padding: 10px 0 0 0;
}
#logo {
    /* animation: logo 20s ease-in; */
    transition: opacity 1.75s ease-out, top 300ms ease-out;
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 25%;
    max-width: 100px;
}

.nav {
    transition: opacity 2s ease-in;
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 45%;
    max-width: 950px;
    text-align: center;
}
.nav a {
    font-family: 'BaronSans-UltraThin', sans-serif;
    font-size: 25pt;
    line-height: 36pt;
    letter-spacing: .07em;
    text-transform: uppercase;
    text-align: center;
}
.spacer {
    padding: 0 5px;
}
@keyframes fadeInOut {
    0% {opacity: 0;}
    25% {opacity: 1;}
    75% {opacity: 1;}
    100% {opacity: 0;}
}
@-webkit-keyframes fadeInOut {
    0% {opacity: 0;}
    25% {opacity: 1;}
    75% {opacity: 1;}
    100% {opacity: 0;}
}
/* @keyframes logo {
    0% {opacity: 0;}
    50% {top: 42.5%; opacity: 1;}
    100% {top: 35%; opacity: 1;}
}
@-webkit-keyframes logo {
    0% {opacity: 0;}
    50% {top: 42.5%; opacity: 1;}
    100% {top: 35%; opacity: 1;}
} */
</style>
