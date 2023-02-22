<template>
  <ul>
    <li v-for="column in list" :key="column.id">
      <img :src="column.avatar" :alt="column.title">
      <h5>{{ column.title }}</h5>
      <p>{{ column.description }}</p>
      <a href="#">进入专栏</a>
    </li>
  </ul>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue'

export interface ColumnProps {
  id: number,
  title: string,
  avatar: string,
  description: string
}

export default defineComponent({
  // 名字
  name: 'ColumnList',
  // 属性
  props: {
    list: {
      // 构造函数断言成一个类型
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setup (props) {

  }
})

</script>

<style scoped>
ul > li {
  list-style-type: none;
}
ul > li > img {
  width: 150px;
  height: 150px;
}
</style>
