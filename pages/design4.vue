<template>
  <div class="container">
    <div class="col-1">
      <div class="quote">
        <img id="logo" src="/RH-Logo-Black.svg" alt="">
        <p class="">DISCOVER THE WORLD OF RH</p>
      </div>
      <div class="list-view">
        <div class="list-view-items">
          <a href="/design1" id="item-1" @mouseover="stopSlideImage(1)" @mouseleave="startSlideImage(1)" style="color: black;">COLLECTIONS</a>
          <a href="" id="item-2" @mouseover="stopSlideImage(2)" @mouseleave="startSlideImage(2)">SOURCE BOOKS</a>
          <a href="" id="item-3" @mouseover="stopSlideImage(3)" @mouseleave="startSlideImage(3)">GALLERIES</a>
          <a href="" id="item-4" @mouseover="stopSlideImage(4)" @mouseleave="startSlideImage(4)">RESTAURANTS</a>
          <a href="" id="item-5" @mouseover="stopSlideImage(5)" @mouseleave="startSlideImage(5)">GUESTHOUSES</a>
          <a href="" id="item-6" @mouseover="stopSlideImage(6)" @mouseleave="startSlideImage(6)">RESIDENCES</a>
          <a href="" id="item-7" @mouseover="stopSlideImage(7)" @mouseleave="startSlideImage(7)">DESIGN SERVICES</a>
          <a href="" id="item-8" @mouseover="stopSlideImage(8)" @mouseleave="startSlideImage(8)">PLANES</a><br>
          <a href="" id="item-9" @mouseover="stopSlideImage(9)" @mouseleave="startSlideImage(9)">YACHTS</a>
        </div>
      </div>
    </div>
    <div class="image-view">
      <div id="image-item-1" style="opacity: 1">
        <img src="/design4/04_bg_1.jpg" alt="">
      </div>
      <div id="image-item-2" style="opacity: 0">
        <img src="/design4/04_bg_2.jpg" alt="">
      </div>
      <div id="image-item-3" style="opacity: 0">
        <img src="/design4/04_bg_3.jpg" alt="">
      </div>
      <div id="image-item-4" style="opacity: 0">
        <img src="/design4/04_bg_4.jpg" alt="">
      </div>
      <div id="image-item-5" style="opacity: 0">
        <img src="/design4/04_bg_5.jpg" alt="">
      </div>
      <div id="image-item-6" style="opacity: 0">
        <img src="/design4/04_bg_6.jpg" alt="">
      </div>
      <div id="image-item-7" style="opacity: 0">
        <img src="/design4/04_bg_7.jpg" alt="">
      </div>
      <div id="image-item-8" style="opacity: 0">
        <img src="/design4/04_bg_8.jpg" alt="">
      </div>
      <div id="image-item-9" style="opacity: 0">
        <img src="/design4/04_bg_9.jpg" alt="">
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
      interval: null
    }
  },
  mounted() {
    this.interval = setInterval(this.slideshow, 4000)
  },
  methods: {
    slideshow() {
      if (this.i == 1) {
        this.hideImageElement = document.getElementById('image-item-'+(this.i+8))
        this.hideItemElement = document.getElementById('item-'+(this.i+8))
        this.showImageElement = document.getElementById('image-item-'+(this.i))
        this.showItemElement = document.getElementById('item-'+(this.i))
      } else {
        this.hideImageElement = document.getElementById('image-item-'+(this.i-1))
        this.hideItemElement = document.getElementById('item-'+(this.i-1))
        this.showImageElement = document.getElementById('image-item-'+(this.i))
        this.showItemElement = document.getElementById('item-'+(this.i))
      }
      this.hideImageElement.style.opacity = 0
      this.hideItemElement.style.color = '#D5D5D5'
      this.showImageElement.style.opacity = 1
      this.showItemElement.style.color = 'black'
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
      document.getElementById('item-'+i).style.color = 'black';
      document.getElementById('image-item-'+i).style.opacity = 1;
    },
    startSlideImage(i) {
      document.getElementById('item-'+i).style.color = '#D5D5D5';
      document.getElementById('image-item-'+i).style.opacity = 0;
      this.showImageElement.style.opacity = 1
      this.showItemElement.style.color = 'black'
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
    padding: 0 5%;
}

.list-view {
  display: flex;
  align-items: center;
  font-size: 8pt;
  line-height: 15pt;
}
.list-view div {
  width: 105px;
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
.quote p {
    padding-top: 5%;
    font-family: 'BaronSans-UltraThin';
    font-size: 12.5pt;
    line-height: 15pt;
}

.col-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.image-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    height: 100%;
    right: 5%;
    width: 45vw;
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

</style>
