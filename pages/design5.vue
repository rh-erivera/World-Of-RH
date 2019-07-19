<template>
    <div class="container">
        <p class="copy">THE</p>
        <div @mouseover="stopSlideImage(1)" @mouseleave="startSlideImage(1)">
            <p class="copy" id="link-1">PRODUCTS</p>
            <div class="links" id="links-1">
                <a href="">COLLECTIONS / </a><a href="">SOURCEBOOKS / </a><a href="">DESIGN SERVICES</a>
            </div>
        </div>
        <div @mouseover="stopSlideImage(2)" @mouseleave="startSlideImage(2)">
            <p class="copy" id="link-2">PLACES &</p>
            <div class="links" id="links-2">
                <a href="">GALLERIES / </a><a href="">RESTAURANTS / </a><a href="">RESIDENCES</a>
            </div>
        </div>
        <div @mouseover="stopSlideImage(3)" @mouseleave="startSlideImage(3)">
            <p class="copy" id="link-3">SPACES OF</p>
            <div class="links" id="links-3"> 
                <a href="">GUESTHOUSES / </a><a href="">PLANES / </a><a href="">YATCHS</a>
            </div>
        </div>
        <img id="logo" src="/RH-Logo-Black.svg" alt="">
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
                copyItems[i].style.color = '#999999';
            }
            document.getElementById('logo').src = '/RH-Logo-Grey.svg'
            this.showItemElement.style.color = 'black';
            this.showLinks.style.opacity = 1; 
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
            this.hideItemElement.style.color = '#999999'
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
            this.showItemElement.style.color = '#999999'
            this.showLinks.style.opacity = 0
            document.getElementById('link-'+i).style.color = 'black'
            document.getElementById('links-'+i).style.opacity = 1;
        },
        startSlideImage(i) {
            document.getElementById('link-'+i).style.color = '#999999'
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
    margin: 12px auto;
    text-align: center;
}
.container p {
    font-family: 'CaslonRH-Superfine';
    font-size: 118.12pt;
    line-height: 135pt;
    letter-spacing: .02em;
    height: 170px;
    animation: fadeIn 2s ease-in;
}
.container a {
    font-family: 'BaronSans-Thin';
    font-size: 12pt;
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
    width: 150px;
    margin: 50px auto;
    animation: fadeIn 2s ease-in;
    transition: src 750ms ease-in;
}
@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
</style>
