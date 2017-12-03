export default [
  {
    path: '/tasks',
    component: () => import('../views/Tasks')
  },
  {
    path: '/task',
    component: () => import('../views/Task')
  },
  {
    path: '/children',
    component: () => import('../views/Children')
  }
]
