<template>
    <div class="container">
        <p class="copy" style="height: 119px; margin-top: 40px;">THE</p>
        <div @mouseover="stopSlideImage(1)" @mouseleave="startSlideImage(1)">
            <p class="copy" id="link-1">PRODUCTS</p>
            <div class="links" id="links-1">
                <a href="">COLLECTIONS</a><span class="divider"> / </span><a href="">SOURCEBOOKS</a><span class="divider"> / </span><a href="">DESIGN SERVICES</a>
            </div>
        </div>
        <div @mouseover="stopSlideImage(2)" @mouseleave="startSlideImage(2)">
            <p class="copy" id="link-2">PLACES &</p>
            <div class="links" id="links-2">
                <a href="">GALLERIES</a><span class="divider"> / </span><a href="">RESTAURANTS</a><span class="divider"> / </span><a href="">RESIDENCES</a>
            </div>
        </div>
        <div @mouseover="stopSlideImage(3)" @mouseleave="startSlideImage(3)">
            <p class="copy" id="link-3">SPACES OF</p>
            <div class="links" id="links-3"> 
                <a href="">GUESTHOUSES</a><span class="divider"> / </span><a href="">PLANES</a><span class="divider"> / </span><a href="">YATCHS</a>
            </div>
        </div>
        <img id="logo" src="/RH-Logo-Black.svg" alt="">
        <img id="logo2" src="/RH-Logo-Grey.svg" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            i: 2,
            hideItemElement: {},
            hideLinks: {},
            showItemElement: {},
            showLinks: {},
            startInterval: null,
            rotateInterval: null
        }
    },
    mounted() {
        this.hideItemElement = document.getElementById('link-1')
        this.hideLinks = document.getElementById('links-1')
        this.showItemElement = document.getElementById('link-1')
        this.showLinks = document.getElementById('links-1')
        this.startInterval = setInterval(this.startRotate, 2000)
    },
    methods: {
        startRotate () {
            clearInterval(this.startInterval)
            var copyItems = document.getElementsByClassName('copy')
            for (var i = 0; i < copyItems.length; i++) {
                copyItems[i].style.color = '#cccccc';
            }
            document.getElementById('logo').style.opacity = 0
            this.showItemElement.style.color = 'black';
            this.showLinks.style.opacity = 1;
            document.getElementById('logo2').style.opacity = 1
            this.rotateInterval = setInterval(this.rotate, 4000)
        },
        rotate() {
            if (this.i == 1) {
                this.hideItemElement = document.getElementById('link-'+(this.i+2))
                this.hideLinks = document.getElementById('links-'+(this.i+2))
                this.showItemElement = document.getElementById('link-'+(this.i))
                this.showLinks = document.getElementById('links-'+(this.i))
            } else {
                this.hideItemElement = document.getElementById('link-'+(this.i-1))
                this.hideLinks = document.getElementById('links-'+(this.i-1))
                this.showItemElement = document.getElementById('link-'+(this.i))
                this.showLinks = document.getElementById('links-'+(this.i))
            }
            this.hideItemElement.style.color = '#cccccc'
            this.hideLinks.style.opacity = 0
            this.showItemElement.style.color = 'black'
            this.showLinks.style.opacity = 1
            if (this.i == 3) {
                this.i = 1
            } else {
                this.i++
            }
        },
        stopSlideImage(i) {
            clearInterval(this.rotateInterval)
            this.showItemElement.style.color = '#cccccc'
            this.showLinks.style.opacity = 0
            document.getElementById('link-'+i).style.color = 'black'
            document.getElementById('links-'+i).style.opacity = 1;
        },
        startSlideImage(i) {
            document.getElementById('link-'+i).style.color = '#cccccc'
            document.getElementById('links-'+i).style.opacity = 0;
            this.showItemElement.style.color = 'black'
            this.showLinks.style.opacity = 1
            // if (this.i == 1) {
            //     this.showItemElement.style.color = 'black'
            //     this.showLinks.style.opacity = 0
            // } else {
            //     this.showBg.style.backgroundImage = 'url(\'/bg-'+(this.i-1)+'.jpg\')'
            // }
            this.rotateInterval = setInterval(this.rotate, 4000)
        }
    }
    
}
</script>


<style>
.container {
    height: 620px;
    text-align: center;
    margin-top: 25px;
    position: relative;
}
.container p {
    font-family: 'CaslonRH-Superfine';
    font-size: 78.12pt;
    line-height: 81pt;
    /* letter-spacing: .02em; */
    height: 95px;
    animation: fadeIn 2s ease-in;
}
.container a, 
.divider {
    font-family: 'BaronSans-Thin';
    font-size: 7pt;
    letter-spacing: .1em;
}
#links-1, #links-2, #links-3 {
    opacity: 0;
}
.copy, .links {
  transition: color 750ms ease-in, opacity 750ms ease-in;
  -webkit-transition: color 750ms ease-in, opacity 750ms ease-in;;
}
.links a {
    position:relative;
    transition: 0.5s;
}
.links  a::before{
    width: 0%;
    height:100%;
    z-index: 3;
    content:'';
    position: absolute;
    bottom: -1px;
    box-sizing: border-box;
    transition: .5s;
 }
.links a:hover::before {
    width: 100% !important;
    transition: .5s;
 }
.links a::before {
    border-bottom: 1px solid black;
}
#logo {
    width: 115px;
    position: absolute;
    bottom: 49px;
    left: 0;
    right: 0;
    margin: 0 auto;
    animation: fadeIn 2s ease-in;
    transition: opacity 750ms ease-in;
}
#logo2 {
    width: 115px;
    opacity: 0;
    position: absolute;
    bottom: 49px;
    left: 0;
    right: 0;
    margin: 0 auto;
    transition: opacity 750ms ease-in;
}
@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
</style>
