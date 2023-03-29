<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" v-model="emailRef.val" @blur="validateEmail" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
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
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not be empty !'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'should be valid email !'
      }
    }
    return {
      list: testData,
      currentUser: currentUser,
      emailRef,
      validateEmail
    }
  }
})
</script>

<style>

</style>
