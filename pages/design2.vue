<template>
    <div style="background-color: black;">
        <div class="nav-background-images" id="bg"></div>
        <div class="container">
            <div id="logo">
                <img src="/RH-logo.svg" alt="">
            </div>
            <div class="nav list-view-items">
                <p>Our artisan <a href="" id="item-1" @mouseover="stopSlideImage(1)" @mouseleave="startSlideImage(1)">collections</a>, 
                inspiring <a href="" id="item-2" @mouseover="stopSlideImage(2)" @mouseleave="startSlideImage(2)">source books</a>,
                innovative <a href="" id="item-4" @mouseover="stopSlideImage(4)" @mouseleave="startSlideImage(4)">galleries</a>
                and world-class <a href="" id="item-5" @mouseover="stopSlideImage(5)" @mouseleave="startSlideImage(5)">restaurants</a>
                and wine experiences are are expressions of our taste, style and point of view.
                <a href="" id="item-3" @mouseover="stopSlideImage(3)" @mouseleave="startSlideImage(3)">rh Interior Design</a>
                – which includes private <a href="" id="item-8" @mouseover="stopSlideImage(8)" @mouseleave="startSlideImage(8)">planes</a>
                and <a href="" id="item-9" @mouseover="stopSlideImage(9)" @mouseleave="startSlideImage(9)"> yachts</a>
                – is North America’s leading design service. rh <a href="" id="item-6" @mouseover="stopSlideImage(6)" @mouseleave="startSlideImage(6)">residences</a>
                offers the most desirable residential properties, while <a href="" id="item-7" @mouseover="stopSlideImage(7)" @mouseleave="startSlideImage(7)">RH guest House</a>
                reimagines hospitality in the world’s most influential destinations. Join us on our journey.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            i: 2,
            hideItemElement: {},
            showItemElement: {},
            showBg: {},
            startSlideShowInterval: {},
            interval: null
        }
    },
    mounted() {
        this.showBg = document.getElementById('bg')
        this.startSlideShowInterval = setInterval(this.startSlideShow, 4000)
    },
    methods: {
        startSlideShow() {
            clearInterval(this.startSlideShowInterval)
            this.showBg.style.opacity = 1;
            this.interval = setInterval(this.slideshow, 4000)
        },
        slideshow() {
            this.showBg.style.backgroundImage = 'url(\'/design2/02_bg_'+this.i+'.jpg\')';
            if (this.i == 9) {
                this.i = 1
            } else {
                this.i++
            }
        },
        stopSlideImage(i) {
            clearInterval(this.interval)
            this.showBg.style.backgroundImage = 'url(\'/design2/02_bg_'+i+'.jpg\')';
        },
        startSlideImage(i) {
            if (this.i == 1) {
                this.showBg.style.backgroundImage = 'url(\'/design2/02_bg_'+(this.i)+'.jpg\')';
            } else { 
                this.showBg.style.backgroundImage = 'url(\'/design2/02_bg_'+(this.i-1)+'.jpg\')';
            }
            this.interval = setInterval(this.slideshow, 4000)
        }
  }
}
</script>

<style>
.container {
    height: 665px;
    margin: 0 auto;
    max-width: 1552px;
    display: flex;
    align-items: center;
}
#logo {
    animation: fadeIn 2s ease-in;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 5%;
    max-width: 100px;
}

.nav {
    animation: fadeIn 2s ease-in;
    padding: 60px 11.5% 0;
    z-index: 1;
    font-family: 'BaronSans-UltraThin', sans-serif;
    text-transform: uppercase;
    font-size: 12pt;
    line-height: 18pt;
    letter-spacing: .02em;
    text-align: justify;
    text-align-last: center;
    color: white;
}
.nav a {
    font-family: 'CaslonRH-ThinItalic', sans-serif;
    font-size: 18pt;
    line-height: 18pt;
}

.nav-background-images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-image: url('/design2/02_bg_1.jpg');
    opacity: 0;
    background-position: center;
    background-size: cover;
    transition: background-image 750ms ease-in, opacity 750ms ease-in;
    -webkit-transition: background-image 750ms ease-in, opacity 750ms ease-in;
}
.list-view-items a {
  transition: color 750ms ease-in;
  -webkit-transition: color 750ms ease-in;
}

.list-view-items a {
    position:relative;
    transition: 0.5s;
}

.list-view-items a::before{
    width: 0%;
    height:100%;
    z-index: 3;
    content:'';
    position: absolute;
    bottom: -1px;
    box-sizing: border-box;
    transition: .5s;
 }

.list-view-items a:hover::before {
    width: 100% !important;
    transition: .5s;
 }

.list-view-items a::before {
    border-bottom: 1px solid #FFFFFF;
}

@media (min-width: 1025px){
    .nav {
        font-size: 24pt;
        line-height: 36pt;
    }
    .nav a {
        font-size: 36pt;
        line-height: 36pt;
    }
};

@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
@-webkit-keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
</style>
