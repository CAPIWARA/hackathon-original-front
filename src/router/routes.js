export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home/HomeView')
  },
  {
    path: '/tasks',
    component: () => import('../components/Task/TaskView')
  },
  {
    path: '/task',
    component: () => import('../components/Task/TaskForm')
  },
  {
    path: '/wallet',
    component: () => import('../components/Wallet/WalletView')
  }
]
