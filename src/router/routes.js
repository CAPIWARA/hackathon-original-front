import * as types from '../store/types'
import store from '../store'

const isPermissionChildren = (_, __, next) => {
  const hasChild = !!store.getters[types.CHILD]
  if (hasChild)
    return next()
  return next('/children')
}

export default [
  {
    path: '/tasks?status=pending',
    beforeEnter: isPermissionChildren,
    component: () => import('../views/Tasks')
  },
  {
    path: '/task',
    beforeEnter: isPermissionChildren,
    component: () => import('../views/Task')
  },
  {
    path: '/children',
    component: () => import('../views/Children')
  },
  {
    path: '/home',
    alias: '/',
    beforeEnter: isPermissionChildren,
    component: () => import('../views/Home')
  },
  {
    path: '/example',
    component: () => import('../views/IOT')
  }
]
