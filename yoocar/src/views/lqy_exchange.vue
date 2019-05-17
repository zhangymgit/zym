<template>
  <div class="container">
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
    <div class="lists">
      <div class="list">
        <div class="left">
          <p class="money">100<span>￥</span></p>
          <p>通用代金券</p>
          <p class="time">03.01-04.30</p>
        </div>
        <div class="right">
          <p>100元代金券</p>
          <p>100ml汽油（仅剩15张）</p>
          <p>正在兑换中……</p>
        </div>
        <button v-show="true">立即兑换</button>
        <button v-show="false">积分不足</button>
        <button v-show="false">已兑换</button>
        <button v-show="false">已结束</button>
      </div>
      <div class="list">
        <div class="left">
          <p class="money">100<span>￥</span></p>
          <p>通用代金券</p>
          <p class="time">03.01-04.30</p>
        </div>
        <div class="right">
          <p>100元代金券</p>
          <p>100ml汽油（仅剩15张）</p>
          <p>正在兑换中……</p>
        </div>
        <button v-show="true">立即兑换</button>
        <button v-show="false">积分不足</button>
        <button v-show="false">已兑换</button>
        <button v-show="false">已结束</button>
      </div>
      <div class="list">
        <div class="left">
          <p class="money">100<span>￥</span></p>
          <p>通用代金券</p>
          <p class="time">03.01-04.30</p>
        </div>
        <div class="right">
          <p>100元代金券</p>
          <p>100ml汽油（仅剩15张）</p>
          <p>正在兑换中……</p>
        </div>
        <button v-show="true">立即兑换</button>
        <button v-show="false">积分不足</button>
        <button v-show="false">已兑换</button>
        <button v-show="false">已结束</button>
      </div>
      <div class="list">
        <div class="left">
          <p class="money">100<span>￥</span></p>
          <p>通用代金券</p>
          <p class="time">03.01-04.30</p>
        </div>
        <div class="right">
          <p>100元代金券</p>
          <p>100ml汽油（仅剩15张）</p>
          <p>正在兑换中……</p>
        </div>
        <button v-show="true">立即兑换</button>
        <button v-show="false">积分不足</button>
        <button v-show="false">已兑换</button>
        <button v-show="false">已结束</button>
      </div>
      <div class="list">
        <div class="left">
          <p class="money">100<span>￥</span></p>
          <p>通用代金券</p>
          <p class="time">03.01-04.30</p>
        </div>
        <div class="right">
          <p>100元代金券</p>
          <p>100ml汽油（仅剩15张）</p>
          <p>正在兑换中……</p>
        </div>
        <button v-show="true">立即兑换</button>
        <button v-show="false">积分不足</button>
        <button v-show="false">已兑换</button>
        <button v-show="false">已结束</button>
      </div>
      <div class="list">
        <div class="left">
          <p class="money">100<span>￥</span></p>
          <p>通用代金券</p>
          <p class="time">03.01-04.30</p>
        </div>
        <div class="right">
          <p>100元代金券</p>
          <p>100ml汽油（仅剩15张）</p>
          <p>正在兑换中……</p>
        </div>
        <button v-show="true">立即兑换</button>
        <button v-show="false">积分不足</button>
        <button v-show="false">已兑换</button>
        <button v-show="false">已结束</button>
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
.container
  width 100%
  height 100%
  background #EDEDED
  overflow hidden
.banner
  width 100%
  height 3rem
  padding 5%
  background #FFF
  .banner_box
    width 86%
    height 82%
    padding-top 0.4rem
    padding-left 4%
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
.lists
  width 96%
  height auto
  margin .31rem auto 0
  background #FAFAFA
  padding .3rem 2%
  .list
    width 90%
    height 1.65rem
    margin .2rem auto
    display flex
    align-items center
    background #FFFFFF
    padding-left .12rem
    .left
      width 22%
      height 1.42rem
      background #F8D880
      border-radius .3rem
      font-size .22rem
      color #99641E
      display flex
      flex-direction column
      justify-content center
      align-items center
      .money
        font-size .54rem
        background-image -webkit-linear-gradient(left,#4A1B11,#9A693E)
        -webkit-background-clip text
        -webkit-text-fill-color transparent
        margin-bottom .1rem
        span
          font-size .4rem
      .time
        color #ECDBA5
        font-size .18rem
        background #99641E
        margin-top .08rem
        padding .02rem .05rem
        border-radius .1rem
    .right
      width 50%
      height 1.4rem
      font-size .24rem
      display flex
      padding-left .16rem
      flex-direction column
      justify-content space-around
      align-items space-around
    button
      color #ffffff
      font-size .3rem
      width 26%
      height 100%
      background #FFBD3A
      border-radius 0 .1rem .1rem 0
</style>
