<template>
  <div class="score">
    <div class="scores_container">
      <header class="scores">
        <span class="score_num">{{score}}</span>
      </header>
      <div class="result_tip">{{scoreTips}}</div>
    </div>
    <div class="share_button" @click="showCover"></div>
    <div class="share_code">
      <header class="share_header">关注cutexx，获取答案。</header>
      <img src="../../assets/images/4-4.png" height="212" width="212" alt="" class="code_img">
    </div>
    <div class="share_cover" v-show="showHide" @click="showCover">
      <img src="../../assets/images/5-2.png" alt="" class="share_img">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Score',
  data() {
    return {
      // 是否显示提示
      showHide: false,
      // 分数
      score: 0,
      // 分数提示
      scoreTips: '',
      // 正确答案
      rightAnswer: [2, 7, 12, 13, 18],
      scoreTipsArr: ['cutexx头也不回的走了...', '不理小笨蛋！！', 'cutexx缓缓说出：还可以', '加油哦，媳妇快要到手啦', '继续努力，还差一步~', 'cutexx奖励啵啵一枚']
    }
  },
  computed: {
    ...mapState(['answerId'])
  },
  created() {
    this.computedScore();
    this.getScoreTip()
  },
  methods: {
    //计算分数
    computedScore() {
      this.answerId.forEach((item, index) => {
        if (item == this.rightAnswer[index]) {
          this.score += 20;
        }
      })
    },
    //是否显示分享提示
    showCover() {
      this.showHide = !this.showHide;
    },
    //根据分数显示提示
    getScoreTip() {
      let index = Math.ceil(this.score/20);
      this.scoreTips = this.scoreTipsArr[index];
    }
  }
}
</script>

<style lang="less" scoped>
.score {
  background-image: url(../../assets/images/4-1.jpg);
  height: 100vh;
  padding-top: 3.2rem;
}
.scores_container{
  width: 9.7rem;
  height: 9.1rem;
  background: url(../../assets/images/4-2.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0;
  position: relative;
  .scores{
    position: absolute;
    width: 100%;
    text-indent: 3.3rem;
    top: 4.7rem;
    font-size: 1.4rem;
    font-weight: 900;
    -webkit-text-stroke: 0.05rem #412318;
    font-family: 'Microsoft YaHei';
    .score_num{
      font-family: Tahoma,Helvetica,Arial;
      color: #a51d31;
    }
    .fenshu{
      color: #a51d31;
    }
  }
  .result_tip{
    position: absolute;
    top: 7rem;
    width: 9rem;
    left: 0.6rem;
    color: #3e2415;
    font-size: 0.65rem;
    text-align: center;
  }
}
.share_button{
  width: 6.025rem;
  height: 2.4rem;
  margin: 2rem auto 0;
  background: url(../../assets/images/4-3.png) no-repeat 0.4rem 0;
  background-size: 5.825rem 100%;
}
.share_code{
  width: 5.3rem;
  margin: 2.5rem auto 0;
  .share_header{
    color: #664718;
    font-size: 0.8rem;
    font-family: 'Microsoft YaHei';
    width: 10rem;
    font-weight: 500;
  }
  .code_img{
    height: 5.3rem;
    width: 5.3rem;
    margin-top: 0.5rem;
  }
}
.share_cover{
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url(../../assets/images/5-1.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0.92;
}
.share_img{
  padding-top: 3rem;
  height: 10.975rem;
  width: 11.95rem;
  position: fixed;
  top: 0.5rem;
  left: 50%;
  margin-left: -5.975rem;
}
</style>