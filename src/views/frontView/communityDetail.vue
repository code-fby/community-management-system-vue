<template>
  <div>
    <div class="mh">
      <div>
        <head-page></head-page>
      </div>
      <div>
        <baner-menu></baner-menu>
      </div>
      <div class="bg-f9 pb60">
        <div class="h60 lh60 pl100 f14 fb co_b25">
          <i class="el-icon-back mr5" />
          社团 / 社团详情
        </div>

        <div class="card ml80 mr80">
          <div class="community-detail-head">
            <el-row :gutter="20">
              <el-col :span="4">
                <div class="grid-content bg-purple h100">
                  <img src="../../assets/frontImage/activityPhoto2.jpg" alt="" class="hg100 wg100">
                </div>
              </el-col>
              <el-col :span="20" class="pl0">
                <div class="grid-content bg-purple h100 pd5">
                  <span class="fb f20">社团名称</span>
                  <div class="co_b45 f12 mt10">
                    <span>社团状态:</span>
                    <span>创建，审批中，已创建</span>
                  </div>
                  <div class="co_b45 f12 mt30">
                    <span>社团成立时间:</span>
                    <span>2020-06-20 12:23:50</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <div class="flex-end-box">
              <span class="mr10 co_bc f14">试试看，加入社团</span>
              <div class="pan-btn light-blue-btn p1230 mr0">去加入</div>
            </div>
          </div>
          <div class="community-detail-body mt20 pl100 pr100">
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <span class="f14 co_b45 fb">创建人:</span>
                  <span class="f14 co_b45">王某某</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <span class="f14 co_b45 fb">会长:</span>
                  <span class="f14 co_b45">王某某</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <span class="f14 co_b45 fb">副会长:</span>
                  <span class="f14 co_b45">吴某某</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <span class="f14 co_b45 fb">社团类别:</span>
                  <span class="f14 co_b45">学术性社团</span>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <span class="f14 co_b45 fb">社团人数:</span>
                  <span class="f14 co_b45">30</span>
                </div>
              </el-col>
            </el-row>
            <div class="mt20 mb10">
              <span class="f14 fb lh22 pt10 pb10 co_b8 block f16">社团简介</span>
              <span class="co_b45 f12 inlineblock mt10 mb10">
                社团简介社团简介社团简介社团简介社团简介社团简介社团简介社团简介社团简介
                社团简介社团简介社团简介社团简介社团简介社团简介社团简介社团简介社团简介
                社团简介社团简介社团简介社团简介社团简介社团简介社团简介社团简介社团简介
                社团简介社团简介社团简介社团简介
              </span>
            </div>
            <div class="mt10 mb10">
              <span class="f14 fb lh22 pt10 pb10 co_b8 block f16">社团宗旨</span>
              <span class="co_b45 f12 inlineblock mt10 mb10">
                社团宗旨社团宗旨社团宗旨社团宗旨社团宗旨社团宗旨社团宗旨社团宗旨社团宗旨
                社团宗旨社团宗旨社团宗旨社团宗旨社团宗旨社团宗旨社团宗旨社团宗旨社团宗旨
                社团宗旨社团宗旨社团宗旨社团宗旨社团宗旨社团宗旨社团宗旨社团宗旨
              </span>
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
    return {}
  },
  components: {
    BottomPage,
    HeadPage,
    BanerMenu
  },
  methods: {
    goBack() {
      this.$router.push({ path: '/communityPage' })
    }
  }
}
</script>
<style scoped>
.community-detail-head {
  padding-bottom: 10px;
  border-bottom: 0.1rem dashed #d8d8d8;
}
.divide-line {
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
}
.community-detail-body .grid-content {
  padding: 10px;
}
</style>