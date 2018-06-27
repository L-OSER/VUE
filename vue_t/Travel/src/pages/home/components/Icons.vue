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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门景点'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '必游榜单'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
        desc: '夏日玩水'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      }, {
        id: '0006',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        desc: '故宫'
      }, {
        id: '0007',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        desc: '主题乐园'
      }, {
        id: '0008',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
        desc: 'Q+精选'
      }, {
        id: '0009',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        desc: '自然风光'
      }, {
        id: '0010',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '名胜古迹'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
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
