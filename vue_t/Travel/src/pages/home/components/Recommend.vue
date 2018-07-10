<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link :to="'/detail/' + item.id"   tag="li" class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title" v-text="item.title"></p>
          <p class="item-desc" v-text="item.desc"></p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
        title: '大连亚圣海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题公园'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
        title: '大连亚圣海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题公园'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
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
    margin-top: 0.2rem

  .item
    display: flex
    overflow: hidden
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      color: #ccc
      line-height: .4rem
      ellipsis()
    .item-button
      margin-top: .2rem
      background: #ff9300
      border-radius: .06rem
      color: #fff
      padding: 0 .2rem;
      margin-top: .16rem
      line-height: .44rem

</style>
