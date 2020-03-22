<template>
  <div class="front-container back-gray-bg-3">
    <div class="mh">
      <div>
        <head-page></head-page>
      </div>
      <div class="h330 gindex-baner-sub-menu ps-absolute zIndex10">
        <ul class="mt0 sub-menu-li h60">
          <li @click="to('/front')">首页</li>
          <li @click="to('/communityPage')">社团</li>
          <li @click="to('/activityPage')">活动</li>
          <li @click="to('/newsFlash')">新闻动态</li>
        </ul>
      </div>
      <div class="ps-relative carousel-container">
        <el-carousel>
          <el-carousel-item v-for="(item,index) in imgItems" :key="index">
            <img :src="item" alt="" class="wg100 hg100">
          </el-carousel-item>
        </el-carousel>
      </div>

      <div>
        <box-card style="padding-left: 50px;padding-right: 50px;"></box-card>
      </div>
      
      <div class="mt20 mb40">
        <el-row :gutter="20">
          <el-col :span="10" class="pl60">
            <div class="grid-content bg-purple">
              <div class="grid-content bg-purple">
                <div class="ps-relative">
                  <div class="title-line inlineblock veralign"></div>
                  <div class="inlineblock fb f20 veralign ml10">实时新闻</div>
                </div>
                <div class="mt24 ps-relative">
                  <el-carousel indicator-position="none">
                    <el-carousel-item v-for="(item,index) in imgItems" :key="index">
                      <img :src="item" alt="" class="w100 hg100 cursor-point">
                    </el-carousel-item>
                  </el-carousel>
                  <div class="ps-absolute h40 zIndex10 bg-gray-4 lh40 pl10 ellipsis-one-line pr10" style="bottom: 0;width: 100%;">
                    sjdofajdsfoafoaijdsofjoasdjfoiajsdofjosd
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="14" class="pr60">
            <div class="grid-content bg-purple">
              <div class="ps-relative">
                <div class="title-line inlineblock veralign"></div>
                <div class="inlineblock fb f20 veralign ml10">活动推荐</div>
                <div class="inlineblock co_b45 ps-absolute-right0 cursor-point">更多>></div>
              </div>
              <div>
                <ul class="pl15 active-ul">
                  <li class="listStyle cursor-point lh31 ps-relative">
                    <svg-icon icon-class="form" class="co_b45 veralign"/>
                    <span class="ellipsis-one-line inlineblock w80 f15 veralign ml5 fw300">音乐协会开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知</span>
                    <span class="co_b45 f14 veralign ps-absolute-right0">2020-03-21</span>
                  </li>
                  <li class="listStyle cursor-point lh31 ps-relative">
                    <svg-icon icon-class="form" class="co_b45 veralign"/>
                    <span class="ellipsis-one-line inlineblock w80 f15 veralign ml5 fw300">音乐协会开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知</span>
                    <span class="co_b45 f14 veralign ps-absolute-right0">2020-03-21</span>
                  </li>
                  <li class="listStyle cursor-point lh31 ps-relative">
                    <svg-icon icon-class="form" class="co_b45 veralign"/>
                    <span class="ellipsis-one-line inlineblock w80 f15 veralign ml5 fw300">音乐协会开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知</span>
                    <span class="co_b45 f14 veralign ps-absolute-right0">2020-03-21</span>
                  </li>
                  <li class="listStyle cursor-point lh31 ps-relative">
                    <svg-icon icon-class="form" class="co_b45 veralign"/>
                    <span class="ellipsis-one-line inlineblock w80 f15 veralign ml5 fw300">音乐协会开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知</span>
                    <span class="co_b45 f14 veralign ps-absolute-right0">2020-03-21</span>
                  </li>
                  <li class="listStyle cursor-point lh31 ps-relative">
                    <svg-icon icon-class="form" class="co_b45 veralign"/>
                    <span class="ellipsis-one-line inlineblock w80 f15 veralign ml5 fw300">音乐协会开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知</span>
                    <span class="co_b45 f14 veralign ps-absolute-right0">2020-03-21</span>
                  </li>
                  <li class="listStyle cursor-point lh31 ps-relative">
                    <svg-icon icon-class="form" class="co_b45 veralign"/>
                    <span class="ellipsis-one-line inlineblock w80 f15 veralign ml5 fw300">音乐协会开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知</span>
                    <span class="co_b45 f14 veralign ps-absolute-right0">2020-03-21</span>
                  </li>
                  <li class="listStyle cursor-point lh31 ps-relative">
                    <svg-icon icon-class="form" class="co_b45 veralign"/>
                    <span class="ellipsis-one-line inlineblock w80 f15 veralign ml5 fw300">音乐协会开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知</span>
                    <span class="co_b45 f14 veralign ps-absolute-right0">2020-03-21</span>
                  </li>
                  <li class="listStyle cursor-point lh31 ps-relative">
                    <svg-icon icon-class="form" class="co_b45 veralign"/>
                    <span class="ellipsis-one-line inlineblock w80 f15 veralign ml5 fw300">音乐协会开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知</span>
                    <span class="co_b45 f14 veralign ps-absolute-right0">2020-03-21</span>
                  </li>
                  <li class="listStyle cursor-point lh31 ps-relative">
                    <svg-icon icon-class="form" class="co_b45 veralign"/>
                    <span class="ellipsis-one-line inlineblock w80 f15 veralign ml5 fw300">音乐协会开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知</span>
                    <span class="co_b45 f14 veralign ps-absolute-right0">2020-03-21</span>
                  </li>
                  <li class="listStyle cursor-point lh31 ps-relative">
                    <svg-icon icon-class="form" class="co_b45 veralign"/>
                    <span class="ellipsis-one-line inlineblock w80 f15 veralign ml5 fw300">音乐协会开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知开会通知</span>
                    <span class="co_b45 f14 veralign ps-absolute-right0">2020-03-21</span>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      
      <div>
        <bottom-page></bottom-page>
      </div>
    </div>
  </div>
</template>
<script>
import lbtImg1 from '@/assets/frontImage/bg3.jpg'
import lbtImg2 from '@/assets/frontImage/bg4.jpg'
import BoxCard from '@/components/frontView/BoxCard'
import BottomPage from '@/components/frontView/BottomPage'
import HeadPage from '@/components/frontView/HeadPage'

export default {
  data() {
    return {
      imgItems: [lbtImg1, lbtImg2]
    }
  },
  components: {
    BoxCard,
    BottomPage,
    HeadPage
  },
  methods: {
    to(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>
<style scoped>
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.font-title-height {
  width: 80px;
  height: 50px;
  display: inline-block;
  line-height: 50px;
  vertical-align: top;
}
.el-button {
  padding: 8px 20px;
}
.login-button{
  display: flex;
  justify-content: flex-end;
  padding: 12px 50px 12px 12px;
}
.bg-purple[data-v-1b9511e0] {
  background: none;
}
.sub-menu-li {
  padding: 14px 80px;
}
.sub-menu-li li {
  list-style: none;
  padding: 0.3rem 1rem;
  margin-right: 50px;
  border-radius: 14px;
  float: left;
  color: #fff;
  line-height: 20px;
  font-size: 16px;
  /* background-color: blue; */
  cursor: pointer;
}
.sub-menu-li li:hover {
  background-color: rosybrown;
}
.carousel-container ul.el-carousel__indicators {
  background-color: rgba(0, 61, 125, 0.05) !important;
}
.active-ul li:hover span{
  font-weight: 600;
  font-size: 20px !important;
}
</style>