
<template>
    
    <el-menu
    mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF"
    >
      <!-- ****************************************************************************** -->
      <div class="to-front-img" @click="toFrontView">
        <img :src="logo" alt="">社团
      </div>
      <!-- ****************************************************************************** -->
      <sidebar-item v-for="route in permission_routers" :key="route.name" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import logo from '@/assets/administration/xueshengshetuan2.png'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  data() {
    return {
      logo
    }
  },
  methods: {
    toFrontView: function() {
      this.$router.push({ path: '/front' })
    }
  }
}
</script>
<style scoped>
.to-front-img{
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: rosybrown;
}
</style>