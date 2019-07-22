<template>
  <div class="container">
    <div class="quote">
        <img id="logo" src="/RH-Logo-Black.svg" alt="">
        <p class="">“Rather than looking to the past, we believe in destroying today’s reality to create tomorrow’s future. Only by taking risks can we explore our unlimited potential.”</p>
        <p class="quote-attribute">—Gary Friedman</p>
    </div>
    <div class="list-view">
      <div class="list-view-items">
        <a href="" id="item-1" @mouseover="stopSlideImage(1)" @mouseleave="startSlideImage(1)" style="color: black;">collections</a>
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
    <div class="image-view" id="bg"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 2,
      hideImageElement: {},
      hideItemElement: {},
      showBg: {},
      startSlideShowInterval: {},
      interval: null
    }
  },
  mounted() {
    this.hideItemElement = document.getElementById('item-1')
    this.showItemElement = document.getElementById('item-1')
    this.showBg = document.getElementById('bg')
    this.startSlideShowInterval = setInterval(this.startSlideShow, 1000)
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
      this.showBg.style.backgroundImage = 'url(\'/design4/04_bg_'+this.i+'.jpg\')';
      this.hideItemElement.style.color = '#D5D5D5'
      this.showItemElement.style.color = 'black'
      if (this.i == 9) {
        this.i = 1
      } else {
        this.i++
      }
    },

    stopSlideImage(i) {
      clearInterval(this.interval)
      this.showItemElement.style.color = '#D5D5D5'
      this.showBg.style.backgroundImage = 'url(\'/design4/04_bg_'+i+'.jpg\')'
      document.getElementById('item-'+i).style.color = 'black';
    },
    startSlideImage(i) {
      document.getElementById('item-'+i).style.color = '#D5D5D5'
      this.showItemElement.style.color = 'black'
      if (this.i == 1) {
        this.showBg.style.backgroundImage = 'url(\'/design4/04_bg_'+(this.i)+'.jpg\')';
      } else {
        this.showBg.style.backgroundImage = 'url(\'/design4/04_bg_'+(this.i-1)+'.jpg\')';
      }
      this.interval = setInterval(this.slideshow, 4000)
    }
  }
}
</script>


<style>

.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  max-width: 1500px;
}
.quote {
    font-family: 'CaslonRH-Superfine';
    font-size: 25.92pt;
    line-height: 23pt;
    letter-spacing: .02em;
    text-transform: uppercase;
    width: 705px;
    padding-top: 200px;
}
#logo {
    width: 100px;
    padding-bottom: 40px;
}
.quote-attribute {
    padding-top: 20px;
    font-family: 'BaronSans-Thin', sans-serif;
    font-size: 12pt;
    line-height: 21.21pt;
    letter-spacing: .05em;
    text-align: right;
}
.list-view {
    display: flex;
    align-items: center;
    font-family: 'BaronSans-Thin', sans-serif;
    font-size: 12pt;
    line-height: 22pt;
    letter-spacing: .075em;
    text-transform: uppercase;
}
.list-view div {
  display: flex;
  flex-direction: column;
}
.list-view a {
  color: #D5D5D5;
}
.image-view {
  position: absolute;
  top: 50px;
  right: 50px;
  width: 35vw;
  height: 90vh;
  transition: opacity 1.25s ease-in, background-image 1.25s ease-in;
  -webkit-transition: opacity 1.25s ease-in, background-image 1.25s ease-in;
}
#bg {
    background-image: url('/design4/04_bg_1.jpg');
    opacity: 0;
    background-position: center;
    background-size: cover;
}
.list-view-items a {
  transition: color 750ms ease-in;
  -webkit-transition: color 750ms ease-in;
}
</style>
