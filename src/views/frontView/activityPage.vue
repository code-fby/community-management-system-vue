<template>
  <div class="community-container back-gray-bg-3">
    <div class="mh">
      <div>
        <head-page></head-page>
      </div>
      <div>
        <baner-menu></baner-menu>
      </div>
      <div>
        <div class="h60 lh60 pl100">
          <div class="inlineblock veralign">
            <i class="el-icon-menu veralign" style="color: #367bf0;" />
            <span class="fb f20 veralign">活动列表</span>
          </div>
          <div class="inlineblock veralign ml5 fw550">
            <span class="font-gray-color f14">·</span>
            <span class="font-gray-color f12">共</span>
            <span class="app-font-color f12">3</span>
            <span class="font-gray-color f12">个社团</span>
          </div>
        </div>
      </div>
      <div>
        <div class="ptlr bg-f9 activity-part pb40 flex-center-wrap">
          <div class="flex-3 cursor-point" v-for="(item,index) in 8" :key="index" @click="to('/activityPage/activityDetail')">
            <div class="h180">
              <img src="../../assets/activityImage/activityPhoto2.jpg" alt="" class="wg100 hg100 btl8 btr8">
            </div>
            <div class="fb mt15 ml20 mb10 f16 lh24">
              <span class="ellipsis-one-line w80 inlineblock">活动名称</span>
            </div>
            <div class="ml20 f14 lh22 co_b45 mb10">
              <span class="ellipsis-two-line wd90">活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介活动简介</span>
            </div>
            <div class="ml20 w80 f12 co_b45">
              <span>2020-03-13 17:38:50</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <bottom-page></bottom-page>
      </div>
    </div>
  </div>
</template>
<script>
import BottomPage from '@/components/frontView/BottomPage'
import HeadPage from '@/components/frontView/HeadPage'
import BanerMenu from '@/components/frontView/BanerMenu'

export default {
  data() {
    return {
      input2: ''
    }
  },
  components: {
    BottomPage,
    HeadPage,
    BanerMenu
  },
  methods: {
    to(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>
<style scoped>
.button-radius {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.flex-3 {
    width: 32%;
    margin-bottom: 30px;
    display: inline-block;
    height: 318px;
    margin-right: 8px;
    margin-left: 8px;
    /* border: 1px solid #ebeef5; */
    background-color: #fff;
    /* -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1); */
    color: #303133;
    border-radius: 8px;
}
.flex-3:hover {
  box-shadow:  0 2px 12px 0 rgba(175, 172, 172, 0.5);
}
.activity-part .el-card .el-card__body {
    padding: 0 !important;
}
</style>