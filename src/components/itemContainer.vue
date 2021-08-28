<template>
  <div class="itemContainer">
    <header class="top_tips">
      <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
      <span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
    </header>
    <!-- home界面 -->
    <div v-if="fatherComponent == 'home'">
      <div class="home_logo item_container_style"></div>
      <router-link to="item" class="start button_style"></router-link>
    </div>
    <!-- item界面 -->
    <div v-if="fatherComponent == 'item'">
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="itemDetail.length > 0">
          <header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
          <ul>
            <li v-for="(item, index) in itemDetail[itemNum-1].topic_answer" 
            :key="index" @click="choosed(index, item.topic_answer_id)" 
            class="item_list">
              <span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>
    					<span class="option_detail">{{item.answer_name}}</span>
            </li>
          </ul>
        </div>
        <span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
    		<span class="submit_item button_style" v-else @click="submitAnswer"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'itemContainer',
  data() {
    return {
      // 题目ID
      itemId: null,
      // 选中答案索引
      choosedNum: null,
      // 选中答案ID
      choosedId: null
    }
  },
  props: ['fatherComponent'],
  computed:{
    ...mapState([
      'itemNum',
      'level',
      'itemDetail',
      'timer'
    ])
  },
  methods: {
    ...mapActions([
      'addNum',
      'initializeData'
    ]),
    // 点击下一题
    nextItem() {
      if (this.choosedNum !== null) {
        this.choosedNum = null;
        //保存答案, 题目索引加一，跳到下一题
        this.addNum(this.choosedId)
      }else{
        alert('您还没有选择答案哦')
      }
    },
    //索引0-3对应答案A-B
    chooseType: type => {
      switch(type){
        case 0: return 'A';
        case 1: return 'B';
        case 2: return 'C';
        case 3: return 'D';
      }
    },
    // 选中的答案信息
    choosed(type, id) {
      this.choosedNum = type;
      this.choosedId = id
    },
    // 到达最后一题，交卷，清空定时器，跳转分数页面
    submitAnswer() {
      if (this.choosedNum !== null) {
        this.addNum(this.choosedId);
        clearInterval(this.timer);
        this.$router.push('score')
      } else {
        alert('您还没有选择答案哦')
      }
    }
  },
  created() {
    // 初始化信息
    if (this.fatherComponent == 'home') {
      this.initializeData()
    }
  }
}
</script>

<style lang="less" scoped>
.itemContainer {
  height: 100vh;
  width: 100%;
  background: url(../assets/images/bg.jpg) no-repeat;
  background-size: 100% 100%;
}
.top_tips {
  position: absolute;
  height: 8.35rem;
  width: 4.25rem;
  top: -1.3rem;
  right: 1.4rem;
  background: url(../assets/images/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  z-index: 9;
  .num_tip {
    position: absolute;
    left: 0.88rem;
    bottom: 1.3rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.8rem;
    font-family: '黑体';
    font-weight: 600;
    color: darkblue;
    text-align: center;
  }
}
.item_container_style {
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.5rem;
  left: 3.5rem;
}
.home_logo {
  background-image: url(../assets/images/1-2.png);
  background-size: 13.142rem 100%;
  background-position: right center;
}
.button_style {
  display: block;
  height: 3.1rem;
  width: 5.35rem;
  background-size: 100% 100%;
  position: absolute;
  top: 26.5rem;
  left: 50%;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
}
.start {
  background-image: url(../assets/images/1-4.png);
}
.item_back {
  background-image: url(../assets/images/2-1.png);
  background-size: 100% 100%;
}
.next_item{
  background-image: url(../assets/images/2-2.png);
}
.submit_item{
  background-image: url(../assets/images/3-1.png);
}
.item_list_container{
  position: absolute;
  height: 7.0rem;
  width: 9.0rem;
  top: 2rem;
  left: 3rem;
  -webkit-font-smoothing: antialiased;
}
.item_title{
  font-size: 0.9rem;
  font-weight: 700;
  color: darkblue;
  line-height: 0.9rem;
}
.item_list{
  font-size: 0;
  margin-top: 0.6rem;
  width: 10rem;
  span{
    display: inline-block;
    font-size: 0.8rem;
    color:lightblue;
    vertical-align: middle;
  }
  .option_style{
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: 'Arial';
  }
  .has_choosed{
    background-color: darkblue;
    color: lightblue;
    border-color: darkblue;
  }
  .option_detail{
    width: 8.5rem;
    padding-top: 0.11rem;
  }
}
</style>