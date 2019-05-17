<template>
  <div>
    <div class="banner">
      <div class="banner_box">
        <div class="box_top">
          <div class="text">当前汽油</div>
          <div class="btn">
            <button>抽奖</button>
            <button>兑换</button>
          </div>
        </div>
        <p><span>99,999</span>ml</p>
        <ul>
          <li> <span class="quan"></span> 本月收入: <span>99999</span>ml</li>
          <li> <span class="quan"></span> 本月支出: <span>99999</span>ml</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
      msg: '领取记录页'
    }
  }
}
</script>
<style lang="stylus" scoped="scoped">
.banner
  width 100%
  height 3rem
  .banner_box
    width 90%
    height 82%
    margin 4% auto
    padding-top 0.4rem
    padding-left 0.2rem
    background linear-gradient(-33deg,rgba(248,143,50,0.69),rgba(255,165,14,0.69))
    border-radius 0.1rem
  .box_top
    display flex
    justify-content space-between
    .text
      color #FFFFFF
      font-size 0.3rem
    .btn>button
      color #FFA50E
      font-size 0.3rem
      width 1.7rem
      height 0.6rem
      margin-right .2rem
      border 0.02rem solid rgba(255,255,255,1)
      background #FFFFFF
      border-radius .3rem
    .btn>button:last-child
      color #FFF
      background #FFA50E
  p
    color #FFF
    font-size .36rem
    margin-top .25rem
  ul
    display flex
    justify-content space-between
    margin-top .35rem
    li
      color #ffffff
      font-size .3rem
      display flex
      align-items center
      .quan
        width .12rem
        height .12rem
        border .01rem solid #ffffff
        border-radius 50%
        margin-right .09rem
    li:last-child
      margin-right .83rem
</style>
