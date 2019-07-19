<template>
    <div>
        <div class="nav-background-images" id="bg"></div>
        <div class="container-design3">
            <div id="logo">
                <img id="logo-img" src="/theWorldOfRH-Logo.svg" alt="">
            </div>
            <div class="nav list-view-items">
                <a href="" id="item-1" @mouseover="stopSlideImage(1)" @mouseleave="startSlideImage(1)">collections</a>
                <a href="" id="item-2" @mouseover="stopSlideImage(2)" @mouseleave="startSlideImage(2)">source books</a>
                <a href="" id="item-3" @mouseover="stopSlideImage(3)" @mouseleave="startSlideImage(3)">galleries</a>
                <a href="" id="item-4" @mouseover="stopSlideImage(4)" @mouseleave="startSlideImage(4)">restaurants</a>
                <a href="" id="item-5" @mouseover="stopSlideImage(5)" @mouseleave="startSlideImage(5)">guesthouses</a>
                <a href="" id="item-6" @mouseover="stopSlideImage(6)" @mouseleave="startSlideImage(6)">residences</a>
                <a href="" id="item-7" @mouseover="stopSlideImage(7)" @mouseleave="startSlideImage(7)">design services</a>
                <a href="" id="item-8" @mouseover="stopSlideImage(8)" @mouseleave="startSlideImage(8)">planes</a>
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
        this.startSlideShowInterval = setInterval(this.startSlideShow, 4000)
    },
    methods: {
        startSlideShow() {
            clearInterval(this.startSlideShowInterval)
            var navItems = document.getElementsByClassName('nav');
            for (var i = 0; i < navItems.length; i++) {
                navItems[i].style.color = '#999999';
            }
            document.getElementById('logo-img').src = '/theWorldOfRH-Logo-White.svg'
            document.getElementById('item-1').style.color = 'white';
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
            this.showBg.style.backgroundImage = 'url(\'/bg-'+this.i+'.jpg\')';
            this.hideItemElement.style.color = '#999999'
            this.showItemElement.style.color = 'white'
            if (this.i == 9) {
                this.i = 1
            } else {
                this.i++
            }
        },
        stopSlideImage(i) {
            clearInterval(this.interval)
            this.showItemElement.style.color = '#999999'
            document.getElementById('item-'+i).style.color = 'white';
            this.showBg.style.backgroundImage = 'url(\'/bg-'+i+'.jpg\')';
        },
        startSlideImage(i) {
            document.getElementById('item-'+i).style.color = '#999999';
            this.showItemElement.style.color = 'white'
            if (this.i == 1) {
                this.showBg.style.backgroundImage = 'url(\'/bg-'+(this.i)+'.jpg\')';
            } else { 
                this.showBg.style.backgroundImage = 'url(\'/bg-'+(this.i-1)+'.jpg\')';
            }
            this.interval = setInterval(this.slideshow, 4000)
        }
  }
}
</script>

<style>
.container-design3 {
    height: 100vh;
    display: flex;
}
#logo {
    z-index: 1;
    animation: fadeIn 2s ease-in;
    max-width: 100px;
    display: flex;
    margin-left: 50px;
}

.nav {
    animation: fadeIn 2s ease-in;
    z-index: 1;
    width: 71%;
    font-family: 'CaslonRH-Superfine', sans-serif;
    text-transform: uppercase;
    font-size: 123.64pt;
    line-height: 89.92pt;
    letter-spacing: -.02em;
    color: #333;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    height: 100vh;
    overflow-y: auto;
}
.nav a {
    /* font-family: 'CaslonRH-ThinItalic', sans-serif;
    font-size: 36pt;
    line-height: 36pt; */
}

.nav-background-images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('/bg-1.jpg');
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

@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
@-webkit-keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
</style>
