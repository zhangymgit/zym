<template>
    <div class="container">
        <div class="lucky-wheel">
            <div class="lucky-title"></div>
            <div class="lucky-title2"></div>
            <p class="lucky_text"><a href="">{{lucky_text}}</a></p>
            <div class="wheel-main">
                <div class="wheel-pointer-box">
                     <div class="wheel-pointer" @click="rotate_handle()" :style="{transform:rotateAngle_pointer,transition:rotate_transition_pointer}"></div>
                </div>
                <div class="wheel-bg" :style="{transform:rotateAngle,transition:rotate_transition}">
                    <div class="prize-list">
                        <div class="prize-item" v-for="(item,index) in prize_list" :key="index">
                            <div class="prize-pic">
                                <img :src="item.src">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lottery_ticket">免费抽奖次数： {{ lottery_ticket}}</div>
        <!-- 弹窗遮罩层 -->
        <div class="pop-up" v-show="toast_control">
          <div class="pop-up-box">
            <img :src="toast_pictrue" class="toast-picture">
            <p>{{toast_title}}</p>
            <button>确认</button>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      easejoy_bean: 0, // 金豆
      lucky_text: '查看规则', // 金豆
      lottery_ticket: 0, // 抽奖次数
      prize_list: [
        // {
        //   src: require('../../assets/img/bean_500.png'), // 奖品图片
        //   count: 10, // 奖品数量
        //   name: '易趣豆', // 奖品名称
        //   isPrize: 1 // 该奖项是否为奖品
        // },
        // {
        //   src: require('../../assets/img/bean_five.png'),
        //   count: 5,
        //   name: '豆',
        //   isPrize: 1
        // },
        // {
        //   src: require('../../assets/img/bean_one.png'),
        //   count: 10,
        //   name: '易趣豆',
        //   isPrize: 1
        // },
        // {
        //   src: require('../../assets/img/point_five.png'),
        //   count: 5,
        //   name: '积分',
        //   isPrize: 1
        // },
        // {
        //   src: require('../../assets/img/point_ten.png'),
        //   count: 10,
        //   name: '积分',
        //   isPrize: 1
        // },
        // {
        //   src: require('../../assets/img/bean_500.png'),
        //   count: 10,
        //   name: '易趣豆',
        //   isPrize: 1
        // }
      ],
      toast_control: false, // 抽奖结果弹出框控制器
      hasPrize: false, // 是否中奖
      start_rotating_degree: 0, // 初始旋转角度
      rotateAngle: 0, // 将要旋转的角度
      start_rotating_degree_pointer: 0, // 指针初始旋转角度
      rotateAngle_pointer: 0, // 指针将要旋转的度数
      rotate_transition: 'transform 6s ease-in-out', // 初始化选中的过度属性控制
      rotate_transition_pointer: 'transform 12s ease-in-out', // 初始化指针过度属性控制
      click_flag: true, // 是否可以旋转抽奖
      index: 0
    }
  },
  created () {
    this.init_prize_list()
  },
  computed: {
    toast_title () {
      return this.hasPrize
        ? '恭喜您，获得' + this.prize_list[this.index].count + ' ' + this.prize_list[this.index].name
        : '未中奖'
    },
    toast_pictrue () {
      return this.hasPrize
        ? require('../../assets/img/sorry.png')
        : require('../../assets/img/congratulation.png')
    }
  },
  methods: {
    // 此方法为处理奖品数据
    init_prize_list (list) {},
    rotate_handle () {
      this.index = 1 // 指定每次旋转到的奖品下标
      this.rotating()
    },
    rotating () {
      if (!this.click_flag) return
      var type = 0 // 默认为 0  转盘转动 1 箭头和转盘都转动(暂且遗留)
      var duringTime = 5 // 默认为1s
      // var random = Math.floor(Math.random() * 7)
      var resultIndex = this.index // 最终要旋转到哪一块，对应prize_list的下标
      var resultAngle = [337.5, 292.5, 247.5, 202.5, 157.5, 112.5, 67.5, 22.5] // 最终会旋转到下标的位置所需要的度数
      var randCircle = 6 // 附加多转几圈，2-3
      this.click_flag = false // 旋转结束前，不允许再次触发
      if (type === 0) {
        // 转动盘子
        var rotateAngle =
          this.start_rotating_degree +
          randCircle * 360 +
          resultAngle[resultIndex] -
          this.start_rotating_degree % 360
        this.start_rotating_degree = rotateAngle
        this.rotateAngle = 'rotate(' + rotateAngle + 'deg)'
        // // //转动指针
        // this.rotateAngle_pointer = 'rotate(' + this.start_rotating_degree_pointer + 360 * randCircle + 'deg)'
        // this.start_rotating_degree_pointer = 360 * randCircle
        var that = this
        // 旋转结束后，允许再次触发
        setTimeout(function () {
          that.click_flag = true
          that.game_over()
        }, duringTime * 1000 + 1500) // 延时，保证转盘转完
      } else {
        //
      }
    },
    game_over () {
      this.toast_control = true
      this.hasPrize = this.prize_list[this.index].isPrize
    },
    // 关闭弹窗
    close_toast () {
      this.toast_control = false
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  background: url('../assets/img/bg.png') no-repeat;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%
}
.lucky-wheel {
  width: 100%;
  height: auto;
}
.lucky-title {
  width: 90%;
  height: 1.76rem;
  background: url('../assets/img/title1.png') no-repeat center top;
  margin: 0.33rem auto 0.09rem;
  background-size: 100%;
}
.lucky-title2 {
  width: 53.6%;
  height: 0.61rem;
  background: url('../assets/img/title2.png') no-repeat center top;
  margin: 0rem auto;
  background-size: 100%;
}
.lottery_ticket{
  font-size: 0.3rem;
  color: #FFF;
  text-align: center;
  margin-top: 0.27rem;
}
.lucky_text{
  text-align: center;
  margin-top: 0.21rem;
  margin-bottom: 0.55rem;
}
.lucky_text a{
  color: #FFF;
}

.wheel-main {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.wheel-bg {
  width: 6.64rem;
  height: 6.64rem;
  background: url('../assets/img/draw_wheel.png') no-repeat center top;
  background-size: 100%;
  color: #fff;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  transition: transform 3s ease;
}
.wheel-pointer-box {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -60%);
  width: 1.8rem;
  height: 1.8rem;
}
.wheel-pointer {
  width: 1.8rem;
  height: 1.8rem;
  background: url('../assets/img/draw_btn.png') no-repeat center top;
  background-size: 100%;
  transform-origin: center 60%;
}
.wheel-bg div {
  text-align: center;
}
.prize-list {
  width: 100%;
  height: 100%;
  position: relative;
}
.prize-list .prize-item {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.prize-list .prize-item:first-child {
  top: 0;
  left: 2.49rem;
  transform: rotate(20deg);
}
.prize-list .prize-item:nth-child(2) {
  top: 0.84rem;
  left: 3.24rem;
  transform: rotate(67deg);
}
.prize-list .prize-item:nth-child(3) {
  top: 1.92rem;
  left: 3.18rem;
  transform: rotate(-250deg);
}
.prize-list .prize-item:nth-child(4) {
  top: 2.7rem;
  left: 2.46rem;
  transform: rotate(-210deg);
}
.prize-list .prize-item:nth-child(5) {
  top: 2.76rem;
  left: 1.32rem;
  transform: rotate(-160deg);
}
.prize-list .prize-item:nth-child(6) {
  top: 1.92rem;
  left: 0.57rem;
  transform: rotate(-111deg);
}
.prize-list .prize-item:nth-child(7) {
  top: 0.84rem;
  left: 0.54rem;
  transform: rotate(-69deg);
}
.prize-list .prize-item:nth-child(8) {
  top: 0;
  left: 1.35rem;
  transform: rotate(-20deg);
}
.prize-item {
  width: 2rem;
  height: 3rem;
}

.prize-pic img {
  width: 1.3rem;
  height: 0.8rem;
  margin-top: 0.5rem;
}
.prize-count {
  font-size: 0.3rem;
}
.prize-type {
  font-size: 0.15rem;
}
.pop-up {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  width: 100%;
  height: 100%;
}
.pop-up-box{
  width: 60%;
  min-height: 4rem;
  text-align: center;
  margin: 50% auto 0;
  border-radius: 0.3rem;
  background-color: rgb(252, 244, 224);
  position: relative;
}
.pop-up-box img{
  width: 100%;
  height: auto;
  transform: translateY(-60%);
}
.pop-up-box button{
  color: #FFF;
  width: 1.4rem;
  height: 0.56rem;
  background: rgb(252, 124, 88);
  border-radius: 0.2rem;
}
</style>
