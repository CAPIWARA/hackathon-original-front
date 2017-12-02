export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home/HomeView')
  },
  {
    path: '/task',
    component: () => import('../components/Task/TaskView')
  },
  {
    path: '/wallet',
    component: () => import('../components/Wallet/WalletView')
  }
]
