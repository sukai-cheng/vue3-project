<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between px-4">
    <a href="#" class="navbar-brand">知乎</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登陆</a></li>
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <dropdown :title="`你好 ${user.name}`">
        <dropdown-item disabled><a href="#" class="dropdown-item">新建文章</a></dropdown-item>
        <dropdown-item><a href="#" class="dropdown-item">编辑资料</a></dropdown-item>
        <dropdown-item><a href="#" class="dropdown-item">退出登录</a></dropdown-item>
      </dropdown>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from '@/components/Dropdown.vue'
import DropdownItem from '@/components/DropdownItem.vue'

export interface UserProps {
  isLogin: boolean,
  name?: string,
  id?: number
}
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
}
)
</script>

<style>

</style>
