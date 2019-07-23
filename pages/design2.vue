<template>
    <div class="container">
        <div class="nav">
            <a href="" @mouseenter="showShop" @mouseleave="hideShop">SHOP</a>
            <a href="" @mouseenter="showGalleries" @mouseleave="hideGalleries">GALLERIES</a>
            <a href="">RESTAURANTS</a>
            <a href="">DESIGN SERVICES</a>
            <img id="logo" src="/RH-Logo-Black.svg" alt="">
            <a href="">PLANES</a>
            <a href="">YACHT</a>
            <a href="">RESIDENCES</a>
            <a href="">GUEST HOUSES</a>
        </div>
        <div id="shop-dropdown" style="opacity: 0">
            <a href="">RH INTERIORS</a><br>
            <a href="">RH MODERN</a><br>
            <a href="">RH BABY & CHILD</a><br>
            <a href="">RH TEEN</a><br>
            <a href="">RH BEACH HOUSE</a><br>
            <a href="">RH SKI HOUSE</a><br>
            <a href="">SOURCEBOOKS</a>
        </div>
        <div id="galleries-dropdown" style="opacity: 0"> 
            <a href="">RH NEW YORK</a><br>
            <a href="">RH CHICAGO</a><br>
            <a href="">RH WEST PALM</a><br>
            <a href="">RH BOSTON</a><br>
            <a href="">RH GREENWICH</a><br>
            <a href="">RH LOS ANGELES</a><br>
            <a href="">RH WEST HOLLYWOOD</a><br>
            <a href="">RH YOUNTVILLE</a><br>
            <a href="">RH NASHVILLE</a><br>
            <a href="">RH TORONTO</a><br>
            <a href="">RH PORTLAND</a><br>
            <a href="">RH LONDON</a><br>
            <a href="">RH SYDNEY</a><br>
            <a href="">RH PARIS</a><br>
            <a style="padding-top: 10px;" href="">ALL GALLERIES &#8594;</a><br>
        </div>
        <div class="nav-background-images" id="bg"></div>
        <p class="quotes" id="shop-quote" style="opacity: 0">there are pieces that furnish a<br> home, and those that define it.</p>
        <p class="quotes" id="galleries-quote" style="opacity: 0">Inspiring spaces that blur the lines<br> between residential and retail</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            i: 2,
            showBg: {},
            // startSlideShowInterval: {}
        }
    },
    mounted() {
        this.showBg = document.getElementById('bg')
        setInterval(this.slideshow, 4000)
    },
    methods: {
        // startSlideShow() {
        //     clearInterval(this.startSlideShowInterval)
        //     this.showBg.style.opacity = 1;
        //     setInterval(this.slideshow, 4000)
        // },
        slideshow() {
            this.showBg.style.backgroundImage = 'url(\'/design9/09_bg_0'+this.i+'.jpg\')';
            if (this.i == 8) {
                this.i = 1
            } else {
                this.i++
            }
        },
        showShop() {
            document.getElementById('bg').style.opacity = 0;
            document.getElementById('shop-dropdown').style.opacity = 1;
            document.getElementById('shop-quote').style.opacity = 1;
        },
        hideShop() {
            document.getElementById('bg').style.opacity = 1;
            document.getElementById('shop-dropdown').style.opacity = 0;
            document.getElementById('shop-quote').style.opacity = 0;
        },
        showGalleries() {
            document.getElementById('bg').style.opacity = 0;
            document.getElementById('galleries-dropdown').style.opacity = 1;
            document.getElementById('galleries-quote').style.opacity = 1;
        },
        hideGalleries() {
            document.getElementById('bg').style.opacity = 1;
            document.getElementById('galleries-dropdown').style.opacity = 0;
            document.getElementById('galleries-quote').style.opacity = 0;
        }
  }
}
</script>

<style>
.container {
    height: 665px;
    animation: fadeIn 2s ease-in;
    color: #333;
}
#logo {
    width: 75px;
    margin: 0 20px;
}

.nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    padding: 0 20px;
}

.nav a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12px;
    font-size: 7.2pt;
    line-height: 21.6pt;
    letter-spacing: .1em;
    font-family: 'BaronSans-Thin', sans-serif;
    margin: 0 20px;
}

#shop-dropdown, #galleries-dropdown {
    position: absolute;
    transition: opacity 750ms ease-in;
    top: 80px;
    font-size: 7.2pt;
    line-height: 18pt;
    letter-spacing: .1em;
    font-family: 'BaronSans-Thin', sans-serif;
}

#shop-dropdown {
    left: 78px;
}

#galleries-dropdown {
    left: 149px;
}


.quotes {
    position: absolute;
    text-transform: uppercase;
    bottom: 40px;
    font-family: 'CaslonRH-Superfine';
    font-size: 37.6pt;
    line-height: 31.8pt;
    left: 0;
    right: 0;
    text-align: center;
    transition: opacity 750ms ease-in;
}


.nav-background-images {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100vw;
    height: 565px;
    /* opacity: 0; */
    animation: fadeIn 2s ease-in;
    background-image: url('/design9/09_bg_01.jpg');
    background-position: center;
    background-size: cover;
    transition: background-image 750ms ease-in, opacity 750ms ease-in;
    -webkit-transition: background-image 750ms ease-in, opacity 750ms ease-in;
}

.nav a {
    transition: 0.5s;
    border-bottom: transparent;
    position: relative;
}
.nav a::before{
    width: 0%;
    height:100%;
    z-index: 3;
    content:'';
    position: absolute;
    bottom: -1px;
    box-sizing: border-box;
    transition: .5s;
 }
.nav a:hover::before {
    width: 100% !important;
    transition: .5s;
 }
.nav a::before {
    border-bottom: 1px solid #333;
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
