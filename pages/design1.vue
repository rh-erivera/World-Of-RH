<template>
    <div>
        <div class="nav-background-images" id="bg"></div>
        <div class="container">
            <div class="quote">
                <p class="RH-Caslon">“Rather than looking to the past, we believe in destroying today’s reality to create tomorrow’s future. Only by taking risks can we explore our unlimited potential.”</p>
                <p class="Baron-Sans">—Gary Friedman</p>
            </div>
            <div>
                <img id="logo" src="/theWorldOfRH-Logo.svg" alt="">
            </div>
            <div class="nav list-view-items" id="nav">
                <a href="" id="item-1" @mouseover="stopSlideImage(1)" @mouseleave="startSlideImage(1)" style="color: black; border-bottom: 1px #ccc solid">collections</a>
                <a href="" id="item-2" @mouseover="stopSlideImage(2)" @mouseleave="startSlideImage(2)">sourcebooks</a>
                <a href="" id="item-3" @mouseover="stopSlideImage(3)" @mouseleave="startSlideImage(3)">design services</a>
                <a href="" id="item-4" @mouseover="stopSlideImage(4)" @mouseleave="startSlideImage(4)">galleries</a>
                <a href="" id="item-5" @mouseover="stopSlideImage(5)" @mouseleave="startSlideImage(5)">restaurants</a>
                <a href="" id="item-6" @mouseover="stopSlideImage(6)" @mouseleave="startSlideImage(6)">residences</a>
                <a href="" id="item-7" @mouseover="stopSlideImage(7)" @mouseleave="startSlideImage(7)">guesthouses</a>
                <a href="" id="item-8" @mouseover="stopSlideImage(8)" @mouseleave="startSlideImage(8)">planes</a><br>
                <a href="" id="item-9" @mouseover="stopSlideImage(9)" @mouseleave="startSlideImage(9)">yachts</a>
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
        this.hideItemElement = document.getElementById('item-1')
        this.showItemElement = document.getElementById('item-1')
        this.showBg = document.getElementById('bg')
        setTimeout(()=> {
            document.getElementById('logo').style.opacity = 1
        }, 10000)
        setTimeout(()=> {
            document.getElementById('nav').style.opacity = 1
        }, 11000)
        this.startSlideShowInterval = setInterval(this.startSlideShow, 15000)
    },
    methods: {
        startSlideShow() {
            clearInterval(this.startSlideShowInterval)
            this.showBg.style.opacity = 1;
            this.interval = setInterval(this.slideshow, 4000)
        },
        slideshow() {
            if (this.i == 1) {
                this.hideItemElement = document.getElementById('item-'+(this.i+8))
                this.showItemElement = document.getElementById('item-'+(this.i))
            } else {
                this.hideItemElement = document.getElementById('item-'+(this.i-1))
                this.showItemElement = document.getElementById('item-'+(this.i))
            }
            this.showBg.style.backgroundImage = 'url(\'/design1/01_bg_'+this.i+'.jpg\')';
            this.hideItemElement.style.borderBottom = 'transparent'
            this.showItemElement.style.borderBottom = '1px solid #ccc'
            if (this.i == 9) {
                this.i = 1
            } else {
                this.i++
            }
        },
        stopSlideImage(i) {
            clearInterval(this.interval)
            this.showItemElement.style.borderBottom = 'transparent'
            document.getElementById('item-'+i).style.borderBottom = '1px solid #ccc';
            this.showBg.style.backgroundImage = 'url(\'/design1/01_bg_'+i+'.jpg\')';
        },
        startSlideImage(i) {
            document.getElementById('item-'+i).style.borderBottom = 'transparent';
            this.showItemElement.style.borderBottom = '1px solid #ccc'
            if (this.i == 1) {
                this.showBg.style.backgroundImage = 'url(\'/design1/01_bg_'+(this.i)+'.jpg\')';
            } else {
                this.showBg.style.backgroundImage = 'url(\'/design1/01_bg_'+(this.i-1)+'.jpg\')';
            }
            this.interval = setInterval(this.slideshow, 4000)
        }
  }
}
</script>

<style>
.container {
    height: 90vh;
    margin: 0 auto;
    max-width: 1490px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}
.quote {
    animation: fadeInOut 10s ease-in-out;
    opacity: 0;
    position: absolute;
    max-width: 1490px;
    bottom: 38%;
    padding: 0 12%;
}
.RH-Caslon {
    color: #333333;
    font-family: 'CaslonRH-Superfine', sans-serif;
    font-size: 28pt;
    line-height: 23pt;
    letter-spacing: .02em;
    text-transform: uppercase;
    text-align: center;
}
.Baron-Sans {
    color: #333333;
    font-family: 'BaronSans-Thin', sans-serif;
    font-size: 10pt;
    line-height: 23pt;
    letter-spacing: .05em;
    text-transform: uppercase;
    text-align: right;
    padding: 10px 0 0 0;
}
#logo {
    transition: opacity 1.75s ease-out, top 300ms ease-out;
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 13.5%;
    width: 75px;
}

.nav {
    transition: opacity 2s ease-in;
    opacity: 0;
    text-align: center;
    width: 150px;
    padding-bottom: 11%;
    z-index: 1;
}
.nav a {
    font-family: 'BaronSans-Thin', sans-serif;
    font-size: 10pt;
    line-height: 24pt;
    letter-spacing: .2em;
    text-transform: uppercase;
    text-align: center;
    color: black;
    position:relative;
    transition: 0.5s;
    border-bottom: transparent;
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
    border-bottom: 1px solid #ccc;
}

.nav-background-images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('/design1/01_bg_1.jpg');
    opacity: 0;
    background-position: center;
    background-size: cover;
    transition: background-image 750ms ease-in, opacity 750ms ease-in;
    -webkit-transition: background-image 750ms ease-in, opacity 750ms ease-in;
}
.list-view-items a {
  transition: color 750ms ease-in, border-bottom 750ms ease-in;
  -webkit-transition: color 750ms ease-in, border-bottom 750ms ease-in;
}

@media (min-width: 1025px) {
    .RH-Caslon {
        font-size: 55pt;
        line-height: 45pt;    
    }
    .Baron-Sans {
        font-size: 20pt;
        line-height: 45pt;
    }
    .nav {
        width: 275px;
    }
    .nav a {
        font-size: 20pt;
        line-height: 48pt;
    }
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
</style>
