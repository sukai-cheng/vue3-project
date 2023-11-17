<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>

    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <div>
          <label for="form-label">邮箱地址</label>
          <validate-input
            :rules="emailRules"
            v-model="emailVal"
            placeholder="请输入邮箱地址"
            type="text"
            ref="inputRef"
          >
          </validate-input>
        </div>
        <div>
          <label for="InputPassword" class="form-label">密码</label>
          <validate-input
            :rules="passwordRules"
            type="password"
            v-model="passwordVal"
            placeholder="请输入密码">
          </validate-input>
        </div>
      </div>
      <template v-slot:submit>
          <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
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
  // 将组件放在这里
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  setup () {
    const inputRef = ref<any>()
    const emailVal = ref('123@test.com')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordVal = ref('123')
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不正确' }
    ]
    const onFormSubmit = (result: boolean) => {
      console.log('result: ' + inputRef.value.validateInput())
      console.log('1234', result)
    }
    return {
      list: testData,
      currentUser: currentUser,
      emailRules,
      emailVal,
      onFormSubmit,
      inputRef,
      passwordVal,
      passwordRules
    }
  }

})
</script>

<style>

</style>
