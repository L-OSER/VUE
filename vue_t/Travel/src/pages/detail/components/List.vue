<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1512/8d/8de34f4e23a4385190.water.jpg_r_800x800_2982d89b.jpg',
        'http://img1.qunarzz.com/sight/p0/1512/12/1251d00f69a9e97c90.water.jpg_r_800x800_d60ba99d.jpg'],
      showGallary: false
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position: relative
    left: 0.06rem
    top: 0.06rem
    display: inline-block
    width: .36rem
    height: .36rem
    margin-right: .1rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    background-size :.4rem 3rem
  .item-title
    line-height :.8rem
    font-size :.32rem
    padding:0 0.2rem
  .item-children
    padding : 0 .2rem
</style>
