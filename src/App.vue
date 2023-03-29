<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>

    <form>
      <div class="mb-3">
        <div>
          <label for="form-label">邮箱地址</label>
          <validate-input :rules="emailRules"></validate-input>
        </div>
        <div>
          <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
          <validate-input :rules="emailRules"></validate-input>
        </div>
        <div>
          <label for="exampleInputPassword1" class="form-label">密码</label>
          <validate-input :rules="emailRules"></validate-input>
        </div>
      </div>
    </form>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
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
    GlobalHeader,
    ValidateInput
  },
  setup () {
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    reactive({
      val: '',
      error: false,
      message: ''
    })
    return {
      list: testData,
      currentUser: currentUser,
      emailRules
    }
  }

})
</script>

<style>

</style>
