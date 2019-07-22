<template>
    <div style="background-color: black;">
        <video class="nav-background-images" id="bg" autoplay muted loop>
            <source src="01_Slide_02.mp4" type="video/mp4">
        </video>
        <div class="container">
            <img id="logo" src="/theWorldOfRH-Logo-White.svg" alt="">
            <div class="links">
                <div class="prods">
                    <p>PRODUCTS</p>
                    <a href="">COLLECTIONS</a><br>
                    <a href="">SOURCE BOOKS</a><br>
                    <a href="">DESIGN SERVICES</a>
                </div>
                <div class="prods">
                    <p>PLACES</p>
                    <a href="">GALLERIES</a><br>
                    <a href="">RESTAURANTS</a><br>
                    <a href="">RESIDENCES</a>
                </div>
                <div class="prods">
                    <p>SPACES</p>
                    <a href="">GUEST HOUSES</a><br>
                    <a href="">PLANES</a><br>
                    <a href="">YATCHS</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // i: 2,
            // showBg: {},
            // startSlideShowInterval: {}
        }
    },
    mounted() {
        // this.showBg = document.getElementById('bg')
        setInterval(function() {
            document.getElementById('bg').style.opacity = 1;
        }, 4000)
    }
    // methods: {
    //     startSlideShow() {
    //         clearInterval(this.startSlideShowInterval)
    //         this.showBg.style.opacity = 1;
    //         setInterval(this.slideshow, 4000)
    //     },
    //     slideshow() {
    //         this.showBg.style.backgroundImage = 'url(\'/design2/02_bg_'+this.i+'.jpg\')';
    //         if (this.i == 9) {
    //             this.i = 1
    //         } else {
    //             this.i++
    //         }
    //     }
    // }
}
</script>

<style>
.container {
    height: 665px;
    /* margin: 0 auto;
    max-width: 1552px; */
    /* display: flex;
    align-items: center; */
    animation: fadeIn 2s ease-in;
    color: #fff;
}
#logo {
    animation: fadeIn 2s ease-in;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 5%;
    width: 75px;
}

.links {
    position: absolute;
    justify-content: space-around;
    display: flex;
    top: 43%;
    width: 100%;
}

.links > div {
    width: 150px;
    text-align: center;
}

.links > div > p {
    font-family: 'CaslonRH-Superfine';
    font-size: 18pt;
    line-height: 24pt;
    letter-spacing: .04em;
    padding-bottom: 10px;
}

.links > div > a {
    font-family: 'BaronSans-Thin';
    font-size: 9pt;
    line-height: 18pt;
    letter-spacing: .07em;
}

/* .nav {
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
}*/

.nav-background-images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    filter:opacity(50%);
    /* background-image: url('/design2/02_bg_1.jpg'); */
    opacity: 0;
    /* background-position: center;
    background-size: cover; */
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
