<template>
  <div class="container">
    <div class="col-1">
      <div class="quote">
        <img id="logo" src="/RH-Logo-Black.svg" alt="">
        <p class="quote-copy" >“this is not just a business that sells furniture.<br> it's a platform to change<br> the world.”</p>
        <p class="quote-attribute">—Gary Friedman</p>
      </div>
      <div class="list-view">
        <div class="list-view-items">
          <a href="" id="item-1" @mouseover="stopSlideImage(1)" @mouseleave="startSlideImage(1)" style="color: black;">COLLECTIONS</a><span id="item-1-arrow"> &#8594;</span>
          <a href="" id="item-2" @mouseover="stopSlideImage(2)" @mouseleave="startSlideImage(2)">SOURCE BOOKS</a><span id="item-2-arrow" style="opacity: 0"> &#8594;</span>
          <a href="" id="item-3" @mouseover="stopSlideImage(3)" @mouseleave="startSlideImage(3)">GALLERIES</a><span id="item-3-arrow" style="opacity: 0"> &#8594;</span>
          <a href="" id="item-4" @mouseover="stopSlideImage(4)" @mouseleave="startSlideImage(4)">RESTAURANTS</a><span id="item-4-arrow" style="opacity: 0"> &#8594;</span>
          <a href="" id="item-5" @mouseover="stopSlideImage(5)" @mouseleave="startSlideImage(5)">GUESTHOUSES</a><span id="item-5-arrow" style="opacity: 0"> &#8594;</span>
          <a href="" id="item-6" @mouseover="stopSlideImage(6)" @mouseleave="startSlideImage(6)">RESIDENCES</a><span id="item-6-arrow" style="opacity: 0"> &#8594;</span>
          <a href="" id="item-7" @mouseover="stopSlideImage(7)" @mouseleave="startSlideImage(7)">DESIGN SERVICES</a><span id="item-7-arrow" style="opacity: 0"> &#8594;</span>
          <a href="" id="item-8" @mouseover="stopSlideImage(8)" @mouseleave="startSlideImage(8)">PLANES</a><span id="item-8-arrow" style="opacity: 0"> &#8594;</span><br>
          <a href="" id="item-9" @mouseover="stopSlideImage(9)" @mouseleave="startSlideImage(9)">YACHTS</a><span id="item-9-arrow" style="opacity: 0"> &#8594;</span>
        </div>
      </div>
    </div>
    <div class="image-view">
      <div id="image-item-1" style="opacity: 1">
        <img src="/design6/06_bg_01.jpg" alt="">
      </div>
      <div id="image-item-2" style="opacity: 0">
        <img src="/design6/06_bg_02.jpg" alt="">
      </div>
      <div id="image-item-3" style="opacity: 0">
        <img src="/design6/06_bg_03.jpg" alt="">
      </div>
      <div id="image-item-4" style="opacity: 0">
        <img src="/design6/06_bg_04.jpg" alt="">
      </div>
      <div id="image-item-5" style="opacity: 0">
        <img src="/design6/06_bg_05.jpg" alt="">
      </div>
      <div id="image-item-6" style="opacity: 0">
        <img src="/design6/06_bg_06.jpg" alt="">
      </div>
      <div id="image-item-7" style="opacity: 0">
        <img src="/design6/06_bg_07.jpg" alt="">
      </div>
      <div id="image-item-8" style="opacity: 0">
        <img src="/design6/06_bg_08.jpg" alt="">
      </div>
      <div id="image-item-9" style="opacity: 0">
        <img src="/design6/06_bg_09.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 2,
      hideImageElement: {},
      hideItemElement: {},
      showImageElement: {},
      showItemElement: {},
      showArrow: {},
      hideArrow: {},
      interval: null
    }
  },
  mounted() {
    this.hideItemElement = document.getElementById('image-item-1')
    this.showImageElement = document.getElementById('image-item-1')
    this.hideItemElement = document.getElementById('item-1')
    this.showItemElement = document.getElementById('item-1')
    this.hideArrow = document.getElementById('item-1-arrow')
    this.showArrow = document.getElementById('item-1-arrow')
    this.interval = setInterval(this.slideshow, 4000)
  },
  methods: {
    slideshow() {
      if (this.i == 1) {
        this.hideImageElement = document.getElementById('image-item-'+(this.i+8))
        this.hideItemElement = document.getElementById('item-'+(this.i+8))
        this.hideArrow = document.getElementById('item-'+(this.i+8)+'-arrow')

        this.showImageElement = document.getElementById('image-item-'+(this.i))
        this.showItemElement = document.getElementById('item-'+(this.i))
        this.showArrow = document.getElementById('item-'+(this.i)+'-arrow')
      } else {
        this.hideImageElement = document.getElementById('image-item-'+(this.i-1))
        this.hideItemElement = document.getElementById('item-'+(this.i-1))
        this.hideArrow = document.getElementById('item-'+(this.i-1)+'-arrow')

        this.showImageElement = document.getElementById('image-item-'+(this.i))
        this.showItemElement = document.getElementById('item-'+(this.i))
        this.showArrow = document.getElementById('item-'+(this.i)+'-arrow')
      }
      this.hideImageElement.style.opacity = 0
      this.hideItemElement.style.color = '#D5D5D5'
      this.hideArrow.style.opacity = 0;

      this.showImageElement.style.opacity = 1
      this.showItemElement.style.color = 'black'
      this.showArrow.style.opacity = 1;
      if (this.i == 9) {
        this.i = 1
      } else {
        this.i++
      }
    },

    stopSlideImage(i) {
      clearInterval(this.interval)
      this.showImageElement.style.opacity = 0
      this.showItemElement.style.color = '#D5D5D5'
      this.showArrow.style.opacity = 0

      document.getElementById('item-'+i).style.color = 'black';
      document.getElementById('image-item-'+i).style.opacity = 1;
      document.getElementById('item-'+i+'-arrow').style.opacity = 1
    },
    startSlideImage(i) {
      document.getElementById('item-'+i).style.color = '#D5D5D5';
      document.getElementById('image-item-'+i).style.opacity = 0;
      document.getElementById('item-'+i+'-arrow').style.opacity = 0

      this.showImageElement.style.opacity = 1
      this.showItemElement.style.color = 'black'
      this.showArrow.style.opacity = 1
      this.interval = setInterval(this.slideshow, 4000)
    }
  }
}
</script>


<style>

.container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 665px;
  padding: 0 0 0 5%;
  animation: fadeIn 2s ease-in;
}

.list-view {
  display: flex;
  align-items: center;
  font-size: 8pt;
  line-height: 15pt;
}
.list-view div {
  width: 115px;
  padding-top: 10%;
}

.list-view a {
  color: #D5D5D5;
}

.list-view a:hover {
  color: #000;
}

#logo {
   width: 75px;
}

.quote-copy {
  padding-top: 15%;
  font-family: 'CaslonRH-Superfine';
  text-transform: uppercase;
  font-size: 20.4pt;
  line-height: 17.4pt;
  width: 225px;
}

.quote-attribute {
  padding-top: 5%;
  font-family: 'BaronSans-Thin', sans-serif;
  text-transform: uppercase;
  font-size: 8pt;
  line-height: 21.21pt;
  letter-spacing: .15em;
}
.col-1 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25vw;
}

.image-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  height: 100%;
  right: 0;
  width: 66.75vw;
}

.image-view > div {
  position: absolute;
  transition: opacity 1.25s ease-in;
  -webkit-transition: opacity 1.25s ease-in;
}

.list-view-items a {
  transition: color 750ms ease-in;
  -webkit-transition: color 750ms ease-in;
}

.list-view-items span {
  transition: opacity 750ms ease-in;
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
  border-bottom: 1px solid black;
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
