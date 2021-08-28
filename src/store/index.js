import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  // 活动周数
  level: '第一周',
  // 第几题
  itemNum: 1,
  // 总共用时
  allTime: 0,
  // 定时器
  timer: '',
  itemDetail: [
    {
      "topic_id": 20,
      "active_topic_id": 4,
      "type": "ONE",
      "topic_name": "cutexx生气时该怎么做",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 1,
        "topic_id": 20,
        "answer_name": "和她讲道理",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 2,
        "topic_id": 20,
        "answer_name": "一个字：哄",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 3,
        "topic_id": 20,
        "answer_name": "让她自己冷静",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 4,
        "topic_id": 20,
        "answer_name": "自己也不高兴了",
        "is_standard_answer": 1
      }]
    },
    {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_name": "cutexx说自己又长胖了，此时你应该说：",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 5,
        "topic_id": 21,
        "answer_name": "长到100斤更好！",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 6,
        "topic_id": 21,
        "answer_name": "胖了更好看",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 7,
        "topic_id": 21,
        "answer_name": "不胖哦，胖瘦我都喜欢",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 8,
        "topic_id": 21,
        "answer_name": "那我监督你减肥",
        "is_standard_answer": 0
      }]
    },
    {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_name": "cutexx说她觉得很无聊，你该：",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 9,
        "topic_id": 21,
        "answer_name": "说：不无聊哦宝贝",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 10,
        "topic_id": 21,
        "answer_name": "让她找点事情做",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 11,
        "topic_id": 21,
        "answer_name": "跟她说要珍惜时间",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 12,
        "topic_id": 21,
        "answer_name": "自己去找一些好玩的好看的剧推荐给她",
        "is_standard_answer": 0
      }]
    },
    {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_name": "cutexx咳嗽了一声，此时你应该：",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 13,
        "topic_id": 21,
        "answer_name": "关心她，主动给她买药",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 14,
        "topic_id": 21,
        "answer_name": "当做没听见",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 15,
        "topic_id": 21,
        "answer_name": "说：咳嗽一下，不碍事",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 16,
        "topic_id": 21,
        "answer_name": "说：没事吧宝贝，多喝点热水",
        "is_standard_answer": 0
      }]
    },
    {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_name": "cutexx在生气时说：不要烦我，她是什么意思？",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 17,
        "topic_id": 21,
        "answer_name": "她觉得你烦",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 18,
        "topic_id": 21,
        "answer_name": "继续哄她",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 19,
        "topic_id": 21,
        "answer_name": "她想自己冷静",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 20,
        "topic_id": 21,
        "answer_name": "被凶了，自己也不高兴了",
        "is_standard_answer": 0
      }]
    }
  ],
  // 答案ID
  answerId: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
