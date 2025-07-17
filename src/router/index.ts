import { createRouter, createWebHistory } from 'vue-router'
import routes from './base.ts'
import {getToken} from '@/utils/cache.ts'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const token=getToken()
  console.log(token,'token',to.path)
  if(to.path !== '/login'){
    if(token){
      next();
    }else{
      next("/login")
      console.log('error')
    }
  }else{
    next()
  }

})
export default router
