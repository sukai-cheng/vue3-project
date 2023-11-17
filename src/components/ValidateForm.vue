<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'

// 定义类型
type ValidateFunc = () => boolean
type Events = { 'form-item-created': any, value: any }
export const emitter = mitt<Events>()
export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    let funcArr: ValidateFunc[] = []
    const submitForm = () => {
      const result = funcArr.every(func => func())
      context.emit('form-submit', result)
    }
    // 创建回调函数
    const callback = (func: ValidateFunc) => {
      funcArr.push(func)
    }
    // 将callback添加到事件监听器中
    emitter.on('form-item-created', callback)
    // 将事件监听器清理干净
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    return {
      submitForm
    }
  }
})

</script>

<style scoped>

</style>
