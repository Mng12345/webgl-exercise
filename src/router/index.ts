import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.tsx'),
    },
    {
      path: '/',
      name: 'exercise-layout',
      component: () => import('@/layout/exercise-layout.tsx'),
      children: [
        {
          path: 'exercise01',
          name: 'exercise01',
          component: () => import('@/views/exercise01.tsx'),
        },
      ],
    },
  ],
})

export default router
