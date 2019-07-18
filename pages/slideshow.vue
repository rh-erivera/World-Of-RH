<template>
  <div class="container">
    <div class="list-view">
      <div class="list-view-items">
        <a href="/design1" id="item-1" @mouseover="stopSlideImage(1)" @mouseleave="startSlideImage(1)" style="color: black;">Laia Abril</a>
        <a href="" id="item-2" @mouseover="stopSlideImage(2)" @mouseleave="startSlideImage(2)">Rose Marie Cromwell</a>
        <a href="" id="item-3" @mouseover="stopSlideImage(3)" @mouseleave="startSlideImage(3)">Mark Mahaney</a>
        <a href="" id="item-4" @mouseover="stopSlideImage(4)" @mouseleave="startSlideImage(4)">Max Pinckers</a>
        <a href="" id="item-5" @mouseover="stopSlideImage(5)" @mouseleave="startSlideImage(5)">Irina Rozovsky</a>
        <a href="" id="item-6" @mouseover="stopSlideImage(6)" @mouseleave="startSlideImage(6)">Michael Schmelling</a>
        <a href="" id="item-7" @mouseover="stopSlideImage(7)" @mouseleave="startSlideImage(7)">Bryan Schutmaat</a>
        <a href="" id="item-8" @mouseover="stopSlideImage(8)" @mouseleave="startSlideImage(8)">Mark Steinmetz</a>
      </div>
    </div>
    <div class="image-view">
      <div>
        <div id="image-item-1" style="opacity: 1">
          <img src="https://claxtonprojects.com/wp-content/uploads/2018/10/LA_abortioncontraception_19-1199x1799.jpg" alt="">
        </div>
        <div id="image-item-2" style="opacity: 0">
          <img src="https://claxtonprojects.com/wp-content/uploads/2019/01/rmc_newyorker_cubanjazzistas-4907_Final-1199x1552.jpg" alt="">
        </div>
        <div id="image-item-3" style="opacity: 0">
          <img src="https://claxtonprojects.com/wp-content/uploads/2018/11/MM_Monocle_Roadtrip-15-1199x1552.jpg" alt="">
        </div>
        <div id="image-item-4" style="opacity: 0">
          <img src="https://claxtonprojects.com/wp-content/uploads/2018/10/076_from-the-series-Margins-of-Excess-%C2%A9-2018-Max-Pinckers-1199x981.jpg" alt="">
        </div>
        <div id="image-item-5" style="opacity: 0">
          <img src="https://claxtonprojects.com/wp-content/uploads/2018/11/IR_MBH_8-1199x1634.jpg" alt="">
        </div>
        <div id="image-item-6" style="opacity: 0">
          <img src="https://claxtonprojects.com/wp-content/uploads/2019/03/schmelling_grimes_wsjmag_2019_010-1199x1799.jpg" alt="">
        </div>
        <div id="image-item-7" style="opacity: 0">
          <img src="https://claxtonprojects.com/wp-content/uploads/2019/05/01_Bill_Callahan_A001-1-1199x1498.jpg" alt="">
        </div>
        <div id="image-item-8" style="opacity: 0">
          <img src="https://claxtonprojects.com/wp-content/uploads/2018/10/MS_SM_43-1199x1715.jpg" alt="">
        </div>
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
        this.hideImageElement = document.getElementById('image-item-'+(this.i+7))
        this.hideItemElement = document.getElementById('item-'+(this.i+7))
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
      if (this.i == 8) {
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
      // this.i = i+1;
      // this.showImageElement = document.getElementById('image-item-'+(this.i))
      this.showImageElement.style.opacity = 1
      // this.showItemElement = document.getElementById('item-'+(this.i))
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
  min-height: 100vh;
}

.list-view {
  display: flex;
  align-items: center;
}
.list-view div {
  display: flex;
  flex-direction: column;
}
.list-view a {
  color: #D5D5D5;
}
.list-view a:hover {
  color: #000;
}


.image-view {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 23vw;
  height: 100%;
}

.image-view div {
  height: 100%;
  width: 100%;
  background-size: 100% auto;
  background-position: bottom right;
  background-repeat: no-repeat;
  position: absolute;
  top: 100px;
  right: 10vw;
}

.image-view > div > div {
  transition: opacity 1.25s ease-in;
  -webkit-transition: opacity 1.25s ease-in;
}

.list-view-items a {
  transition: color 750ms ease-in;
  -webkit-transition: color 750ms ease-in;
}

</style>
