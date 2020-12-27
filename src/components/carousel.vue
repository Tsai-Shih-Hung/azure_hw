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
        
        :img-src="require(`@/assets/picuture/1031-1.jpg`)"
        id='picture'
      ></b-carousel-slide>

      <b-carousel-slide
        
        :img-src="require(`@/assets/picuture/1030-1.jpg`)"
        id='picture'
      ></b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        :img-src="require(`@/assets/picuture/1029-2.jpg`)"
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
  height: 100%;
}


</style>