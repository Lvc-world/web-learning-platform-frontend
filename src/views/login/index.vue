<script setup lang="ts">
import { setCache } from '@/utils/cache.ts'
import { cacheToken } from '@/constants/cacheKey.ts'
import { useRouter } from 'vue-router'

const router = useRouter()
const login = () => {
  setCache(cacheToken, '9012-9022', false)
  // router.push('/')
}
const src='src/assets/images/loginBackground.png'
</script>

<template>
  <div class="login-container">
    <div class="login-background">
      <el-image :src="src" fit="scale-down"></el-image>
    </div>
    <div class="login-form">
      <el-form>
        <el-form-item label="用户名"></el-form-item>
        <el-form-item label=""></el-form-item>
        <el-form-item></el-form-item>
      </el-form>
      <el-button @click="login">登录</el-button>
    </div>

  </div>
</template>

<style scoped lang="scss">
.login-container{
  position: relative;
  width: 100%;
  height: 100%;
}
.login-background{
  width: 100%;
  height: 100%;
  .el-image{
    width: 100%;
    height: 100px;
  }
}
.login-form{
  position: absolute;
}
</style>
