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
            <span class="fb f20 veralign">新闻列表</span>
          </div>
          <div class="inlineblock veralign ml5 fw550">
            <span class="font-gray-color f14">·</span>
            <span class="font-gray-color f12">共</span>
            <span class="app-font-color f12">3</span>
            <span class="font-gray-color f12">条新闻</span>
          </div>
        </div>
      </div>
      <div class="bg-f9 ptblr">
        <div class="news-list">
          <ul>
            <li data-v-75a077c6="" class="listStyle news-list-li" v-for="(item,index) in 9" :key="index">
              <div>
                <div data-v-75a077c6="" class="fb f16 lh24 ellipsis-one-line wm70 cursor-point inlineblock veralign" @click="to('/newsFlash/newsDetail')">
                  新闻名称新闻名称新闻名称新闻名称新闻名称新闻名称新闻名称新闻名称新闻名称
                  新闻名称新闻名称新闻名称新闻名称新闻名称新闻名称新闻名称新闻名称新闻名称新闻名称新闻名称新闻名称
                  新闻名称新闻名称新闻名称新闻名称
                </div>
                <div class="inlineblock veralign">（浏览8次）</div>
              </div>
              
              <div data-v-75a077c6="" class="f12 lh17 co_b25 w80 pb1rem">2020-03-06 14:20:44</div>
              <div data-v-75a077c6="" class="f14 lh24 co_b45 wd90 ellipsis-two-line">新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介
                新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介
                新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介
                新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介新闻简介
              </div>
            </li>
          </ul>
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
import CommunityPart from '@/components/frontView/CommunityPart'

export default {
  data() {
    return {
      input2: ''
    }
  },
  components: {
    BottomPage,
    HeadPage,
    BanerMenu,
    CommunityPart
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
    border: 1px solid #ebeef5;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    color: #303133;
    border-radius: 8px;
}
.activity-part .el-card .el-card__body {
    padding: 0 !important;
}
.news-list {
  border: 1px solid #ebeef5;
  background-color: #fff !important;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  color: #303133;
  border-radius: 8px;
}
.news-list-li {
  padding: 1rem 0rem;
  border-bottom: 1px solid #C6C6C6;
  margin-right: 2.5rem;
}
.news-list ul li:last-child {
  border-bottom: none;
}
</style>