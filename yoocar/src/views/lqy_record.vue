<template>
  <div class="container">
    <div class="banner">
      <div class="banner_box">
        <div class="box_top">
          <div class="text">当前汽油</div>
          <div class="btn">
            <button @click="goduihuan('lucky')">抽奖</button>
            <button @click="goduihuan('exchange')">兑换</button>
          </div>
        </div>
        <p><span>88,888</span>ml</p>
        <ul>
          <li><span class="quan"></span> 本月收入: <span>8888</span>ml</li>
          <li><span class="quan"></span> 本月支出: <span>8888</span>ml</li>
        </ul>
      </div>
    </div>
    <div class="list">
      <div class="list_head">
        <div class="head_left"><span></span><p>{{list.name}}</p></div>
        <div class="head_right">{{list.time}}</div>
      </div>
      <div class="list_content" v-for="(item,index) in list.arr" :key="index">
          <div :class=" item.exchange > 0 ? 'red' : 'green'">
            <div>
              <span></span>
              <p v-if="item.exchange > 0">收入</p>
              <p v-if="item.exchange < 0">支出</p>
            </div>
            <div>{{item.exchange}}ml</div>
          </div>
          <div>
            <span>{{item.time}}</span>
            <span>余额：{{item.balance}}ml</span>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'record',
  data () {
    return {
      list: {
        name: '您的账单',
        time: '近一个月',
        arr: [
          {
            time: '2019-3-19 16:48',
            exchange: '-10',
            balance: '510'
          },
          {
            time: '2019-3-19 16:48',
            exchange: '+10',
            balance: '520'
          },
          {
            time: '2019-3-19 16:48',
            exchange: '+10',
            balance: '510'
          },
          {
            time: '2019-3-19 16:48',
            exchange: '+10',
            balance: '500'
          }
        ]
      }
    }
  },
  methods: {
    // 提示弹窗
    toast (str) {
      var v = this
      v.toastText = str
      v.toastShow = true
      setTimeout(function () {
        v.toastShow = false
      }, 1500)
    },
    // 跳转领取记录页
    goduihuan (path) {
      this.$router.push({ path: '/' + path })
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
.list
  width 90%
  height auto
  margin .31rem auto 0
  background #FFFFFF
  border-radius .1rem .1rem 0 0
  padding .3rem .2rem
  .list_head
    display flex
    justify-content space-between
    align-items center
    margin-bottom  .11rem
    .head_left
      display flex
      align-items center
    .head_left>span
      width .08rem
      height .3rem
      background #FFA50E
      margin-right .08rem
      border-radius .1rem
      .head_left>p
        font-size .3rem
        color #333333
    .head_right
      font-size .26rem
      color #999999
      margin-right .18rem 0 0 .21rem
  .list_content
    padding .3rem 0 .3rem .1rem
  .list_content>div
    display flex
    justify-content space-between
    align-items center
  .list_content>div:first-child
    margin-bottom .11rem
.red
  color #FF4F4D
  font-size .3rem
.green
  color #79D421
  font-size .3rem
</style>
