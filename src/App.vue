<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

// mock数据
const currentUser: UserProps = {
  isLogin: true,
  name: '承苏凯'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'https://chengsukai.oss-cn-hangzhou.aliyuncs.com/2022-10-11/26466404-eacd-4741-8353-93b38586c905_e3284f319e256a5d.jpg'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏，有一段非常有意思的简介，可以更新一下欧'
    // avatar: ''
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test3的专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'https://chengsukai.oss-cn-hangzhou.aliyuncs.com/2022-10-11/26466404-eacd-4741-8353-93b38586c905_e3284f319e256a5d.jpg'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test4的专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'https://chengsukai.oss-cn-hangzhou.aliyuncs.com/2022-10-11/26466404-eacd-4741-8353-93b38586c905_e3284f319e256a5d.jpg'
  },
  {
    id: 5,
    title: 'test5的专栏',
    description: '这是test5的专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'https://chengsukai.oss-cn-hangzhou.aliyuncs.com/2022-10-11/26466404-eacd-4741-8353-93b38586c905_e3284f319e256a5d.jpg'
  }
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader

  },
  setup () {
    return {
      list: testData,
      currentUser: currentUser
    }
  }
})
</script>

<style>

</style>
