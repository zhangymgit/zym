<template>
<div class="container">
  <div class="banner_box">
      <span class="lqjl" @click="gojilu()">领取记录</span>
      <div class="lqjd_box">
          <div class="progress_bar_box">
              <div ref="progress_bar_box_active" class="progress_bar_box_active"></div>
              <span ref="span0"></span>
              <span ref="span1"></span>
              <span ref="span2"></span>
              <span ref="span3"></span>
              <span ref="span4"></span>
              <span ref="span5"></span>
              <span ref="span6"></span>
              <span ref="span7"></span>
              <span ref="span8"></span>
              <span ref="span9"></span>
          </div>
          <div class="progress_bar_num">
              <div ref="div0">10</div>
              <div ref="div3">40</div>
              <div ref="div6">70</div>
              <div ref="div9">100</div>
          </div>
          <div class="progress_bar_text">
              <div class="youliang">今日油量：<span>{{youliang}}ml</span></div>
              <div class="rest">每日任务将在每天24:00重置</div>
          </div>
      </div>
      <div class="toast" v-show="toastShow">{{toastText}}</div>
  </div>
  <div v-for="(item,index) in arr" :key="index" class="list_box">
      <div class="img"><img :src="item.url" alt=""></div>
      <div class="content">
        <p class="title">{{item.title}}</p>
        <p class="youl">{{item.youl}}ml汽油</p>
      </div>
      <button v-show="item.lqStatus == 0" @click="quwc(item.youl, index)">去完成</button>
      <button v-show="item.lqStatus == 1" @click="lingqu(item.youl, index)">领取</button>
      <button v-show="item.lqStatus == 2" class="ylq">已领取</button>
  </div>
  </div>
</template>
<script>
// import { loGin } from '@/api/Interface'
export default {
  name: 'lqy',
  data () {
    return {
      arr: [
        {url: require('../assets/images/oilConsumption.png'), title: '签到签到签到签到1', youl: '30', lqStatus: 0},
        {url: require('../assets/images/notice.png'), title: '签到签到签到签到2', youl: '10', lqStatus: 0},
        {url: require('../assets/images/oilGet.png'), title: '签到签到签到签到3', youl: '20', lqStatus: 0},
        {url: require('../assets/images/oilGet.png'), title: '签签到签到签到到4', youl: '40', lqStatus: 0}
      ],
      youliang: 70,
      qiyouNum: 0,
      toastShow: false,
      toastText: ''// 提示框内容
    }
  },
  mounted: function () {
    this.jdtChange(this.qiyouNum)
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
    // 奖励领取状态展示(0-10)
    jdtChange (num, type) {
      num--
      if (num <= 9) {
        this.youliang = (num + 1) + '0'
        this.$refs.progress_bar_box_active.style.cssText = 'width:' + num + num + '%;'
        for (var i = 0; i <= num; i++) {
          this.$refs[ 'span' + i ].style.background = '#FFDA75'
          if (i === 0) {
            this.$refs[ 'div' + i ].style.color = '#FFDA75'
          } else if (i === 3) {
            this.$refs[ 'div' + i ].style.color = '#FFDA75'
          } else if (i === 6) {
            this.$refs[ 'div' + i ].style.color = '#FFDA75'
          } else if (i === 9) {
            this.$refs[ 'div' + i ].style.color = '#FFDA75'
          }
        }
      } else {
        this.toast('油箱已满！')
        this.qiyouNum--
        return false
      }
    },
    // 跳转领取记录页
    gojilu () {
      this.$router.push({ path: '/record' })
    },
    // 领取汽油
    lingqu (num, status) {
      // button的状态变为已领取
      this.arr[status].lqStatus = 2
      this.qiyouNum += num / 10
      this.jdtChange(this.qiyouNum, 1)
    },
    // 去完成任务
    quwc (num, status) {
      // button的状态变为领取
      this.arr[status].lqStatus = 1
    }
  },
  computed: {},
  components: {}
}
</script>
<style lang="stylus" scoped="scoped">
.container
  width 100%
  height 100%
  background #EDEDED
.toast
  position: fixed;
  z-index: 2000;
  left: 50%;
  top:60%;
  transition:all .5s;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  border-radius: 0.05rem;
  color:#FFF;
  background: rgba(17, 17, 17, 0.7);
  height: .45rem;
  line-height: .45rem;
  padding: 0.1rem .2rem;
.banner_box
  width 100%
  height 3.8rem
  background #7ECEF4
  position relative
  margin-bottom: 1rem;
  border-radius: 0 0 .5rem .5rem;
  .lqjl
    color #FFFFFF
    font-size 0.24rem
    position absolute
    top 0.21rem
    right 0.2rem
  .lqjd_box
    width 94%
    height 1.87rem
    background #FFFFFF
    position absolute
    top 2.63rem
    left 3%
    border-radius 0.1rem
    .progress_bar_box
      width 90%
      height 0.1rem
      background #FFEDBD
      margin-left 5%
      margin-top 0.63rem
      display flex
      justify-content space-between
      align-items center
      position relative
      span
        width 0.25rem
        height 0.25rem
        background #FFEDBD
        border-radius 50%
        z-index 1
      span:nth-child(2),span:nth-child(5),span:nth-child(8),span:nth-child(11)
        width 0.3rem
        height 0.3rem
      .progress_bar_box_active
        width 0%
        // transition: width 1s;
        height 100%
        background #FFDA75
        position absolute
        top 0
        left 0
        border-radius 0.5rem
    .progress_bar_num
      width 90%
      height 0.1rem
      margin-left 5%
      margin-top 0.3rem
      display flex
      justify-content space-between
      align-items center
      div
       color #FFEDBD
       font-size 0.24rem
       width 0.4rem
       height 0.2rem
       text-align center
      div:first-child
        text-align left
      div:last-child
        text-align right
    .progress_bar_text
      width 90%
      height 0.1rem
      margin-left 5%
      margin-top 0.28rem
      display flex
      justify-content space-between
      align-items center
      .youliang
        font-size 0.24rem
        color #999999
        span
          color #FFA50E
      .rest
        font-size 0.18rem
        color #999999
.list_box
  display flex
  justify-content space-between
  align-items center
  width 100%
  height 1.5rem
  background #FFFFFF
  border-bottom 1px solid #EDEDED
  .img
    width 1rem
    height 1rem
    margin-left 0.4rem
    background yellow
    border-radius 50%
    img
      width 70%
      height 70%
      margin 15%
  .content
    width 40%
    .title
      color #333333
      font-size 0.3rem
    .youl
      color #999999
      font-size 0.24rem
      margin-top 0.1rem
  button
    color #FFFFFF
    font-size 0.3rem
    width 23%
    height 0.6rem
    background #FFA50E
    border-radius 0.3rem
    box-shadow 0 .12rem .15rem 0 rgba(255,165,14,0.5)
    margin-right 0.4rem
  .ylq
    background #DDDDDD
    box-shadow 0 0 0 0 #DDDDDD
</style>
