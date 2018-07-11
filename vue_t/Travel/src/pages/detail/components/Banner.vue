<template>
  <div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="bannerImg" alt="">
    <div class="banner-info">
      <div class="banner-title">{{this.sightName}}</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe608;</span>{{this.bannerImg.length}}</div>
    </div>
  </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleBannerClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1512/8d/8de34f4e23a4385190.water.jpg_r_800x800_2982d89b.jpg',
        'http://img1.qunarzz.com/sight/p0/1512/12/1251d00f69a9e97c90.water.jpg_r_800x800_d60ba99d.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleBannerClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    height:0
    padding-bottom :55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #ffffff
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-title
        flex:1
        font-size: 0.32rem
        padding: 0 0.2rem;
      .banner-number
        margin-top :.14rem
        padding: 0 0.4rem
        height: .32rem
        line-height: .32rem
        border-radius :.2rem
        background :rgba(0, 0, 0, .8)
        font-size :.24rem
        .banner-icon
          font-size :.24rem
</style>
