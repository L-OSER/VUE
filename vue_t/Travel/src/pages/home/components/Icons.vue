<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item ,index) in pages" :key="index" >
        <div v-for="icon in item" class="icon" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl"
                 alt="">
          </div>
          <p class="icon-desc" v-text="icon.desc"></p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons >>> .swiper-pagination
    bottom: 0
  .icons
   margin-top :0.1rem
   .icon
     overflow: hidden
     width: 25%
     float: left
     padding-bottom: 21.5%
     position: relative
     margin-top: 0.1rem;
   .icon-img
     position: absolute
     top: 0
     left: 0
     right: 0
     bottom: .44rem
     -webkit-box-sizing: border-box
     -moz-box-sizing: border-box
     box-sizing: border-box

   .icon-img-content
     display: block
     margin: 0 auto
     height: 100%

   .icon-desc
     position: absolute
     left: 0
     right: 0
     bottom: 0
     height: .44rem
     line-height: .44rem
     text-align: center
     color: $darkTextColor
     ellipsis()
</style>
