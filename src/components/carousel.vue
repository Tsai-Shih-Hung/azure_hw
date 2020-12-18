<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="http://www.im.tku.edu.tw/wp-content/uploads/2019/11/1030.jpg"
        id='picture'
      ></b-carousel-slide>

      <b-carousel-slide
        caption="First slide"
        img-src="http://www.im.tku.edu.tw/wp-content/uploads/2019/11/1029.jpg"
        id='picture'
      ></b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        caption="First slide"
        img-src="../assets/picture/1029new.jpg"
        id='picture'
      ></b-carousel-slide>
      
    
    </b-carousel>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

#picture {
  width: 100%;
  height: 500px;
}


</style>