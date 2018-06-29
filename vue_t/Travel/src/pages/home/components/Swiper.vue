<template>
  <div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item in list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
/* 如果不加v-if，轮播图会默认显示第四张图片，因为由轮播组件创建了这个组件，加if，由if来创建组件
 * 模板最好不要写逻辑代码，可以交给计算属性来做
 */
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background :#fff
  .wrapper
   overflow hidden
   width:100%
   height:0
   padding-bottom:31.2%
   background:#eee
  .swiper-img
    width: 100%
</style>
