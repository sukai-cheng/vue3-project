<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 my-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-start">{{ column.description }}</p>
          <a href="https://www.baidu.com" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { computed, defineComponent, PropType } from 'vue'

export interface ColumnProps {
  id: number,
  title: string,
  avatar?: string,
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
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/logo.png')
        }
        return column
      })
    })
    return {
      columnList
    }
  }

})

</script>

<style>
img {
  width: 150px;
  height: 150px;
}
</style>
