<template>
    <div>
        <div class="nav-background-images" id="bg"></div>
        <div class="container">
            <div class="nav">
                <p class="shop" @mouseover="showShop" @mouseleave="hideShop">SHOP</p>
                <img id="logo" src="/theWorldOfRH-Logo.svg" alt="">
                <p class="explore" @mouseover="showExplore" @mouseleave="hideExplore">EXPLORE</p>
            </div>
            <div id="shop-dropdown" class="nav-links shop-dropdown" @mouseover="showShop" @mouseleave="hideShop">
                <a href="">RH INTERIORS</a><br>
                <a href="">RH MODERN</a><br>
                <a href="">RH BABY & CHILD</a><br>
                <a href="">RH TEEN</a><br>
                <a href="">RH BEACH HOUSE</a><br>
                <a href="">RH SKI HOUSE</a><br>
                <a href="">SOURCEBOOKS</a>
            </div>
            <div id="explore-dropdown" class="nav-links explore-dropdown" @mouseover="showExplore" @mouseleave="hideExplore">
                <a href="">GALLERIES</a><br>
                <a href="">RESTAURANTS</a><br>
                <a href="">RESTAURANTS</a><br>
                <a href="">RESIDENCES</a><br>
                <a href="">GUEST HOUSES</a><br>
                <a href="">PLANES</a><br>
                <a href="">YATCHS</a><br>
                <a href="">DESIGN SERVICES</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            i: 2,
            showBg: {}
        }
    },
    mounted() {
        this.showBg = document.getElementById('bg')
        setInterval(this.slideshow, 4000)
    },
    methods: {
        slideshow() {
            this.showBg.style.backgroundImage = 'url(\'/design1/01_bg_'+this.i+'.jpg\')';
            if (this.i == 9) {
                this.i = 1
            } else {
                this.i++
            }
        },
        showShop() {
            document.getElementById('shop-dropdown').style.opacity = 1;
        },
        hideShop() {
            document.getElementById('shop-dropdown').style.opacity = 0;
        },
        showExplore() {
            document.getElementById('explore-dropdown').style.opacity = 1;
        },
        hideExplore() {
            document.getElementById('explore-dropdown').style.opacity = 0;
        }
  }
}
</script>

<style>
.container {
    height: 665px;
    margin: 0 auto;
    max-width: 1490px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.nav {
    font-family: 'CaslonRH-Superfine', sans-serif;
    font-size: 18pt;
    line-height: 24pt;
    letter-spacing: .04em;
    color: #333;
    animation: fadeIn 2s ease-in;
}

#logo {
    width: 85px;
    position: absolute;
    left: 0;
    right: 0;
    top: 41.5%;
    margin: auto;
}

.shop {
    position: absolute;
    left: 20%;
    top: 46%;
}

.explore {
    position: absolute;
    right: 20%;
    top: 46%;
}

.nav-links {
    font-family: 'BaronSans-Thin', sans-serif;
    font-size: 9pt;
    line-height: 18pt;
    letter-spacing: .07em;
    color: #333;
}
.shop-dropdown {
    position: absolute;
    opacity: 0;
    transition: opacity 750ms ease-in;
    left: 20%;
    top: 52.5%;
}
.explore-dropdown {
    position: absolute;
    opacity: 0;
    transition: opacity 750ms ease-in;
    right: 20%;
    top: 52.5%;
}
.nav p {
    /* position:relative; */
    transition: 0.5s;
    border-bottom: transparent;
}
.nav p::before{
    width: 0%;
    height:100%;
    z-index: 3;
    content:'';
    position: absolute;
    bottom: -1px;
    box-sizing: border-box;
    transition: .5s;
 }
.nav p:hover::before {
    width: 100% !important;
    transition: .5s;
 }
.nav p::before {
    border-bottom: 1px solid #333;
}
.nav-background-images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-image: url('/design1/01_bg_1.jpg');
    background-position: center;
    background-size: cover;
    animation: fadeIn 2s ease-in;
    transition: background-image 750ms ease-in, opacity 750ms ease-in;
    -webkit-transition: background-image 750ms ease-in, opacity 750ms ease-in;
}
@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
@-webkit-keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
</style>
