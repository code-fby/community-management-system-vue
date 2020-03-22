import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Table', icon: 'table' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'complexTable' }
  //     },
  //     {
  //       path: 'fullcalendar',
  //       name: 'Fullcalendar',
  //       component: () => import('@/views/fullcalendar/fullcalendar'),
  //       meta: { title: 'calendar' }
  //     }
  //   ]
  // },
  // {
  //   path: '/tab',
  //   name: 'tab',
  //   component: Layout,
  //   meta: { icon: 'example' },
  //   children: [
  //     {
  //       path: 'Tabs',
  //       name: 'Tabs',
  //       component: () => import('@/views/tab/index'),
  //       meta: { title: 'Tabs', icon: 'tab' }
  //     }
  //   ]
  // },
  // 表单
  // {
  //   path: '/form',
  //   component: Layout,
  //   redirect: '/table/BaseForm',
  //   name: 'form',
  //   meta: {
  //     title: 'form',
  //     icon: 'form'
  //   },
  //   children: [
  //     {
  //       path: 'Form',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'BaseForm' }
  //     },
  //     {
  //       path: 'qiniu',
  //       name: 'qiniu',
  //       component: () => import('@/views/form/qiniu'),
  //       meta: { title: 'qiniu' }
  //     },
  //     {
  //       path: 'quillEditor',
  //       name: 'quillEditor',
  //       component: () => import('@/views/form/quillEditor'),
  //       meta: { title: 'quillEditor' }
  //     },
  //     {
  //       path: 'tinymce',
  //       name: 'tinymce',
  //       component: () => import('@/views/form/tinymce'),
  //       meta: { title: 'tinymce' }
  //     }
  //   ]
  // },
  // -----------------------------------------------后台菜单-----------------------------------------------
  // 测试
  {
    path: '/personCenter',
    name: 'personCenter',
    component: Layout,
    meta: { icon: 'example' },
    children: [
      {
        path: 'personCenter',
        name: 'personCenter',
        component: () => import('@/views/manageView/personCenter'),
        meta: { title: '个人中心', icon: 'tab' }
      }
    ]
  },
  // {
  //   path: '/personCenter',
  //   component: Layout,
  //   redirect: '/personCenter/BaseForm',
  //   name: 'personCenter',
  //   meta: {
  //     title: '个人中心',
  //     icon: 'form'
  //   },
  //   children: [
  //     {
  //       path: 'Form',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'BaseForm' }
  //     },
  //     {
  //       path: 'qiniu',
  //       name: 'qiniu',
  //       component: () => import('@/views/form/qiniu'),
  //       meta: { title: 'qiniu' }
  //     },
  //     {
  //       path: 'quillEditor',
  //       name: 'quillEditor',
  //       component: () => import('@/views/form/quillEditor'),
  //       meta: { title: 'quillEditor' }
  //     },
  //     {
  //       path: 'tinymce',
  //       name: 'tinymce',
  //       component: () => import('@/views/form/tinymce'),
  //       meta: { title: 'tinymce' }
  //     }
  //   ]
  // },
  // -----------------------------------------------后台菜单-----------------------------------------------
  // ******************************************************************************
  // 门户页面
  // 首页
  {
    path: '/front',
    component: () => import('@/views/frontView/index'),
    // redirect: '/dashboard',
    name: 'Front',
    hidden: true
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index')
    // }]
  },
  {
    path: '/BoxCard',
    component: () => import('@/components/frontView/BoxCard'),
    // redirect: '/dashboard',
    name: 'BoxCard',
    hidden: true
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index')
    // }]
  },
  {
    path: '/communityPart',
    component: () => import('@/components/frontView/CommunityPart'),
    // redirect: '/dashboard',
    name: 'communityPart',
    hidden: true
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index')
    // }]
  },
  // 社团页面
  {
    path: '/communityPage',
    component: () => import('@/views/frontView/communityPage'),
    // redirect: '/dashboard',
    name: 'communityPage',
    hidden: true
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index')
    // }]
  },
  // 社团详情
  {
    path: '/communityPage/communityDetail',
    component: () => import('@/views/frontView/communityDetail'),
    // redirect: '/dashboard',
    name: 'communityDetail',
    hidden: true
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index')
    // }]
  },
  // 活动页面
  {
    path: '/activityPage',
    component: () => import('@/views/frontView/activityPage'),
    // redirect: '/dashboard',
    name: 'activityPage',
    hidden: true
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index')
    // }]
  },
  // 活动详情
  {
    path: '/activityPage/activityDetail',
    component: () => import('@/views/frontView/activityDetail'),
    // redirect: '/dashboard',
    name: 'activityDetail',
    hidden: true
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index')
    // }]
  },
  // 新闻动态页面
  {
    path: '/newsFlash',
    component: () => import('@/views/frontView/newsFlash'),
    // redirect: '/dashboard',
    name: 'newsFlash',
    hidden: true
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index')
    // }]
  },
  // 新闻动态详情
  {
    path: '/newsFlash/newsDetail',
    component: () => import('@/views/frontView/newsDetail'),
    // redirect: '/dashboard',
    name: 'newsDetail',
    hidden: true
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index')
    // }]
  },
  // 登录页面
  {
    path: '/stuLogin',
    component: () => import('@/views/frontView/stulogin'),
    // redirect: '/dashboard',
    name: 'stuLogin',
    hidden: true
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index')
    // }]
  },
  // 老师登录页面
  {
    path: '/teaLogin',
    component: () => import('@/views/frontView/tealogin'),
    // redirect: '/dashboard',
    name: 'teaLogin',
    hidden: true
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index')
    // }]
  },
  // 学生注册页面
  {
    path: '/stuRegister',
    component: () => import('@/views/frontView/stuRegister'),
    // redirect: '/dashboard',
    name: 'stuRegister',
    hidden: true
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index')
    // }]
  },
  // 老师注册页面
  {
    path: '/teaRegister',
    component: () => import('@/views/frontView/teaRegister'),
    // redirect: '/dashboard',
    name: 'teaRegister',
    hidden: true
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index')
    // }]
  }
  // ******************************************************************************
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/icon',
    component: Layout,
    name: 'icons',
    meta: { roles: ['admin'] },
    children: [
      {
        path: 'iconIndex',
        name: 'iconIndex',
        component: () => import('@/views/svg-icon/index'),
        meta: { title: 'svgicons', icon: 'icon', roles: ['admin'] }
      }
    ]
  },
  // 树形组件
  {
    path: '/treeMen',
    component: Layout,
    redirect: 'noredirect',
    meta: {
      title: 'treeMen',
      icon: 'TreeMean'
    },
    children: [
      {
        path: 'treeMen',
        name: 'treeMen-demo',
        component: () => import('@/views/tree/index'),
        meta: { title: 'treeMen', icon: 'TreeMean' }
      }
    ]
  },
  // 组件
  {
    path: '/components',
    component: Layout,
    redirect: '/components/dragKanban',
    name: 'Components',
    meta: {
      title: 'Components',
      icon: 'component'
    },
    children: [
      {
        path: 'componentsmixin',
        name: 'mixin',
        component: () => import('@/views/components/backToTop'),
        meta: { title: 'backToTop' }
      },
      {
        path: 'mixin',
        name: 'componentMixin',
        component: () => import('@/views/components/mixin'),
        meta: { title: 'componentMixin' }
      }
    ]
  },
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/exportExcel',
    name: 'excel',
    meta: {
      title: 'excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'exportExcel',
        name: 'exportExcel',
        component: () => import('@/views/excel/exportExcel'),
        meta: { title: 'exportExcel', icon: 'excel' }
      }
    ]
  },
  {
    path: '/i18n-demo',
    component: Layout,
    redirect: 'i18n-demo',
    children: [
      {
        path: 'indexLang',
        name: 'indexLang',
        component: () => import('@/views/i18n-demo/indexLang'),
        meta: { title: 'i18n', icon: 'international' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
