<template>
  <div class="community-container back-gray-bg-3">
    <div class="mh">
      <div>
        <head-page></head-page>
      </div>
      <div>
        <baner-menu></baner-menu>
      </div>
      <div class="mb40">
        <div data-v-e456f7ec="" class="pt25 pb20 h150">
          <div data-v-e456f7ec="" class="font-purper-color-4 font-weight900 f24 lh28 font-family textAlign">高校社团，发现你的社团</div>
          <div class="flex-center mt20">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              class="w30 input-radius"
              v-model="input2">
            </el-input>
            <el-button type="primary" class="button-radius">主要按钮</el-button>
          </div>
        </div>
        
        <div class="mtlr">
          <div v-for="(item,index) in 4" :key="index" class="flex-2" @click="to('/communityPage/communityDetail')">
            <community-part ></community-part>
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
import CommunityPart from '@/components/frontView/CommunityPart'

export default {
  name: 'communityPage',
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
.flex-2 {
    width: 50%;
    margin-bottom: 30px;
    display: inline-block;
}
</style>