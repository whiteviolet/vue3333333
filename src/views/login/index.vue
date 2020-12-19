<!--登录页  -->
<template>

  <div>这是个登录页</div>
  <!-- <div>账号：{{userName}}</div> -->
  <a-button type="primary">
      Primary
    </a-button>
  <!-- <div>密码：{{passWord}}</div> -->

</template>

<script>
import { ref, reactive } from 'vue'
export default {
    setup(){
      console.log("1")
    const loginInfo=ref({
        userName:'',
        passWord:''

    })
    return {
        loginInfo
    }
    }
}
</script>

<style>

</style>