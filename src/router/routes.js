const routes = [
  {
    name: 'a',
    path: '/a',
    component: () => import('@/view/A')
  },
  {
    name: 'b',
    path: '/b',
    component: () => import('@/view/B')
  },

];
export default routes