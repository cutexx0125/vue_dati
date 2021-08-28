<template>
  <div>
    <item-container fatherComponent="item"></item-container>
  </div>
</template>

<script>
import ItemContainer from '../../components/itemContainer.vue'

export default {
  name: 'Item',
  components: {
    ItemContainer
  },
  created(){
    //进入题目页面，开始计时
    this.$store.commit('REMBER_TIME');
  }
}
</script>

<style lang="less" scoped>

</style>