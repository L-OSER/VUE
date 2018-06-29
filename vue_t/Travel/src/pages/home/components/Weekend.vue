<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title" v-text="item.title"></p>
          <p class="item-desc" v-text="item.desc"></p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '大连亚圣海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题公园'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
        title: '大连亚圣海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题公园'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '大连亚圣海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题公园'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem

   .item-img
     width: 100%
   .item-info
     padding: .1rem
   .item-title
     line-height: .54rem
     font-size: .32rem
     ellipsis()
   .item-desc
     color: #ccc
     line-height: .4rem
     ellipsis()

</style>
